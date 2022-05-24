<template>
  <div>
    <el-container>
      <el-main>
        <!-- 头部搜索条件 -->
        <el-row :justify="'end'">
          <el-col :span="17" :offset="5">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item>
                <el-input v-model="formInline.hash" placeholder="Search your block" style="width:500px;" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">Query</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <!-- block信息展示 -->
        <el-row :justify="'center'">
          <el-col :span="22">
            <DescriptionUse :descriptions="{ column: 1, border: true }" :data="blockInfo"></DescriptionUse>
          </el-col>
        </el-row>
        <el-row :justify="'center'">
          <el-col :span="22">
            <h2 class="left">Block Transactions
            </h2>
            <list-info @handleCurrentChange="handleCurrentChange" :transaction="transaction"></list-info>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>

</template>

<script>
import DescriptionUse from "../components/DescriptionUse.vue";
import { searchBlockInfo } from "../api/block-search"
import { ElMessage } from "element-plus";
import ListInfo from "../components/ListInfo.vue";

const getBlockInfo = (that) => {
  if (!that.formInline.hash) {
    ElMessage({
      type: 'info',
      message: `请输入要对应的hash值再进行查询！`,
    })
  }
  searchBlockInfo(that.formInline.hash).then(res => { that.blockInfo = res; that.transaction = that.blockInfo['tx']; delete that.blockInfo['tx'] });
}
export default {
  components: { DescriptionUse, ListInfo },
  data() {
    return {
      blockInfo: {},
      formInline: { hash: '00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa' },
      transaction: [],
    }
  },
  methods: {
    onSubmit() {
      getBlockInfo(this)
    },
  },
  mounted() {
    //请求数据
    getBlockInfo(this)
  },

}
</script>
<style scoped>
.left {
  text-align: left;
}
</style>