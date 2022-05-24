import axios from 'axios';
jest.mock('axios');

test("测试 请求", async () => {
  // 改变函数的内部实现
  axios.get.mockResolvedValue({hash: "00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa"})

})
