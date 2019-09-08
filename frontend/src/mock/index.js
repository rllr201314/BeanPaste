var Mock=require("mockjs");

// 配置数据请求
Mock.mock("/index1","get",require("./json/index"))
Mock.mock("/film","get",require("./json/film"))
Mock.mock("/goodfilm","get",require("./json/goodfilm"))
Mock.mock("/fenlei","get",require("./json/fenlei"))
Mock.mock("/goodbook","get",require("./json/goodbook"))
Mock.mock("/bookss","get",require("./json/book"))
Mock.mock("/group","get",require("./json/xiaozu"))
Mock.mock("/guangbo","get",require("./json/guangbo"))
