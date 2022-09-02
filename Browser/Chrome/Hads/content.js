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

!function () {
    const hostname = window.location.hostname;
    console.log(hostname);
    if (/bing\.com/.test(hostname)) {
        hideBingAD();
    } else if (/baidu\.com/.test(hostname)) {
        hideBaiduAD();
    } else if (/google\.com/.test(hostname)) {
        hideGoogleAD();
    }

}()