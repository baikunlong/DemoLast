/**
 * 轮播图动画
 * @type {number}
 */
var left = 0;
var cirIndex = 0;//指标当前下标
var banners = document.getElementById("banners");
var sliderWrap = document.getElementsByClassName("sliderWrap")[0];

function startLeft(isN) {
    //消除上一个指标的状态
    var children = document.getElementsByClassName("cirbox")[0].children;
    children[cirIndex].classList.remove("active");
    if (isN === undefined) {
        left = left - 1040;
        if (left < -5200) {
            banners.style.transition = "transform 0.5s";
            left = 0;
        } else {
            banners.style.transition = "transform 0.8s";
        }
        banners.style.transform = "translateX(" + left + "px)";
        if (cirIndex === 5) cirIndex = -1;
        children[++cirIndex].classList.add("active");
    } else {
        left = left + 1040;
        if (left > 0) {
            banners.style.transition = "transform 0.5s";
            left = -5200;
        } else {
            banners.style.transition = "transform 0.8s";
        }
        banners.style.transform = "translateX(" + left + "px)";
        if (cirIndex === 0) cirIndex = 6;
        children[--cirIndex].classList.add("active");
    }
}

var imgInterval = setInterval(startLeft, 2500);

//鼠标移动到上面时就暂停播放且显示按钮
var bannersCtrl = document.getElementsByClassName("bannersCtrl");
sliderWrap.onmouseenter = function (ev) {
    bannersCtrl[0].style.display = "block";
    bannersCtrl[1].style.display = "block";
    clearInterval(imgInterval);
};
//监听鼠标离开用leave,用out移动鼠标就总会触发
sliderWrap.onmouseleave = function (ev) {
    bannersCtrl[0].style.display = "none";
    bannersCtrl[1].style.display = "none";
    imgInterval = setInterval(startLeft, 2500);
};


/**
 * 监听轮播图按钮
 * @param isLN
 */
function onChangeBanner(isLN) {
    //上一张
    if (isLN === 0) {
        startLeft(1);
    } else {
        startLeft(undefined);
    }
}

/**
 * 点击指标切换轮播图
 * @param index
 */
function onSwitchOver(index) {
    var children = document.getElementsByClassName("cirbox")[0].children;
    for (var i = 0; i < children.length; i++) {
        children[i].classList.remove("active");
    }
    children[index].classList.add("active");
    //改变当前指标
    cirIndex = index;
    left = index * -1040;
    banners.style.transition = "transform 0.7s";
    banners.style.transform = "translateX(" + left + "px)";
}
