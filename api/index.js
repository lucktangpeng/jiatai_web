const request = require("../request/index.js");

export const dianzulu_state = () => {
  return request.request({
    method: "get",
    url: "/one/state"
  });
};

export const dianzulu_only = params => {
  return request.request({
    method: "get",
    url: "/one/only",
    params
  });
};
// export const zhusu_only = (params) => {
//     return request.request({
//         method: 'get',
//         url: '/zhusu_only',
//         params
//     })
// }

// 二楼
export const zhusu_state = () => {
  return request.request({
    method: "get",
    url: "/zhusu_state"
  });
};

export const zhusu_only = params => {
  return request.request({
    method: "get",
    url: "/zhusu_only",
    params
  });
};

// 连接器 三种设备
export const lianjieqi_2_state = () => {
  return request.request({
    method: "get",
    url: "/three/state_2"
  });
};

export const lianjieqi_2_only_2 = params => {
  return request.request({
    method: "get",
    url: "/three/only_2",
    params
  });
};

export const lianjieqi_1_state = () => {
  return request.request({
    method: "get",
    url: "/three/state_1"
  });
};
export const lianjieqi_1_only = params => {
  return request.request({
    method: "get",
    url: "/three/only_1",
    params
  });
};

export const lianjieqi_3_state = () => {
  return request.request({
    method: "get",
    url: "/three/state_3"
  });
};

export const lianjieqi_3_only = params => {
  return request.request({
    method: "get",
    url: "/three/only_3",
    params
  });
};

// 自动铆合机
export const zidong_state = () => {
  return request.request({
    method: "get",
    url: "/three/zidong_state"
  });
};

// 自动点胶机
export const dianjiao_state = () => {
  return request.request({
    method: "get",
    url: "/three/dianjiao_state"
  });
};

// 自动点胶机
export const dianjiao_only = params => {
  return request.request({
    method: "get",
    url: "/three/dianjiao_only",
    params
  });
};

export const zidong_only = params => {
  return request.request({
    method: "get",
    url: "/three/zidong_only",
    params
  });
};
// 双金分拣机

// /three/shuangjin_state
export const shuangjin_state = () => {
  return request.request({
    method: "get",
    url: "/three/shuangjin_state"
  });
};

export const shuangjin_only = params => {
  return request.request({
    method: "get",
    url: "/three/shuangjin_only",
    params
  });
};

// 轴芯机 368 状态

export const zhouxin_368_state = () => {
  return request.request({
    method: "get",
    url: "/four/368_state"
  });
};

export const zhouxin_368_only = params => {
  return request.request({
    method: "get",
    url: "/four//368_only",
    params
  });
};

// 轴芯 688 状态
export const zhouxin_688_state = () => {
  return request.request({
    method: "get",
    url: "/four/688_state"
  });
};

export const zhouxin_688_only = params => {
  return request.request({
    method: "get",
    url: "/four//688_only",
    params
  });
};

// select * from zhuanchu where tagname like '三楼\线1_镭雕机1\[a-z]%'
// 三楼 镭雕机 状态
export const three_leidiao_state = () => {
  return request.request({
    method: "get",
    url: "/three/leidiao_state"
  });
};

export const three_leidiao_only = params => {
  return request.request({
    method: "get",
    url: "/three/leidiao_only",
    params
  });
};

// 四楼 镭雕机 状态
export const four_leidiao_state = () => {
  return request.request({
    method: "get",
    url: "/four/leidiao_state"
  });
};

export const leidiao_only = params => {
  return request.request({
    method: "get",
    url: "/four/leidiao_only",
    params
  });
};

// 四楼 自动制造线 状态
export const four_zhizaoxian_state = () => {
  return request.request({
    method: "get",
    url: "/four/zhizaoxian_state"
  });
};

export const four_zhizaoxian_only = params => {
  return request.request({
    method: "get",
    url: "/four/zhizaoxian_only",
    params
  });
};
// KSD368-5自动装配线 状态
export const zhuangpeixian_368_state = () => {
  return request.request({
    method: "get",
    url: "/four/zhuangpeixian_368_state"
  });
};

export const zhuangpeixian_368_only = params => {
  return request.request({
    method: "get",
    url: "/four/zhuangpeixian_368_only",
    params
  });
};

// 五楼 点焊机 状态
export const dianhan_state = () => {
  return request.request({
    method: "get",
    url: "/five/dianhan_state"
  });
};
// 五楼 点焊机 详情
export const dianhan_only = params => {
  return request.request({
    method: "get",
    url: "/five/dianhan_only",
    params
  });
};

// 五楼  自动螺丝机状态
export const luosiji_state = () => {
  return request.request({
    method: "get",
    url: "/five/luosiji_state"
  });
};
// 五楼 自动螺丝机 详情
export const luosiji_only = params => {
  return request.request({
    method: "get",
    url: "/five/luosiji_only",
    params
  });
};

// 五楼 自动流水 状态
export const liushui_state = () => {
  return request.request({
    method: "get",
    url: "/five/liushui_state"
  });
};
// 五楼 自动流水 详情
export const liushui_only = params => {
  return request.request({
    method: "get",
    url: "/five/liushui_only",
    params
  });
};

// 六楼水壶寿命测试机 状态
export const shuihu_state = () => {
  return request.request({
    method: "get",
    url: "/six/state"
  });
};

export const shuihu_only = params => {
  return request.request({
    method: "get",
    url: "/six/only",
    params
  });
};

// 电控柜 详情

export const diankong_only = params => {
  return request.request({
    method: "get",
    url: "/one/diankong_only",
    params
  });
};
