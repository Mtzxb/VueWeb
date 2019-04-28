


<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="ordernum" label="订单编号" width="180"></el-table-column>
      <el-table-column prop="store" label="门店名称" width="180"></el-table-column>
      <el-table-column prop="productnum" label="产品编号"></el-table-column>

      <el-table-column prop="productimg" label="产品图片">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <img :src="scope.row.productimg+'?x-oss-process=image/resize,m_pad,w_230,h_230'">
            <div slot="reference" class="name-wrapper">
              <img :src="scope.row.productimg+'?x-oss-process=image/resize,m_pad,w_50,h_50'">
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column prop="csmstate" label="供应状态"></el-table-column>
      <el-table-column prop="orderstate" label="订单状态"></el-table-column>
      <el-table-column prop="ctime" label="下单时间"></el-table-column>

      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      tableData: [
        {
          ordernum: "20190000421105",
          store: "周大福水贝店",
          productnum: "DT847T5",
          productimg:
            "http://pic.520zhubao.com/jade/DM000057/fb67f2f26def4df9b96d094d1d6014e6.jpg",
          csmstate: "在库",
          orderstate: "发货",
          ctime: "2019-01-25"
        },
        {
          ordernum: "20190000421105",
          store: "周大福水贝店",
          productnum: "DT847T5",
          productimg:
            "http://pic.520zhubao.com/jade/DM000057/fb67f2f26def4df9b96d094d1d6014e6.jpg",
          csmstate: "在库",
          orderstate: "发货",
          ctime: "2019-01-25"
        },
        {
          ordernum: "20190000421105",
          store: "周大福水贝店",
          productnum: "DT847T5",
          productimg:
            "http://pic.520zhubao.com/jade/DM000057/fb67f2f26def4df9b96d094d1d6014e6.jpg",
          csmstate: "在库",
          orderstate: "发货",
          ctime: "2019-01-25"
        },
        {
          ordernum: "20190000421105",
          store: "周大福水贝店",
          productnum: "DT847T5",
          productimg:
            "http://pic.520zhubao.com/jade/DM000057/fb67f2f26def4df9b96d094d1d6014e6.jpg",
          csmstate: "在库",
          orderstate: "发货",
          ctime: "2019-01-25"
        },
        {
          ordernum: "20190000421105",
          store: "周大福水贝店",
          productnum: "DT847T5",
          productimg:
            "http://pic.520zhubao.com/jade/DM000057/fb67f2f26def4df9b96d094d1d6014e6.jpg",
          csmstate: "在库",
          orderstate: "发货",
          ctime: "2019-01-25"
        }
      ]
    };
  },
  methods: {},
  computed: {}
};
</script>