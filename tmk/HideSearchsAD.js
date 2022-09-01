// ==UserScript==
// @name         HideSearchAD
// @namespace    https://github.com/mrzhxping/had
// @version      0.1
// @description  hide Bing AD！
// @author       You
// @match        *://*.bing.com/*
// @icon         https://www.bing.com/sa/simg/favicon-trans-bg-blue-mg.ico
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // 测试 代码
    // const TestNode = document.createElement("div");
    // TestNode.id = "TestNode";
    // TestNode.innerHTML = "TestNode TXT";
    // document.body.appendChild(TestNode);

    // 左侧浮窗
    const BingLeftPop = document.getElementById("LGPopDomainsContainer");
    console.log("BingLeftPop--->:", BingLeftPop);
    BingLeftPop && BingLeftPop.remove && BingLeftPop.remove();

    // 移除广告 1
    const SelectorValue1 = "li.b_algo>h2"
    let adNodeList1 = document.querySelectorAll(SelectorValue1);
    let adList1 = adNodeList1 && adNodeList1.length && Array.from(adNodeList1) || [];
    adList1 && adList1.length && adList1.forEach(ad => {
        console.log("ad-1-->:", ad.parentNode);
        ad && ad.parentNode && ad.parentNode.remove && ad.parentNode.remove();
    })

    // 移除广告 2
    const SelectorValue2 = "li.b_ad"
    let adNodeList2 = document.querySelectorAll(SelectorValue2);
    let adList2 = adNodeList2 && adNodeList2.length && Array.from(adNodeList2) || [];
    adList2 && adList2.length && adList2.forEach(ad => {
        console.log("ad-2-->:", ad);
        ad && ad.remove && ad.remove();
    });


})();