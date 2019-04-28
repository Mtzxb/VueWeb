<template>
  <div>
    <div style="margin-bottom:30px ; overflow:hidden">
      <el-col :span="24">
        <el-col :span="20" :offset="2">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="简易查询" name="third">
              <el-col :span="24" style="margin:5px 0">
                <el-col :span="1" style="font-size:12px; color:#909399; margin:5px 0 ">成品</el-col>
                <el-col :span="23">
                  <el-radio-group v-model="radio6" size="mini">
                    <el-radio-button label="吊坠">吊坠</el-radio-button>
                    <el-radio-button label="耳坠">耳坠</el-radio-button>
                    <el-radio-button label="脚链">脚链</el-radio-button>
                    <el-radio-button label="戒指">戒指</el-radio-button>
                    <el-radio-button label="手链">手链</el-radio-button>
                    <el-radio-button label="套链">套链</el-radio-button>
                    <el-radio-button label="项链">项链</el-radio-button>
                    <el-radio-button label="胸针">胸针</el-radio-button>
                    <el-radio-button label="摆件">摆件</el-radio-button>
                    <el-radio-button label="手镯">手镯</el-radio-button>
                  </el-radio-group>
                </el-col>
              </el-col>

              <el-col :span="24" style="margin:5px 0">
                <el-col :span="1" style="font-size:12px; color:#909399; margin:5px 0 ">款式</el-col>
                <el-col :span="23">
                  <el-radio-group v-model="radio7" size="mini">
                    <el-radio-button label="上海"></el-radio-button>
                    <el-radio-button label="北京"></el-radio-button>
                    <el-radio-button label="广州"></el-radio-button>
                    <el-radio-button label="深圳"></el-radio-button>
                  </el-radio-group>
                </el-col>
              </el-col>

              <el-col :span="24" style="margin:5px 0">
                <el-col :span="1" style="font-size:12px; color:#909399; margin:5px 0 ">题材</el-col>
                <el-col :span="23">
                  <el-radio-group v-model="radio8" size="mini">
                    <el-radio-button label="福瓜">福瓜</el-radio-button>
                    <el-radio-button label="异型">异型</el-radio-button>
                    <el-radio-button label="叶子">叶子</el-radio-button>
                    <el-radio-button label="佛公">佛公</el-radio-button>
                    <el-radio-button label="平安扣">平安扣</el-radio-button>
                    <el-radio-button label="摆件">摆件</el-radio-button>
                    <el-radio-button label="豆子">豆子</el-radio-button>
                    <el-radio-button label="方牌">方牌</el-radio-button>
                    <el-radio-button label="观音">观音</el-radio-button>
                    <el-radio-button label="葫芦">葫芦</el-radio-button>
                    <el-radio-button label="花件">花件</el-radio-button>
                    <el-radio-button label="马眼">马眼</el-radio-button>
                    <el-radio-button label="如意">如意</el-radio-button>
                    <el-radio-button label="水滴">水滴</el-radio-button>
                    <el-radio-button label="镶嵌">镶嵌</el-radio-button>
                    <el-radio-button label="心桃">心桃</el-radio-button>
                    <el-radio-button label="珠子">珠子</el-radio-button>
                    <el-radio-button label="竹节">竹节</el-radio-button>
                    <el-radio-button label="马鞍">马鞍</el-radio-button>
                    <el-radio-button label="蛋面">蛋面</el-radio-button>
                    <el-radio-button label="手镯">手镯</el-radio-button>
                  </el-radio-group>
                </el-col>
              </el-col>
            </el-tab-pane>
            <el-tab-pane label="专业查询" name="fourth">
              <el-col :span="24" style="margin:5px 0">
                <el-col :span="1" style="font-size:12px; color:#909399; margin:5px 0 ">成品</el-col>
                <el-col :span="23">
                  <el-radio-group v-model="radio6" size="mini">
                    <el-radio-button label="上海"></el-radio-button>
                    <el-radio-button label="北京"></el-radio-button>
                    <el-radio-button label="广州"></el-radio-button>
                    <el-radio-button label="深圳"></el-radio-button>
                  </el-radio-group>
                </el-col>
              </el-col>

              <el-col :span="24" style="margin:5px 0">
                <el-col :span="1" style="font-size:12px; color:#909399; margin:5px 0 ">款式</el-col>
                <el-col :span="23">
                  <el-radio-group v-model="radio7" size="mini">
                    <el-radio-button label="上海"></el-radio-button>
                    <el-radio-button label="北京"></el-radio-button>
                    <el-radio-button label="广州"></el-radio-button>
                    <el-radio-button label="深圳"></el-radio-button>
                  </el-radio-group>
                </el-col>
              </el-col>

              <el-col :span="24" style="margin:5px 0">
                <el-col :span="1" style="font-size:12px; color:#909399; margin:5px 0 ">题材</el-col>
                <el-col :span="23">
                  <el-radio-group v-model="radio8" size="mini">
                    <el-radio-button label="上海"></el-radio-button>
                    <el-radio-button label="北京"></el-radio-button>
                    <el-radio-button label="广州"></el-radio-button>
                    <el-radio-button label="深圳"></el-radio-button>
                  </el-radio-group>
                </el-col>
              </el-col>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-col>
    </div>

    <el-row>
      <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 1 : 0">
        <el-card
          :body-style="{ padding: '0px' }"
          style="margin-bottom:20px;text-align:center"
          @click.native="opendetail()"
        >
          <img
            src="http://pic.520zhubao.com/jade/DM000003/8770d9d46d91446b9b236d556366c057.jpg?x-oss-process=image/resize,m_pad,w_220,h_220"
            class="image"
          >
          <div style="padding: 5px;">
            <span>蛋面</span>
            <div class="bottom clearfix">
              <time class="time">价格：￥1000.00</time>
              <el-button type="text" class="button">收藏</el-button>
            </div>
          </div>
        </el-card>
        <el-card
          :body-style="{ padding: '0px' }"
          style="margin-bottom:20px;text-align:center"
          @click="opendetail(2)"
        >
          <img
            src="http://pic.520zhubao.com/jade/DM000003/8770d9d46d91446b9b236d556366c057.jpg?x-oss-process=image/resize,m_pad,w_220,h_220"
            class="image"
          >
          <div style="padding: 5px;">
            <span>蛋面</span>
            <div class="bottom clearfix">
              <time class="time">时间</time>
              <el-button type="text" class="button">收藏</el-button>
            </div>
          </div>
        </el-card>
        <el-card
          :body-style="{ padding: '0px' }"
          style="margin-bottom:20px;text-align:center"
          @click="opendetail(3)"
        >
          <img
            src="http://pic.520zhubao.com/jade/DM000003/8770d9d46d91446b9b236d556366c057.jpg?x-oss-process=image/resize,m_pad,w_220,h_220"
            class="image"
          >
          <div style="padding: 5px;">
            <span>蛋面</span>
            <div class="bottom clearfix">
              <time class="time">时间</time>
              <el-button type="text" class="button">收藏</el-button>
            </div>
          </div>
        </el-card>
        <el-card
          :body-style="{ padding: '0px' }"
          style="margin-bottom:20px;text-align:center"
          @click="opendetail(4)"
        >
          <img
            src="http://pic.520zhubao.com/jade/DM000003/8770d9d46d91446b9b236d556366c057.jpg?x-oss-process=image/resize,m_pad,w_220,h_220"
            class="image"
          >
          <div style="padding: 5px;">
            <span>蛋面</span>
            <div class="bottom clearfix">
              <time class="time">时间</time>
              <el-button type="text" class="button">收藏</el-button>
            </div>
          </div>
        </el-card>
        <el-card
          :body-style="{ padding: '0px' }"
          style="margin-bottom:20px;text-align:center"
          @click="handleClick(5)"
        >
          <img
            src="http://pic.520zhubao.com/jade/DM000003/8770d9d46d91446b9b236d556366c057.jpg?x-oss-process=image/resize,m_pad,w_220,h_220"
            class="image"
          >
          <div style="padding: 5px;">
            <span>蛋面</span>
            <div class="bottom clearfix">
              <time class="time">时间</time>
              <el-button type="text" class="button">收藏</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-col :span="24" class="toolbar">
      <el-pagination layout="prev, pager, next" :total="1000" style="float:right"></el-pagination>
    </el-col>

    <el-dialog :title="title" :visible.sync="dialogTableVisible" width="320px">
      <ProductDetail :form="form" :formLabelWidth="formLabelWidth" :dialogStatus="dialogStatus"></ProductDetail>
    </el-dialog>
  </div>
</template>
<style>
.el-tab-pane {
  padding-bottom: 20px;
}
</style>

<script>
import ProductDetail from "./ProductDetail";

export default {
  components: {
    ProductDetail
  },
  data() {
    return {
      total: 1,
      page: 10,
      activeName: "third",
      radio6: "吊坠",
      radio7: "上海",
      radio8: "福瓜",
      addLoading: false,
      dialogTableVisible: false,
      dialogStatus: "",
      title: "产品详情",
      form: {
        name: ""
      },
      formLabelWidth: ""
    };
  },
  methods: {
    opendetail(index) {
      this.dialogTableVisible = true;
      this.dialogStatus = index;
      this.form.name = "bgyl";
      this.formLabelWidth = "100";
    }
  }
};
</script>