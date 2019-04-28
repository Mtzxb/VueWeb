<template>
  <div>
    <el-row>
      <el-col>
        <div class="block">
          <el-carousel height="200px" indicator-position="none">
            <el-carousel-item v-for="item in items" :key="item">
              <img :src="item.imgurl">
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <el-col :span="5">货品名称：</el-col>
        <el-col :span="5">47444T</el-col>
        <el-col :span="4"></el-col>
        <el-col :span="5">类型：</el-col>
        <el-col :span="5">47444T</el-col>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <el-col :span="5">题材：</el-col>
        <el-col :span="4">47444T</el-col>
        <el-col :span="4"></el-col>
        <el-col :span="6">色调：</el-col>
        <el-col :span="6">47444T</el-col>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <el-col :span="6">光度：</el-col>
        <el-col :span="6">47444T</el-col>
        <el-col :span="4"></el-col>
        <el-col :span="6">纯度：</el-col>
        <el-col :span="4">47444T</el-col>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-col :span="6">色力：</el-col>
        <el-col :span="4">47444T</el-col>
        <el-col :span="4"></el-col>
        <el-col :span="6">型体：</el-col>
        <el-col :span="4">47444T</el-col>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-col :span="6">规格：</el-col>
        <el-col :span="4">47444T</el-col>
      </el-col>
    </el-row>
   
  </div>
</template>

<style lang="stylus" rel='stylesheet/stylus'>
.el-row 
    margin-bottom: 20px
    &:last-child 
      margin-bottom: 0
    
  
.el-col 
    border-radius: 4px
  
.el-carousel__item h3 
  color: #475669
  font-size: 14px
  opacity: 0.75
  line-height: 150px
  margin: 0


.el-carousel__item:nth-child(2n) 
  background-color: #99a9bf


.el-carousel__item:nth-child(2n + 1) 
  background-color: #d3dce6

.el-dialog__body
   padding-top:0

</style>


<script>
export default {
  props: {
    dialogStatus: "",
    form: {
      name: ""
    },
    formLabelWidth: ""
  },
  data() {
    return {
      items: [
        {
          imgurl:
            "http://pic.520zhubao.com/jade/12F200001924/fcf9aa6a84d04f1a9b9c5a24c5063316.jpg?x-oss-process=image/resize,m_pad,w_320,h_320",
          alt: "tip"
        },
        {
          imgurl:
            "http://pic.520zhubao.com/jade/12F200001924/fcf9aa6a84d04f1a9b9c5a24c5063316.jpg?x-oss-process=image/resize,m_pad,w_320,h_320",
          alt: "tip"
        },
        {
          imgurl:
            "http://pic.520zhubao.com/jade/12F200001924/fcf9aa6a84d04f1a9b9c5a24c5063316.jpg?x-oss-process=image/resize,m_pad,w_320,h_320",
          alt: "tip"
        },
        {
          imgurl:
            "http://pic.520zhubao.com/jade/12F200001924/fcf9aa6a84d04f1a9b9c5a24c5063316.jpg?x-oss-process=image/resize,m_pad,w_320,h_320",
          alt: "tip"
        }
      ]
    };
  },
  methods: {}
};
</script>

