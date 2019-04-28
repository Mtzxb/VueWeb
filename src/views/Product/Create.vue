<template>
  <div style="margin-top:50px">
    <el-row>
      <el-col :span="7">
        <el-col :span="8">
          <el-upload
            accept="image/jpeg,image/gif,image/png"
            :data="uploadData"
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将产品图片拖到此处，或
              <em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-col>
      </el-col>
      <el-col :span="12">
        <el-form ref="ruleForm" :model="ruleForm" label-width="80px" :rules="rules">
          <el-form-item label="产品条码" prop="productnum">
            <el-col :span="10">
              <el-input v-model="ruleForm.productnum"></el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="产品名称" prop="productname">
            <el-col :span="12">
              <el-input v-model="ruleForm.productname"></el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="重量" prop="productweight">
            <el-col :span="6">
              <el-input v-model.number="ruleForm.productweight" autocomplete="off"></el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="规格" prop="productguige">
            <el-col :span="8">
              <el-input v-model="ruleForm.productguige"></el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="镶嵌" prop="resource">
            <el-col :span="10">
              <el-radio-group v-model="ruleForm.resource" size="medium">
                <el-radio border label="无镶嵌"></el-radio>
                <el-radio border label="镶嵌"></el-radio>
              </el-radio-group>
            </el-col>
          </el-form-item>

          <el-form-item label="具体说明">
            <el-col :span="12">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click.native="submitForm" :loading="Logining">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import { fail } from "assert";
export default {
  data() {
    return {
      Logining: false,
      ruleForm: {
        productnum: "", // 产品条码
        productname: "", // 产品名称
        productweight: 0, // 重量
        productguige: "", // 规格
        resource: "", //  镶嵌
        desc: "", // 具体说明,
        radstr: Math.random().toString(36) + Date.parse(new Date())
      },
      rules: {
        productnum: [
          { required: true, message: "请输入产品条码", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 5 到 20 个字符", trigger: "blur" }
        ],
        productname: [
          { required: true, message: "请输入产品名称", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 5 到 20 个字符", trigger: "blur" }
        ],
        productweight: [
          { required: true, message: "请输入产品重量" },
          {
            type: "number",
            message: "重量必须为数字值",
            trigger: "blur",
            min: 0
          }
        ],
        productguige: [
          { required: true, message: "请输入产品规格", trigger: "blur" }
        ],
        resource: [{ required: true, message: "是否镶嵌", trigger: "change" }]
      }
    };
  },
  methods: {
    submitForm: function() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          let para = Object.assign({ radstr: this.radstr }, this.ruleForm)
          console.log(para);
        } else {
          console.log("error submit!!")
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  },
  watch: {
    "ruleForm.productweight": {
      deep: true,
      handler: function(newVal, oldVal) {
        //console.log(newVal,oldVal)
      }
    }
  }
};
</script>