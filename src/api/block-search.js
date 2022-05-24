import request from "../utils/request"
//search block info
export function searchBlockInfo(block_hash){
    return request({
        url:`https://blockchain.info/rawblock/${block_hash}`,
        method:'get'
    });
}