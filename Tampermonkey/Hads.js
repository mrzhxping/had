// ==UserScript==
// @name         Hads
// @namespace    https://github.com/mrzhxping/had
// @version      0.1
// @description  屏蔽百度、必应、Google搜索结果页面上的广告
// @author       You
// @match        *://*.bing.com/*
// @match        *://*.baidu.com/*
// @match        *://*.google.com/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAXdJREFUSMfFVbGOgkAQfWtoxNhb09gZqI3xB+it8T/8Cz/AUisTMfa0NDQ0FFqZaItG7Y4rhuGcvZVCT2+ax5uw82ZmhwF4YEUBAEFAWBSEYUh4OhFGkUT283t8Lgge6VhSsNkk1u0S5jlhGKIAgDiGAoDLhfhuV0VSAHA4kD9NiVNUIM/pyXWJZ5lSAHC7aRW7rrniVzugc04EsGSLuOL1mjCOZcOYX69U6XYrO3A8EklT8zk2xyFdz4PMbLX6TAd+dKyqYnHHdENv6YCmUyYwHFbDxZyFjLzfJ2y3pVCvJ7khjqZTJpAk1VSrez6dqgYAjEZ40oovABgMKG6no+s0ng38ZyaHZz6XfLEw8/2eKttsKmR/7bnfOuUVRJFcIK0W+XmYbFtytrshBACcz/XnbFvXKRPwfbm5fF8G1jkPU5JIv+dJYUMcTadMYDwm5EX0xs8QADCbES6X2iz8wyqWmWWZbKXjVOm99DPiiicTqVNjn/odfwMqMMHn+M/PbgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wOS0wMVQyMTowODoyMCswODowMPpZ0XAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDktMDFUMjE6MDg6MjArMDg6MDCLBGnMAAAAS3RFWHRzdmc6YmFzZS11cmkAZmlsZTovLy9ob21lL2FkbWluL2ljb24tZm9udC90bXAvaWNvbl9vODZhMGxpZTJzYi94X2ppbnpoaS5zdmduG9AQAAAAAElFTkSuQmCC
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // bing
    const hideBingAD = () => {
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

    }

    // baidu
    const hideBaiduAD = () => {
        console.log("百度没广告了？");
    }

    // google
    const hideGoogleAD = () => {
        console.log("Google AD?");
    }

    const hostname = window.location.hostname;
    console.log(hostname);
    if (/bing\.com/.test(hostname)) {
        hideBingAD();
    } else if (/baidu\.com/.test(hostname)) {
        hideBaiduAD();
    } else if (/google\.com/.test(hostname)) {
        hideGoogleAD();
    }

})();