import axios from 'axios'
// import router from '../routerManuaConfig'
import router from '../router/index'
import store from '../store'
import Vue from 'vue'

let base = 'http://192.168.0.245:8122'

var storeTemp = store
axios.interceptors.request.use(
    config => {
        var curTime = new Date()
        var expiretime = new Date(Date.parse(storeTemp.state.tokenExpire))

        if (storeTemp.state.token && (curTime < expiretime && storeTemp.state.tokenExpire)) {
            // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = 'Bearer ' + storeTemp.state.token
        }
       // saveRefreshtime()
        console.log('request.use')
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response) {
            if (error.response.status === 401) {
                var curTime = new Date()
                var refreshtime = new Date(Date.parse(window.localStorage.refreshtime))
                // 在用户操作的活跃期内
                if (window.localStorage.refreshtime && (curTime <= refreshtime)) {
                    return refreshToken({ token: window.localStorage.Token }).then((res) => {
                        if (res.success) {
                            Vue.prototype.$message({
                                message: 'refreshToken success! loading data...',
                                type: 'success'
                            })
                            store.commit('saveToken', res.token)

                            var curTime = new Date()
                            var expiredate = new Date(curTime.setSeconds(curTime.getSeconds() + res.expires_in));
                            store.commit('saveTokenExpire', expiredate)

                            error.config.__isRetryRequest = true
                            error.config.headers.Authorization = 'Bearer ' + res.token
                            return axios(error.config)
                        } else {
                            // 刷新token失败 清除token信息并跳转到登录页面
                            ToLogin()
                        }
                    })
                } else {
                    // 返回 401，并且不知用户操作活跃期内 清除token信息并跳转到登录页面
                    ToLogin()
                }

            }
            // 403 无权限
            if (error.response.status === 403) {
                Vue.prototype.$message({
                    message: '失败！该操作无权限',
                    type: 'error'
                })
                return null
            }
        }
        return '' // 返回接口返回的错误信息
    }
)

// 登录
export const requestLogin = params => {
    return axios.get(`${base}/api/UManager/Login`, { params: params }).then(res => res.data)
}


const ToLogin = params => {
    store.commit('saveToken', '')
    store.commit('saveTokenExpire', '')
    store.commit('saveTagsData', '')
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('NavigationBar')

    router.replace({
        path: '/login',
        query: { redirect: router.currentRoute.fullPath }
    })
}

export const getUserByToken = params => {
    return axios.get(`${base}/api/user/getInfoByToken`, { params: params }).then(res => res.data)
}


export function testapi2() {
    console.log('api is ok.')
}

export const testapi = pa => {
    console.log('api is ok.')
}

// 用户管理
export const getUserListPage = params => {
    return axios.get(`${base}/api/user/get`, { params: params })
}
export const removeUser = params => {
    return axios.delete(`${base}/api/user/delete`, { params: params })
}
export const editUser = params => {
    return axios.put(`${base}/api/user/put`, params)
}
export const addUser = params => {
    return axios.post(`${base}/api/user/post`, params)
}


