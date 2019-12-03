/**
 * Created by Administrator on 2019/11/28.
 */

/**
 * 使选择菜单背景变色
 * @param li 选中的菜单项
 */
function addActive(li) {
    var children = li.parentNode.children;
    for (var i = 0; i < children.length; i++) {
        children[i].classList.remove("active");
    }
    li.classList.add("active");
}

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
 * 加载更多
 * @param loadBtn
 */
function loadMore(loadBtn) {
    loadBtn.style.display = "none";
    var loadImg = document.getElementById("loadImg");
    loadImg.style.display = "block";
    setTimeout(function () {
        //插入相邻的html
        loadBtn.insertAdjacentHTML("beforebegin", '<div class="item animationFade">\n' +
            '            <p>强烈推荐</p>\n' +
            '            <div class="itemImg">\n' +
            '                <img src="img/1.jpg" alt="">\n' +
            '            </div>\n' +
            '\n' +
            '            <div class="gameRating">\n' +
            '                <p class="reviewCount">2847人评分</p>\n' +
            '                <p class="ratingScore">\n' +
            '                    <img src="img/score.png" alt="">\n' +
            '                    9.9\n' +
            '                </p>\n' +
            '            </div>\n' +
            '            <div class="gameInfo">\n' +
            '                <img src="img/1_icon.png" alt="">\n' +
            '                <div>\n' +
            '                    <p class="game-title">\n' +
            '                        <span>明日方舟</span>\n' +
            '                    </p>\n' +
            '                    <p class="game-description">「喧闹法则」现已开启，堕天使“莫斯提马”登场「喧闹法则」现已开启，堕天使“莫斯提马”登场「喧闹法则」现已开启，堕天使“莫斯提马”登场</p>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>');
        loadImg.style.display = "none";
        loadBtn.style.display = "block";
    }, 1000);
}

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

/**
 * 监听回车抬起后开始搜索
 * @param e
 */
function onKeyUp(e) {
    if (e.keyCode === 13) {
        alert("搜索中......");
    }
}

/**
 * 监听item是否出现，出现则添加动画
 * @type {Array}
 */
var elements = [];
var windowHeight = window.screen.availHeight;
function getTop(clsName) {
    var obj = document.getElementsByClassName(clsName);
    // console.log(obj[5].getBoundingClientRect().top);
    console.log(window.screen.availHeight);
    for (var i = 0; i < obj.length; i++) {
        if ((windowHeight - obj[i].getBoundingClientRect().top) > 100 && !obj[i].classList.contains("animationFade")) {
            elements.push(obj[i]);
        }
    }
}
window.addEventListener("scroll", function (evt) {
    getTop("item");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add("animationFade");
    }
});
