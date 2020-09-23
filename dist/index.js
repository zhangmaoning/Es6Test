"use strict";

// 变量声明
var a = 1;
var b = 2;
var d = "mollycheung";
{
  var c = 3;
  var b = 4;
}
window.onload = function () {
  // console.log("a:",a,"b:",b,"c:",c);
  console.log(d);
};
// 1.var 全局声明
// 2.let 局部声明
// 3.const 常量
