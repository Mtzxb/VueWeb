<template>
    <section>
            <el-row >
                <el-col :span="24" class="echarts-item">
                    <div class="content-title">产品访问量</div>
                    <ve-line :data="lineChartData" :settings="lineChartSettings" :mark-point="lineChartMarkPoint"></ve-line>
                </el-col>
            </el-row>
    </section>
</template>



<script>
    import Vue from 'vue'
    import VCharts from 'v-charts'
    
    Vue.use(VCharts)
    export default {
        name: 'AdminDashboard',
        data () {
            return {
                lineChartData: {
                    columns: ['日期', 'CP', 'LY', '占比', '其他'],
                    rows: [{
                        'CP': 1523, '日期': '1月1日', 'LY': 1523, '占比': 0.12, '其他': 100
                    }, {
                        'CP': 1223, '日期': '1月2日', 'LY': 1523, '占比': 0.345, '其他': 100
                    }, {
                        'CP': 2123, '日期': '1月3日', 'LY': 1523, '占比': 0.7, '其他': 100
                    }, {
                        'CP': 4123, '日期': '1月4日', 'LY': 1523, '占比': 0.31, '其他': 100
                    }, {
                        'CP': 3123, '日期': '1月5日', 'LY': 1523, '占比': 0.12, '其他': 100
                    }, {
                        'CP': 7123, '日期': '1月6日', 'LY': 1523, '占比': 0.65, '其他': 100
                    }]
                },
                lineChartSettings: {
                    metrics: ['CP', 'LY'],
                    dimension: ['日期']
                },
                lineChartMarkPoint: {
                    data: [{
                        name: '最大值',
                        type: 'max'
                    }]
                }
               
              
            }
        },
        created: function () {
        },
        methods: {
        }
    }
</script>

<style lang="stylus" rel='stylesheet/stylus'>
    .content-title
        clear: both
        font-weight: 400
        line-height: 50px
        padding: 10px 10px
        font-size: 22px
        color: #1f2f3d
    
</style>
