/**
 * Created by Administrator on 2019/11/28.
 */

//主Iframe
var mainPage = document.getElementById("mainPage");

/**
 * 添加回到顶部的按钮事件
 * @type {Element}
 */
var backTop = document.getElementsByClassName("backTop")[0];
var isShow = false;//默认没显示回到顶部按钮
var isT = true;//控制显示状态
window.addEventListener("scroll", function (evt) {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //backTop.style.display不能用style直接获取，全是空的https://www.jianshu.com/p/58c12245c2cc
    //window.getComputedStyle(backTop).getPropertyValue("display")==="none"
    if (scrollTop > 100 && !isShow) {
        backTop.classList.remove("animationFadeOut");
        backTop.classList.add("animationFade");
        backTop.style.display = "block";
        isShow = true;
    } else if (scrollTop < 100 && isShow && isT) {
        backTop.classList.remove("animationFade");
        backTop.classList.add("animationFadeOut");
        setTimeout(function () {
            backTop.style.display = "none";
            isShow = false;
            isT = true;
        }, 400);
        isT = false;
    }
});
backTop.onclick = function () {
    window.location.href = "#nav";
};


/**
 * 监听回车抬起后开始搜索
 * @param e
 */
function onKeyUp(e) {
    if (e.keyCode === 13) {
        alert("搜索功能开发中......");
    }
}

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

    switch (li.textContent) {
        case "首页":
            mainPage.src="main.html";
            cPage=0;
            break;
        case "排行榜":
            mainPage.src="top.html";
            cPage=1;
            //重新进入页面
            noNum=4;
            break;
        case "发现":
            mainPage.src="categories.html";
            cPage=2;
            break;
        case "论坛":
            mainPage.src="forum.html";
            cPage=3;
            break;
        case "视频":
            mainPage.src="video.html";
            cPage=4;
            break;
    }
}

var cPage=0;//默认首页
var mainIframe;//iframe

var noNum=4;//排行榜默认有4个
/**
 * 加载更多
 * @param loadBtn
 */
function loadMore(loadBtn) {
    loadBtn.style.display = "none";
    var loadImg = document.getElementById("loadImg");
    loadImg.style.display = "block";
    setTimeout(function () {
        //获取iframe信息参考https://www.cnblogs.com/dearxinli/p/4218668.html
        mainIframe = mainPage.contentWindow.document;
        switch (cPage) {
            case 0:
                moreMain();
                mainPage.height=mainIframe.body.scrollHeight;
                break;
            case 1:
                moreTop();
                //都有动画，但是不知道这里为啥多出了动画那一百px
                mainPage.height=mainIframe.body.scrollHeight-100;
                break;
        }
        loadImg.style.display = "none";
        loadBtn.style.display = "block";
    }, 1000);
}

function moreMain() {
    var left = mainIframe.getElementsByClassName("leftContent")[0];
    var div = document.createElement("div");
    div.classList.add("item");
    div.classList.add("animationFade");
    div.innerHTML="<p>强烈推荐</p>\n" +
        "            <div class=\"itemImg\">\n" +
        "                <img src=\"img/1.jpg\" alt=\"\">\n" +
        "            </div>\n" +
        "\n" +
        "            <div class=\"gameRating\">\n" +
        "                <p class=\"reviewCount\">2847人评分</p>\n" +
        "                <p class=\"ratingScore\">\n" +
        "                    <img src=\"img/score.png\" alt=\"\">\n" +
        "                    9.9\n" +
        "                </p>\n" +
        "            </div>\n" +
        "            <div class=\"gameInfo\">\n" +
        "                <img src=\"img/1_icon.png\" alt=\"\">\n" +
        "                <div>\n" +
        "                    <p class=\"game-title\">\n" +
        "                        <span>明日方舟</span>\n" +
        "                    </p>\n" +
        "                    <p class=\"game-description\">「喧闹法则」现已开启，堕天使“莫斯提马”登场「喧闹法则」现已开启，堕天使“莫斯提马”登场「喧闹法则」现已开启，堕天使“莫斯提马”登场</p>\n" +
        "                </div>\n" +
        "            </div>"
    left.appendChild(div);
}

function moreTop() {
    var mainContent = mainIframe.getElementsByClassName("mainContent")[0];
    var div = document.createElement("div");
    div.classList.add("item");
    div.classList.add("animationFade");
    div.innerHTML="<div>\n" +
        "            <img src=\"img/4_icon.png\" alt=\"\" class=\"imgIcon\">\n" +
        "        </div>\n" +
        "        <div class=\"description\">\n" +
        "            <h1>战双帕弥什</h1>\n" +
        "            <p>厂商: 库洛游戏</p>\n" +
        "            <p>评分: 9.8</p>\n" +
        "            <p>《战双帕弥什》是一款末世科幻题材的3D动作手游。你将化身指挥官，带领人类最后的希望——仿生人形「构造体」，共同对抗被「帕弥什」病毒感染的机械...</p>\n" +
        "        </div>\n" +
        "        <div>\n" +
        "            <img src=\"img/4.jpg\" alt=\"\" class=\"imgBig\">\n" +
        "        </div>\n" +
        "        <div class=\"itemTag\">\n" +
        "            <a href=\"#\">ARPG</a>\n" +
        "            <a href=\"#\">二次元</a>\n" +
        "            <a href=\"#\">高画质</a>\n" +
        "        </div>\n" +
        "        <div class=\"itemType\">\n" +
        "            <a href=\"#\">角色扮演</a>\n" +
        "        </div>\n" +
        "\n" +
        "        <div class=\"itemNumBg\">\n" +
        "        </div>\n" +
        "        <div class=\"itemNum\">\n" +
        "            "+(++noNum)+"\n" +
        "        </div>"
    mainContent.appendChild(div);
}


/**
 * 根据id参数，访问并记录当前页面
 * @param variable
 * @returns {*}
 */
function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] === variable){return pair[1];}
    }
    return(false);
}
var queryVariable = getQueryVariable("id");
var navLis = document.getElementById("nav").getElementsByTagName("li");
addActive(navLis[parseInt(queryVariable)]);


/**
 * 监听每个页面的每个item是否出现，出现则添加动画
 * @deprecated 因为Iframe为动态高，外部滚动事件在这没用，就算写一套也不能全部页面使用
 * @type {Array}
 */
// var elements = [];
// var windowHeight = window.screen.availHeight;
// function getTop(clsName) {
//     //用了iframe前
//     // var obj = document.getElementsByClassName(clsName);
//     //用了iframe后
//     //刷新mainIframe的值
//     mainIframe = mainPage.contentWindow.document;
//     var obj = mainIframe.getElementsByClassName(clsName);
//     //之前
//     // console.log(obj[5].getBoundingClientRect().top);
//     //之后
//     console.log(obj[5].getBoundingClientRect().bottom);
//     console.log(windowHeight);
//     for (var i = 0; i < obj.length; i++) {
//         if ((windowHeight - obj[i].getBoundingClientRect().top) > 100 && !obj[i].classList.contains("animationFade")) {
//             elements.push(obj[i]);
//         }
//     }
// }
//
// window.addEventListener("scroll", function (evt) {
//     getTop("item");
//     // console.log(elements.length);
//     for (var i = 0; i < elements.length; i++) {
//         elements[i].classList.add("animationFade");
//     }
// });