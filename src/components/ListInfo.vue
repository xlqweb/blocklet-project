<template>
    <div>
        <div v-for="mainItem in list" :key="mainItem.hash">
            <div class="flexColumn mt20">
                <!-- the first row show the fee info    -->
                <div class="container">
                    <div class="w50 flexRow">
                        <div class="wt100">Fee</div>
                        <div class="calWt">
                            <div class="flexColumn">
                                <span class="left">{{ mainItem.fee / 100000000 }} BTC </span>
                            </div>
                        </div>
                    </div>
                    <div class="w50">
                        <div class="left">{{ mainItem.totalOutput }}</div>
                    </div>
                </div>
                <!-- the second row hash info -->
                <div class="container mt10">
                    <div class="w50 flexRow">
                        <div class="wt100">Hash</div>
                        <div class="calWt">
                            <div class="flexColumn">
                                <span class="hashDeal">{{ mainItem.hash }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="w50">
                        <div>{{ mainItem.time }}</div>
                    </div>
                </div>
                <!-- the third row transaction info -->
                <div class="container ">
                    <div class="w50">
                        <div class="wt100"></div>
                        <div class="calWt ml100">
                            <div class="flexColumn">
                                <template v-for="item in mainItem.inputs" :key="item.sequence">
                                    <div class="flexRowSb">
                                        <a class="mt5 addrDeal" v-if="'addr' in item.prev_out"
                                            href="javascript:void(0)">
                                            {{ item.prev_out.addr }}
                                        </a>
                                        <span class="mt5" style="color:#E6A23C" v-else>COINBASE (Newly Generated
                                            Coins)</span>
                                        <div class="flexRowSb mt5">
                                            <span>{{ item.prev_out.value / 100000000 }} BTC</span>
                                            <a href="javascript:void(0)" v-if="'addr' in item.prev_out">
                                                <i class="iconfont icon-internet"></i>
                                            </a>
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                    <div class="w50 flexRowSb">
                        <div class="wt100"> <i class="iconfont icon-Arrow" style="color:#67C23A"></i>
                        </div>
                        <div class="calWt flexColumn">
                            <div class="flexColumn">
                                <template v-for="(item, index) in mainItem.out" :key="index">
                                    <div class="flexRowSb">
                                        <a class="mt5 outAddrDeal " v-if="item.addr" href="javascript:void(0)">{{
                                                item.addr
                                        }}</a>
                                        <span class="mt5" v-else>OP_RETURN</span>
                                        <div class="flexRowSb mt5">
                                            <span>{{ item.value / 100000000 }} BTC </span>
                                            <a href="javascript:void(0)" v-if="item.spent" style="color:#F56C6C">
                                                <i class="iconfont icon-internet"></i>
                                            </a>
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-pagination small background layout="prev, pager, next" :total="transaction.length" class="mt-4"
            v-model:currentPage="currentPage" v-model:pageSize="pageSize" @current-change="handleCurrentChange" />
    </div>
</template>

<script >
export default {
    props: {
        transaction: {
            type: Array,
            default: []
        },
    },
    data() {
        return {
            currentPage: 1,
            pageSize: 5,
            list: []
        }
    },
    watch: {
        transaction() {
            this.list = []
            for (let i = (this.currentPage - 1) * this.pageSize; i < this.currentPage * this.pageSize; i++) {
                this.list.push(this.transaction[i]);
            }
        }
    },
    methods: {
        handleCurrentChange() {
            this.list = []
            for (let i = (this.currentPage - 1) * this.pageSize; i < this.currentPage * this.pageSize; i++) {
                this.list.push(this.transaction[i]);
            }
        }
    },
}
</script>
<style scoped>
@import url(../assets/css/iconfont.css);

.flexColumn {
    display: flex;
    flex-direction: column;
}

.flexRow {
    display: flex;
    flex-direction: row;
}

.flexRowSb {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.w50 {
    width: 50%;
}

@media (min-width: 48rem) {
    .container {
        display: flex;
        flex-direction: row;
    }
}

.wt100 {
    width: 100px;
}

.ml100 {
    margin-left: 100px;
}

.mt20 {
    margin-top: 20px;
}

.mt10 {
    margin-top: 10px;
}

.mt5 {
    margin-top: 5px;
}

.calWt {
    width: calc(100% - 100px);
}

.hashDeal {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 400px;
}

.addrDeal {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 280px;
}

.outAddrDeal {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 260px;
}

.left {
    text-align: left;
}

a {
    color: #409EFF
}
</style>