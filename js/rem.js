/**
 * Created by Administrator on 2016/4/25 0025.
 */
//修改meta
var dpr,scale;
var docEl = document.documentElement;
var metaEl = document.querySelector('meta[name="viewport"]');

dpr = window.devicePixelRatio || 1;
scale = 1 / dpr;
// 设置viewport，进行缩放，达到高清效果
metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');
// 设置data-dpr属性，留作的css hack之用
docEl.setAttribute('data-dpr', dpr);

// 给js调用的，某一dpr下rem和px之间的转换函数

window.dpr = dpr;

