/**
 * Created by Administrator on 2019/11/28.
 */

//主Iframe,    mainPage=window.frames["mainPage"];
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

/**
 * 设置回到顶部的滑动效果
 * @type {number}
 */
var clientHeight = document.documentElement.clientHeight;   //获取可视区域的高度
var timer = null; //定义一个定时器
var cc = 0;
backTop.onclick = function () {    //回到顶部按钮点击事件
    //设置一个定时器
    timer = setInterval(function () {
        //获取滚动条的滚动高度
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        //用于设置速度差，产生缓动的效果
        var speed = Math.floor(-osTop / 30);
        document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
        console.log(++cc);
        if (osTop === 0) {
            clearInterval(timer);
        }
    }, 10);
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
            mainPage.innerHTML = "<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <title>Title</title>\n" +
                "    <link rel=\"stylesheet\" href=\"css/index.css\">\n" +
                "    <link rel=\"stylesheet\" href=\"css/common.css\">\n" +
                "\n" +
                "</head>\n" +
                "<body class=\"animationFade\">\n" +
                "\n" +
                "<!--轮播图-->\n" +
                "<div class=\"sliderWrap\">\n" +
                "    <ul id=\"banners\">\n" +
                "        <li class=\"sliderItem\"><a href=\"#\">\n" +
                "            <img src=\"img/1.jpg\" alt=\"\">\n" +
                "        </a></li>\n" +
                "        <li class=\"sliderItem\"><a href=\"#\">\n" +
                "            <img src=\"img/2.jpg\" alt=\"\">\n" +
                "        </a></li>\n" +
                "        <li class=\"sliderItem\"><a href=\"#\">\n" +
                "            <img src=\"img/3.jpg\" alt=\"\">\n" +
                "        </a></li>\n" +
                "        <li class=\"sliderItem\"><a href=\"#\">\n" +
                "            <img src=\"img/4.jpg\" alt=\"\">\n" +
                "        </a></li>\n" +
                "        <li class=\"sliderItem\"><a href=\"#\">\n" +
                "            <img src=\"img/5.jpg\" alt=\"\">\n" +
                "        </a></li>\n" +
                "        <li class=\"sliderItem\"><a href=\"#\">\n" +
                "            <img src=\"img/6.jpg\" alt=\"\">\n" +
                "        </a></li>\n" +
                "    </ul>\n" +
                "    <ol class=\"cirbox\">\n" +
                "        <li class=\"active\" onclick=\"onSwitchOver(0)\"></li>\n" +
                "        <li onclick=\"onSwitchOver(1)\"></li>\n" +
                "        <li onclick=\"onSwitchOver(2)\"></li>\n" +
                "        <li onclick=\"onSwitchOver(3)\"></li>\n" +
                "        <li onclick=\"onSwitchOver(4)\"></li>\n" +
                "        <li onclick=\"onSwitchOver(5)\"></li>\n" +
                "    </ol>\n" +
                "    <a href=\"javascript:onChangeBanner(0)\" class=\"bannersCtrl left\">《</a>\n" +
                "    <a href=\"javascript:onChangeBanner(1)\" class=\"bannersCtrl right\">》</a>\n" +
                "</div>\n" +
                "<!--游戏推荐列表与排行榜-->\n" +
                "<div class=\"mainContent\">\n" +
                "    <div class=\"leftContent\">\n" +
                "        <div class=\"item\">\n" +
                "            <p>强烈推荐</p>\n" +
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
                "            </div>\n" +
                "        </div>\n" +
                "        <div class=\"item\">\n" +
                "            <p>强烈推荐</p>\n" +
                "            <div class=\"itemImg\">\n" +
                "                <img src=\"img/2.jpg\" alt=\"\">\n" +
                "            </div>\n" +
                "            <div class=\"gameRating\">\n" +
                "                <p class=\"reviewCount\">2847人评分</p>\n" +
                "                <p class=\"ratingScore\">\n" +
                "                    <img src=\"img/score.png\" alt=\"\">\n" +
                "                    9.9\n" +
                "                </p>\n" +
                "            </div>\n" +
                "            <div class=\"gameInfo\">\n" +
                "                <img src=\"img/2_icon.png\" alt=\"\">\n" +
                "                <div>\n" +
                "                    <p class=\"game-title\">\n" +
                "                        <span>明日方舟</span>\n" +
                "                    </p>\n" +
                "                    <p class=\"game-description\">「喧闹法则」现已开启，堕天使“莫斯提马”登场「喧闹法则」现已开启，堕天使“莫斯提马”登场「喧闹法则」现已开启，堕天使“莫斯提马”登场</p>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "        <div class=\"item\">\n" +
                "            <p>强烈推荐</p>\n" +
                "            <div class=\"itemImg\">\n" +
                "                <img src=\"img/3.jpg\" alt=\"\">\n" +
                "            </div>\n" +
                "            <div class=\"gameRating\">\n" +
                "                <p class=\"reviewCount\">2847人评分</p>\n" +
                "                <p class=\"ratingScore\">\n" +
                "                    <img src=\"img/score.png\" alt=\"\">\n" +
                "                    9.9\n" +
                "                </p>\n" +
                "            </div>\n" +
                "            <div class=\"gameInfo\">\n" +
                "                <img src=\"img/3_icon.png\" alt=\"\">\n" +
                "                <div>\n" +
                "                    <p class=\"game-title\">\n" +
                "                        <span>明日方舟</span>\n" +
                "                    </p>\n" +
                "                    <p class=\"game-description\">「喧闹法则」现已开启，堕天使“莫斯提马”登场「喧闹法则」现已开启，堕天使“莫斯提马”登场「喧闹法则」现已开启，堕天使“莫斯提马”登场</p>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "        <div class=\"item\">\n" +
                "            <p>强烈推荐</p>\n" +
                "            <div class=\"itemImg\">\n" +
                "                <img src=\"img/4.jpg\" alt=\"\">\n" +
                "            </div>\n" +
                "            <div class=\"gameRating\">\n" +
                "                <p class=\"reviewCount\">2847人评分</p>\n" +
                "                <p class=\"ratingScore\">\n" +
                "                    <img src=\"img/score.png\" alt=\"\">\n" +
                "                    9.9\n" +
                "                </p>\n" +
                "            </div>\n" +
                "            <div class=\"gameInfo\">\n" +
                "                <img src=\"img/4_icon.png\" alt=\"\">\n" +
                "                <div>\n" +
                "                    <p class=\"game-title\">\n" +
                "                        <span>明日方舟</span>\n" +
                "                    </p>\n" +
                "                    <p class=\"game-description\">「喧闹法则」现已开启，堕天使“莫斯提马”登场「喧闹法则」现已开启，堕天使“莫斯提马”登场「喧闹法则」现已开启，堕天使“莫斯提马”登场</p>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "        <div class=\"item\">\n" +
                "            <p>强烈推荐</p>\n" +
                "            <div class=\"itemImg\">\n" +
                "                <img src=\"img/5.jpg\" alt=\"\">\n" +
                "            </div>\n" +
                "            <div class=\"gameRating\">\n" +
                "                <p class=\"reviewCount\">2847人评分</p>\n" +
                "                <p class=\"ratingScore\">\n" +
                "                    <img src=\"img/score.png\" alt=\"\">\n" +
                "                    9.9\n" +
                "                </p>\n" +
                "            </div>\n" +
                "            <div class=\"gameInfo\">\n" +
                "                <img src=\"img/5_icon.png\" alt=\"\">\n" +
                "                <div>\n" +
                "                    <p class=\"game-title\">\n" +
                "                        <span>明日方舟</span>\n" +
                "                    </p>\n" +
                "                    <p class=\"game-description\">「喧闹法则」现已开启，堕天使“莫斯提马”登场「喧闹法则」现已开启，堕天使“莫斯提马”登场「喧闹法则」现已开启，堕天使“莫斯提马”登场</p>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "        <div class=\"item\">\n" +
                "            <p>强烈推荐</p>\n" +
                "            <div class=\"itemImg\">\n" +
                "                <img src=\"img/6.jpg\" alt=\"\">\n" +
                "            </div>\n" +
                "            <div class=\"gameRating\">\n" +
                "                <p class=\"reviewCount\">2847人评分</p>\n" +
                "                <p class=\"ratingScore\">\n" +
                "                    <img src=\"img/score.png\" alt=\"\">\n" +
                "                    9.9\n" +
                "                </p>\n" +
                "            </div>\n" +
                "            <div class=\"gameInfo\">\n" +
                "                <img src=\"img/6_icon.png\" alt=\"\">\n" +
                "                <div>\n" +
                "                    <p class=\"game-title\">\n" +
                "                        <span>明日方舟</span>\n" +
                "                    </p>\n" +
                "                    <p class=\"game-description\">「喧闹法则」现已开启，堕天使“莫斯提马”登场「喧闹法则」现已开启，堕天使“莫斯提马”登场「喧闹法则」现已开启，堕天使“莫斯提马”登场</p>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "\n" +
                "    <!--右边排行榜-->\n" +
                "    <div class=\"rightContent\">\n" +
                "        <div class=\"titleSection\">\n" +
                "            <h3>排行榜</h3>\n" +
                "            <a href=\"#\">更多</a>\n" +
                "        </div>\n" +
                "        <ol class=\"gameList\">\n" +
                "            <li>\n" +
                "                <span class=\"itemOrder\">1</span>\n" +
                "                <a href=\"#\" class=\"itemIcon\">\n" +
                "                    <img src=\"img/1_icon.png\" alt=\"\">\n" +
                "                </a>\n" +
                "                <div class=\"itemText\">\n" +
                "                    <p><a href=\"#\">明日方舟</a></p>\n" +
                "                    <p>评分：9.9</p>\n" +
                "                    <p>卡牌 / 养成 / 角色扮演</p>\n" +
                "                </div>\n" +
                "            </li>\n" +
                "            <li>\n" +
                "                <span class=\"itemOrder\">2</span>\n" +
                "                <a href=\"#\" class=\"itemIcon\">\n" +
                "                    <img src=\"img/2_icon.png\" alt=\"\">\n" +
                "                </a>\n" +
                "                <div class=\"itemText\">\n" +
                "                    <p><a href=\"#\">明日方舟</a></p>\n" +
                "                    <p>评分：9.9</p>\n" +
                "                    <p>卡牌 / 养成 / 角色扮演</p>\n" +
                "                </div>\n" +
                "            </li>\n" +
                "            <li>\n" +
                "                <span class=\"itemOrder\">3</span>\n" +
                "                <a href=\"#\" class=\"itemIcon\">\n" +
                "                    <img src=\"img/3_icon.png\" alt=\"\">\n" +
                "                </a>\n" +
                "                <div class=\"itemText\">\n" +
                "                    <p><a href=\"#\">明日方舟</a></p>\n" +
                "                    <p>评分：9.9</p>\n" +
                "                    <p>卡牌 / 养成 / 角色扮演</p>\n" +
                "                </div>\n" +
                "            </li>\n" +
                "            <li>\n" +
                "                <span class=\"itemOrder\">4</span>\n" +
                "                <a href=\"#\" class=\"itemIcon\">\n" +
                "                    <img src=\"img/4_icon.png\" alt=\"\">\n" +
                "                </a>\n" +
                "                <div class=\"itemText\">\n" +
                "                    <p><a href=\"#\">明日方舟</a></p>\n" +
                "                    <p>评分：9.9</p>\n" +
                "                    <p>卡牌 / 养成 / 角色扮演</p>\n" +
                "                </div>\n" +
                "            </li>\n" +
                "            <li>\n" +
                "                <span class=\"itemOrder\">5</span>\n" +
                "                <a href=\"#\" class=\"itemIcon\">\n" +
                "                    <img src=\"img/5_icon.png\" alt=\"\">\n" +
                "                </a>\n" +
                "                <div class=\"itemText\">\n" +
                "                    <p><a href=\"#\">明日方舟</a></p>\n" +
                "                    <p>评分：9.9</p>\n" +
                "                    <p>卡牌 / 养成 / 角色扮演</p>\n" +
                "                </div>\n" +
                "            </li>\n" +
                "            <li>\n" +
                "                <span class=\"itemOrder\">6</span>\n" +
                "                <a href=\"#\" class=\"itemIcon\">\n" +
                "                    <img src=\"img/6_icon.png\" alt=\"\">\n" +
                "                </a>\n" +
                "                <div class=\"itemText\">\n" +
                "                    <p><a href=\"#\">明日方舟</a></p>\n" +
                "                    <p>评分：9.9</p>\n" +
                "                    <p>卡牌 / 养成 / 角色扮演</p>\n" +
                "                </div>\n" +
                "            </li>\n" +
                "            <li>\n" +
                "                <span class=\"itemOrder\">7</span>\n" +
                "                <a href=\"#\" class=\"itemIcon\">\n" +
                "                    <img src=\"img/7_icon.png\" alt=\"\">\n" +
                "                </a>\n" +
                "                <div class=\"itemText\">\n" +
                "                    <p><a href=\"#\">明日方舟</a></p>\n" +
                "                    <p>评分：9.9</p>\n" +
                "                    <p>卡牌 / 养成 / 角色扮演</p>\n" +
                "                </div>\n" +
                "            </li>\n" +
                "            <li>\n" +
                "                <span class=\"itemOrder\">8</span>\n" +
                "                <a href=\"#\" class=\"itemIcon\">\n" +
                "                    <img src=\"img/8_icon.png\" alt=\"\">\n" +
                "                </a>\n" +
                "                <div class=\"itemText\">\n" +
                "                    <p><a href=\"#\">明日方舟</a></p>\n" +
                "                    <p>评分：9.9</p>\n" +
                "                    <p>卡牌 / 养成 / 角色扮演</p>\n" +
                "                </div>\n" +
                "            </li>\n" +
                "            <li>\n" +
                "                <span class=\"itemOrder\">9</span>\n" +
                "                <a href=\"#\" class=\"itemIcon\">\n" +
                "                    <img src=\"img/9_icon.png\" alt=\"\">\n" +
                "                </a>\n" +
                "                <div class=\"itemText\">\n" +
                "                    <p><a href=\"#\">明日方舟</a></p>\n" +
                "                    <p>评分：9.9</p>\n" +
                "                    <p>卡牌 / 养成 / 角色扮演</p>\n" +
                "                </div>\n" +
                "            </li>\n" +
                "            <li>\n" +
                "                <span class=\"itemOrder\">10</span>\n" +
                "                <a href=\"#\" class=\"itemIcon\">\n" +
                "                    <img src=\"img/10_icon.png\" alt=\"\">\n" +
                "                </a>\n" +
                "                <div class=\"itemText\">\n" +
                "                    <p><a href=\"#\">明日方舟</a></p>\n" +
                "                    <p>评分：9.9</p>\n" +
                "                    <p>卡牌 / 养成 / 角色扮演</p>\n" +
                "                </div>\n" +
                "            </li>\n" +
                "        </ol>\n" +
                "    </div>\n" +
                "</div>\n" +
                "</body>\n" +
                "</html>\n" +
                "\n" +
                "<script src=\"js/main.js\"></script>";
            cPage = 0;
            break;
        case "排行榜":
            mainPage.innerHTML = "<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <title>排行榜</title>\n" +
                "    <link rel=\"stylesheet\" href=\"css/top.css\">\n" +
                "    <link rel=\"stylesheet\" href=\"css/common.css\">\n" +
                "\n" +
                "</head>\n" +
                "<body class=\"animationFade\">\n" +
                "<div class=\"topTitle\">\n" +
                "    <h1>Top 150</h1>\n" +
                "    <h3>排行榜</h3>\n" +
                "</div>\n" +
                "<!--<hr>-->\n" +
                "\n" +
                "<div class=\"topType\">\n" +
                "    <ul>\n" +
                "        <li class=\"active\">\n" +
                "            <a href=\"#\">热门榜</a>\n" +
                "        </li>\n" +
                "        <li>\n" +
                "            <a href=\"#\">新品榜</a>\n" +
                "        </li>\n" +
                "        <li>\n" +
                "            <a href=\"#\">预约榜</a>\n" +
                "        </li>\n" +
                "        <li>\n" +
                "            <a href=\"#\">热卖榜</a>\n" +
                "        </li>\n" +
                "        <li>\n" +
                "            <a href=\"#\">热玩榜</a>\n" +
                "        </li>\n" +
                "    </ul>\n" +
                "</div>\n" +
                "\n" +
                "<div class=\"mainContent\">\n" +
                "    <div class=\"item\">\n" +
                "        <div>\n" +
                "            <img src=\"img/top_1.png\" alt=\"\" class=\"imgIcon\">\n" +
                "        </div>\n" +
                "        <div class=\"description\">\n" +
                "            <h1>战双帕弥什</h1>\n" +
                "            <p>厂商: 库洛游戏</p>\n" +
                "            <p>评分: 9.8</p>\n" +
                "            <p>《战双帕弥什》是一款末世科幻题材的3D动作手游。你将化身指挥官，带领人类最后的希望——仿生人形「构造体」，共同对抗被「帕弥什」病毒感染的机械...</p>\n" +
                "        </div>\n" +
                "        <div>\n" +
                "            <img src=\"img/top_1_big.jpg\" alt=\"\" class=\"imgBig\">\n" +
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
                "        <div class=\"itemNumBg itemNumBg123\">\n" +
                "        </div>\n" +
                "        <div class=\"itemNum\">\n" +
                "            1\n" +
                "        </div>\n" +
                "    </div>\n" +
                "    <div class=\"item\">\n" +
                "        <div>\n" +
                "            <img src=\"img/5_icon.png\" alt=\"\" class=\"imgIcon\">\n" +
                "        </div>\n" +
                "        <div class=\"description\">\n" +
                "            <h1>战双帕弥什</h1>\n" +
                "            <p>厂商: 库洛游戏</p>\n" +
                "            <p>评分: 9.8</p>\n" +
                "            <p>《战双帕弥什》是一款末世科幻题材的3D动作手游。你将化身指挥官，带领人类最后的希望——仿生人形「构造体」，共同对抗被「帕弥什」病毒感染的机械...</p>\n" +
                "        </div>\n" +
                "        <div>\n" +
                "            <img src=\"img/5.jpg\" alt=\"\" class=\"imgBig\">\n" +
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
                "        <div class=\"itemNumBg itemNumBg123\">\n" +
                "        </div>\n" +
                "        <div class=\"itemNum\">\n" +
                "            2\n" +
                "        </div>\n" +
                "    </div>\n" +
                "    <div class=\"item\">\n" +
                "        <div>\n" +
                "            <img src=\"img/6_icon.png\" alt=\"\" class=\"imgIcon\">\n" +
                "        </div>\n" +
                "        <div class=\"description\">\n" +
                "            <h1>战双帕弥什</h1>\n" +
                "            <p>厂商: 库洛游戏</p>\n" +
                "            <p>评分: 9.8</p>\n" +
                "            <p>《战双帕弥什》是一款末世科幻题材的3D动作手游。你将化身指挥官，带领人类最后的希望——仿生人形「构造体」，共同对抗被「帕弥什」病毒感染的机械...</p>\n" +
                "        </div>\n" +
                "        <div>\n" +
                "            <img src=\"img/6.jpg\" alt=\"\" class=\"imgBig\">\n" +
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
                "        <div class=\"itemNumBg itemNumBg123\">\n" +
                "        </div>\n" +
                "        <div class=\"itemNum\">\n" +
                "            3\n" +
                "        </div>\n" +
                "    </div>\n" +
                "    <div class=\"item\">\n" +
                "        <div>\n" +
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
                "            4\n" +
                "        </div>\n" +
                "    </div>\n" +
                "\n" +
                "</div>\n" +
                "\n" +
                "</body>\n" +
                "</html>";
            cPage = 1;
            //重新进入页面
            noNum = 4;
            break;
        case "发现":
            mainPage.innerHTML = "<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <title>Title</title>\n" +
                "    <link rel=\"stylesheet\" href=\"css/common.css\">\n" +
                "    <link rel=\"stylesheet\" href=\"css/categories.css\">\n" +
                "</head>\n" +
                "<body class=\"animationFade\">\n" +
                "<ul class=\"categoryTags\">\n" +
                "    <li class=\"tag\">\n" +
                "        <a href=\"#\">往期推荐</a>\n" +
                "    </li>\n" +
                "    <li class=\"tag\">\n" +
                "        <a href=\"#\">多人联机</a>\n" +
                "    </li>\n" +
                "    <li class=\"tag\">\n" +
                "        <a href=\"#\">单机</a>\n" +
                "    </li>\n" +
                "    <li class=\"tag\">\n" +
                "        <a href=\"#\">角色扮演</a>\n" +
                "    </li>\n" +
                "    <li class=\"tag\">\n" +
                "        <a href=\"#\">动作</a>\n" +
                "    </li>\n" +
                "    <li class=\"tag\">\n" +
                "        <a href=\"#\">MOBA</a>\n" +
                "    </li>\n" +
                "    <li class=\"tag\">\n" +
                "        <a href=\"#\">策略</a>\n" +
                "    </li>\n" +
                "    <li class=\"tag\">\n" +
                "        <a href=\"#\">卡牌</a>\n" +
                "    </li>\n" +
                "    <li class=\"tag\">\n" +
                "        <a href=\"#\">生存</a>\n" +
                "    </li>\n" +
                "    <li class=\"tag\">\n" +
                "        <a href=\"#\">模拟</a>\n" +
                "    </li>\n" +
                "    <li class=\"tag\">\n" +
                "        <a href=\"#\">竞速</a>\n" +
                "    </li>\n" +
                "    <li class=\"tag\">\n" +
                "        <a href=\"#\">益智</a>\n" +
                "    </li>\n" +
                "    <li class=\"tag\">\n" +
                "        <a href=\"#\">二次元</a>\n" +
                "    </li>\n" +
                "\n" +
                "</ul>\n" +
                "\n" +
                "<div class=\"mainContent\">\n" +
                "    <div class=\"item\">\n" +
                "        <div class=\"titleSection\">\n" +
                "            <h3>每日新发现</h3>\n" +
                "            <a href=\"#\">更多</a>\n" +
                "        </div>\n" +
                "        <div class=\"subList\">\n" +
                "            <div class=\"subItem\">\n" +
                "                <a href=\"#\">\n" +
                "                    <img src=\"img/categories1.png\" alt=\"\">\n" +
                "                </a>\n" +
                "                <div class=\"subItemInfo\">\n" +
                "                    <a href=\"#\" class=\"subItemName\">电竞传奇</a>\n" +
                "                    <a href=\"#\" class=\"subItemType\">模拟</a>\n" +
                "                    <span class=\"subItemScore\">9.9</span>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "            <div class=\"subItem\">\n" +
                "                <a href=\"#\">\n" +
                "                    <img src=\"img/categories2.png\" alt=\"\">\n" +
                "                </a>\n" +
                "                <div class=\"subItemInfo\">\n" +
                "                    <a href=\"#\" class=\"subItemName\">樱桃湾之夏</a>\n" +
                "                    <a href=\"#\" class=\"subItemType\">模拟</a>\n" +
                "                    <span class=\"subItemScore\">9.9</span>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "            <div class=\"subItem\">\n" +
                "                <a href=\"#\">\n" +
                "                    <img src=\"img/categories3.png\" alt=\"\">\n" +
                "                </a>\n" +
                "                <div class=\"subItemInfo\">\n" +
                "                    <a href=\"#\" class=\"subItemName\">阿卡迪亚</a>\n" +
                "                    <a href=\"#\" class=\"subItemType\">卡牌</a>\n" +
                "                    <span class=\"subItemScore\">9.9</span>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "            <div class=\"subItem\">\n" +
                "                <a href=\"#\">\n" +
                "                    <img src=\"img/categories4.png\" alt=\"\">\n" +
                "                </a>\n" +
                "                <div class=\"subItemInfo\">\n" +
                "                    <a href=\"#\" class=\"subItemName\">无尽银河</a>\n" +
                "                    <a href=\"#\" class=\"subItemType\">策略</a>\n" +
                "                    <span class=\"subItemScore\">9.9</span>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "            <div class=\"subItem\">\n" +
                "                <a href=\"#\">\n" +
                "                    <img src=\"img/categories5.png\" alt=\"\">\n" +
                "                </a>\n" +
                "                <div class=\"subItemInfo\">\n" +
                "                    <a href=\"#\" class=\"subItemName\">幽行玄城</a>\n" +
                "                    <a href=\"#\" class=\"subItemType\">角色扮演</a>\n" +
                "                    <span class=\"subItemScore\">9.9</span>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "            <div class=\"subItem\">\n" +
                "                <a href=\"#\">\n" +
                "                    <img src=\"img/categories6.png\" alt=\"\">\n" +
                "                </a>\n" +
                "                <div class=\"subItemInfo\">\n" +
                "                    <a href=\"#\" class=\"subItemName\">猎人</a>\n" +
                "                    <a href=\"#\" class=\"subItemType\">角色扮演</a>\n" +
                "                    <span class=\"subItemScore\">9.9</span>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "    <div class=\"item\">\n" +
                "        <div class=\"titleSection\">\n" +
                "            <h3>MOBA</h3>\n" +
                "            <a href=\"#\">更多</a>\n" +
                "        </div>\n" +
                "        <div class=\"subList\">\n" +
                "            <div class=\"subItem\">\n" +
                "                <a href=\"#\">\n" +
                "                    <img src=\"img/categories7.png\" alt=\"\">\n" +
                "                </a>\n" +
                "                <div class=\"subItemInfo\">\n" +
                "                    <a href=\"#\" class=\"subItemName\">王者荣耀</a>\n" +
                "                    <a href=\"#\" class=\"subItemType\">动作</a>\n" +
                "                    <span class=\"subItemScore\">9.9</span>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "            <div class=\"subItem\">\n" +
                "                <a href=\"#\">\n" +
                "                    <img src=\"img/categories8.png\" alt=\"\">\n" +
                "                </a>\n" +
                "                <div class=\"subItemInfo\">\n" +
                "                    <a href=\"#\" class=\"subItemName\">COMPAS</a>\n" +
                "                    <a href=\"#\" class=\"subItemType\">动作</a>\n" +
                "                    <span class=\"subItemScore\">9.9</span>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "            <div class=\"subItem\">\n" +
                "                <a href=\"#\">\n" +
                "                    <img src=\"img/categories9.png\" alt=\"\">\n" +
                "                </a>\n" +
                "                <div class=\"subItemInfo\">\n" +
                "                    <a href=\"#\" class=\"subItemName\">决战！平安京</a>\n" +
                "                    <a href=\"#\" class=\"subItemType\">动作</a>\n" +
                "                    <span class=\"subItemScore\">9.9</span>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "            <div class=\"subItem\">\n" +
                "                <a href=\"#\">\n" +
                "                    <img src=\"img/categories10.png\" alt=\"\">\n" +
                "                </a>\n" +
                "                <div class=\"subItemInfo\">\n" +
                "                    <a href=\"#\" class=\"subItemName\">虚荣 (Vainglory)\n" +
                "                    </a>\n" +
                "                    <a href=\"#\" class=\"subItemType\">策略</a>\n" +
                "                    <span class=\"subItemScore\">9.9</span>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "            <div class=\"subItem\">\n" +
                "                <a href=\"#\">\n" +
                "                    <img src=\"img/categories11.png\" alt=\"\">\n" +
                "                </a>\n" +
                "                <div class=\"subItemInfo\">\n" +
                "                    <a href=\"#\" class=\"subItemName\">非人学园\n" +
                "                    </a>\n" +
                "                    <a href=\"#\" class=\"subItemType\">角色扮演</a>\n" +
                "                    <span class=\"subItemScore\">9.9</span>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "            <div class=\"subItem\">\n" +
                "                <a href=\"#\">\n" +
                "                    <img src=\"img/categories12.png\" alt=\"\">\n" +
                "                </a>\n" +
                "                <div class=\"subItemInfo\">\n" +
                "                    <a href=\"#\" class=\"subItemName\">王者荣耀体验服</a>\n" +
                "                    <a href=\"#\" class=\"subItemType\">动作</a>\n" +
                "                    <span class=\"subItemScore\">9.9</span>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "\n" +
                "</div>\n" +
                "</body>\n" +
                "</html>";
            cPage = 2;
            //重新进入页面
            cateIndex = 0;
            break;
        case "论坛":
            mainPage.innerHTML = "<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <title>Title</title>\n" +
                "    <link rel=\"stylesheet\" href=\"css/common.css\">\n" +
                "    <link rel=\"stylesheet\" href=\"css/forum.css\">\n" +
                "\n" +
                "</head>\n" +
                "<body class=\"animationFade\">\n" +
                "<div class=\"allContent\">\n" +
                "    <ul class=\"forumTypeList\">\n" +
                "        <li class=\"active\">推荐</li>\n" +
                "        <li>关注</li>\n" +
                "        <li>版块</li>\n" +
                "        <li>攻略</li>\n" +
                "        <li>热帖</li>\n" +
                "    </ul>\n" +
                "\n" +
                "    <div class=\"hotForum\">\n" +
                "        <h3>\n" +
                "            <a href=\"#\" class=\"more\">更多</a>\n" +
                "            热门论坛\n" +
                "        </h3>\n" +
                "        <div class=\"rightItem\">\n" +
                "            <img src=\"img/1_icon.png\" alt=\"\">\n" +
                "            <h4>战双帕弥什</h4>\n" +
                "            <p>160.2万 关注</p>\n" +
                "            <a href=\"#\">关注</a>\n" +
                "        </div>\n" +
                "        <div class=\"rightItem\">\n" +
                "            <img src=\"img/1_icon.png\" alt=\"\">\n" +
                "            <h4>战双帕弥什</h4>\n" +
                "            <p>160.2万 关注</p>\n" +
                "            <a href=\"#\">关注</a>\n" +
                "        </div>\n" +
                "        <div class=\"rightItem\">\n" +
                "            <img src=\"img/1_icon.png\" alt=\"\">\n" +
                "            <h4>战双帕弥什</h4>\n" +
                "            <p>160.2万 关注</p>\n" +
                "            <a href=\"#\">关注</a>\n" +
                "        </div>\n" +
                "        <div class=\"rightItem\">\n" +
                "            <img src=\"img/1_icon.png\" alt=\"\">\n" +
                "            <h4>战双帕弥什</h4>\n" +
                "            <p>160.2万 关注</p>\n" +
                "            <a href=\"#\">关注</a>\n" +
                "        </div>\n" +
                "        <div class=\"rightItem\">\n" +
                "            <img src=\"img/1_icon.png\" alt=\"\">\n" +
                "            <h4>战双帕弥什</h4>\n" +
                "            <p>160.2万 关注</p>\n" +
                "            <a href=\"#\">关注</a>\n" +
                "        </div>\n" +
                "        <div class=\"rightItem\">\n" +
                "            <img src=\"img/1_icon.png\" alt=\"\">\n" +
                "            <h4>战双帕弥什</h4>\n" +
                "            <p>160.2万 关注</p>\n" +
                "            <a href=\"#\">关注</a>\n" +
                "        </div>\n" +
                "        <div class=\"rightItem\">\n" +
                "            <img src=\"img/1_icon.png\" alt=\"\">\n" +
                "            <h4>战双帕弥什</h4>\n" +
                "            <p>160.2万 关注</p>\n" +
                "            <a href=\"#\">关注</a>\n" +
                "        </div>\n" +
                "        <div class=\"rightItem\">\n" +
                "            <img src=\"img/1_icon.png\" alt=\"\">\n" +
                "            <h4>战双帕弥什</h4>\n" +
                "            <p>160.2万 关注</p>\n" +
                "            <a href=\"#\">关注</a>\n" +
                "        </div>\n" +
                "        <div class=\"rightItem\">\n" +
                "            <img src=\"img/1_icon.png\" alt=\"\">\n" +
                "            <h4>战双帕弥什</h4>\n" +
                "            <p>160.2万 关注</p>\n" +
                "            <a href=\"#\">关注</a>\n" +
                "        </div>\n" +
                "        <div class=\"rightItem\">\n" +
                "            <img src=\"img/1_icon.png\" alt=\"\">\n" +
                "            <h4>战双帕弥什</h4>\n" +
                "            <p>160.2万 关注</p>\n" +
                "            <a href=\"#\">关注</a>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "\n" +
                "    <div class=\"mainContent\">\n" +
                "        <div class=\"item\">\n" +
                "            <div class=\"author\">\n" +
                "                <img src=\"img/bugDuoDuo.jpg\" alt=\"\">\n" +
                "                <a href=\"#\">白锟龙</a>\n" +
                "                <br>\n" +
                "                <span title=\"2019-12-08 09:51:09\">12-08</span>\n" +
                "            </div>\n" +
                "            <div class=\"itemContent\">\n" +
                "                <h3>《王者荣耀》2019年11月 社区月报</h3>\n" +
                "                <p>\n" +
                "                    又是一个月过去了，社区里和游戏内都发生了什么？ 来看看《王者荣耀》社区月报；\n" +
                "                    如何成为老船长﻿﻿﻿ 孙策，因为标志性技能大招是开船所以\n" +
                "                    被玩家们常叫做船长。孙策定位是主坦克副战士，但船长上线都一年多了，大家都知道\n" +
                "                    就算是半肉孙策也能一套带走脆皮。不过各...\n" +
                "                </p>\n" +
                "                <img src=\"img/forum1.jpeg\" alt=\"\">\n" +
                "            </div>\n" +
                "            <div class=\"itemTag\">\n" +
                "                <a href=\"#\">王者荣耀</a>\n" +
                "                <a href=\"#\">交流讨论</a>\n" +
                "            </div>\n" +
                "            <ul class=\"itemFooter\">\n" +
                "                <li>99赞</li>\n" +
                "                <li>99踩</li>\n" +
                "                <li>99回复</li>\n" +
                "                <li>分享</li>\n" +
                "            </ul>\n" +
                "        </div>\n" +
                "        <div class=\"item\">\n" +
                "            <div class=\"author\">\n" +
                "                <img src=\"img/bugDuoDuo.jpg\" alt=\"\">\n" +
                "                <a href=\"#\">白锟龙</a>\n" +
                "                <br>\n" +
                "                <span title=\"2019-12-08 09:51:09\">12-08</span>\n" +
                "            </div>\n" +
                "            <div class=\"itemContent\">\n" +
                "                <h3>《王者荣耀》2019年11月 社区月报</h3>\n" +
                "                <p>\n" +
                "                    又是一个月过去了，社区里和游戏内都发生了什么？ 来看看《王者荣耀》社区月报；\n" +
                "                    如何成为老船长﻿﻿﻿ 孙策，因为标志性技能大招是开船所以\n" +
                "                    被玩家们常叫做船长。孙策定位是主坦克副战士，但船长上线都一年多了，大家都知道\n" +
                "                    就算是半肉孙策也能一套带走脆皮。不过各...\n" +
                "                </p>\n" +
                "                <img src=\"img/forum1.jpeg\" alt=\"\">\n" +
                "            </div>\n" +
                "            <div class=\"itemTag\">\n" +
                "                <a href=\"#\">王者荣耀</a>\n" +
                "                <a href=\"#\">交流讨论</a>\n" +
                "            </div>\n" +
                "            <ul class=\"itemFooter\">\n" +
                "                <li>99赞</li>\n" +
                "                <li>99踩</li>\n" +
                "                <li>99回复</li>\n" +
                "                <li>分享</li>\n" +
                "            </ul>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "\n" +
                "</div>\n" +
                "</body>\n" +
                "</html>";
            cPage = 3;
            break;
        case "视频":
            mainPage.innerHTML = "<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <title>Title</title>\n" +
                "    <link rel=\"stylesheet\" href=\"css/common.css\">\n" +
                "    <link rel=\"stylesheet\" href=\"css/video.css\">\n" +
                "</head>\n" +
                "\n" +
                "<body class=\"animationFade\">\n" +
                "<div class=\"allContent\">\n" +
                "    <ul class=\"forumTypeList\">\n" +
                "        <li>\n" +
                "            <img src=\"img/video_icon1.png\" alt=\"\">\n" +
                "            <p>英雄联盟</p>\n" +
                "        </li>\n" +
                "        <li>\n" +
                "            <img src=\"img/video_icon2.png\" alt=\"\">\n" +
                "            <p>战双帕弥什</p>\n" +
                "        </li>\n" +
                "        <li>\n" +
                "            <img src=\"img/video_icon3.png\" alt=\"\">\n" +
                "            <p>#COMPASS 战斗天赋解析系统</p>\n" +
                "        </li>\n" +
                "        <li>\n" +
                "            <img src=\"img/video_icon4.png\" alt=\"\">\n" +
                "            <p>失落城堡</p>\n" +
                "        </li>\n" +
                "        <li>\n" +
                "            <img src=\"img/video_icon5.png\" alt=\"\">\n" +
                "            <p>云顶之弈</p>\n" +
                "        </li>\n" +
                "        <li>\n" +
                "            <img src=\"img/video_icon6.png\" alt=\"\">\n" +
                "            <p>双生视界</p>\n" +
                "        </li>\n" +
                "        <li>\n" +
                "            <img src=\"img/video_icon7.png\" alt=\"\">\n" +
                "            <p>明日方舟</p>\n" +
                "        </li>\n" +
                "        <li>\n" +
                "            <img src=\"img/video_icon8.png\" alt=\"\">\n" +
                "            <p>炉石传说</p>\n" +
                "        </li>\n" +
                "    </ul>\n" +
                "\n" +
                "    <div class=\"upload\">\n" +
                "        <div>点击上传视频</div>\n" +
                "    </div>\n" +
                "\n" +
                "    <div class=\"hotForum\">\n" +
                "        <h3>\n" +
                "            <a href=\"#\" class=\"more\">更多</a>\n" +
                "            最新回复\n" +
                "        </h3>\n" +
                "        <div class=\"rightItem\">\n" +
                "            <img src=\"img/1.jpg\" alt=\"\">\n" +
                "            <span>笑死我了...</span>\n" +
                "            <p>秃驴敢跟老衲抢方丈</p>\n" +
                "            <p>999 播放</p>\n" +
                "            <div class=\"time\">01:27</div>\n" +
                "        </div>\n" +
                "        <div class=\"rightItem\">\n" +
                "            <img src=\"img/1.jpg\" alt=\"\">\n" +
                "            <span>笑死我了...</span>\n" +
                "            <p>秃驴敢跟老衲抢方丈</p>\n" +
                "            <p>999 播放</p>\n" +
                "            <div class=\"time\">01:27</div>\n" +
                "        </div>\n" +
                "        <div class=\"rightItem\">\n" +
                "            <img src=\"img/1.jpg\" alt=\"\">\n" +
                "            <span>笑死我了...</span>\n" +
                "            <p>秃驴敢跟老衲抢方丈</p>\n" +
                "            <p>999 播放</p>\n" +
                "            <div class=\"time\">01:27</div>\n" +
                "        </div>\n" +
                "        <div class=\"rightItem\">\n" +
                "            <img src=\"img/1.jpg\" alt=\"\">\n" +
                "            <span>笑死我了...</span>\n" +
                "            <p>秃驴敢跟老衲抢方丈</p>\n" +
                "            <p>999 播放</p>\n" +
                "            <div class=\"time\">01:27</div>\n" +
                "        </div>\n" +
                "        <div class=\"rightItem\">\n" +
                "            <img src=\"img/1.jpg\" alt=\"\">\n" +
                "            <span>笑死我了...</span>\n" +
                "            <p>秃驴敢跟老衲抢方丈</p>\n" +
                "            <p>999 播放</p>\n" +
                "            <div class=\"time\">01:27</div>\n" +
                "        </div>\n" +
                "        <div class=\"rightItem\">\n" +
                "            <img src=\"img/1.jpg\" alt=\"\">\n" +
                "            <span>笑死我了...</span>\n" +
                "            <p>秃驴敢跟老衲抢方丈</p>\n" +
                "            <p>999 播放</p>\n" +
                "            <div class=\"time\">01:27</div>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "\n" +
                "\n" +
                "\n" +
                "    <div class=\"mainContent\">\n" +
                "        <div class=\"item\">\n" +
                "            <div class=\"author\">\n" +
                "                <img src=\"img/bugDuoDuo.jpg\" alt=\"\">\n" +
                "                <a href=\"#\">白锟龙</a>\n" +
                "                <br>\n" +
                "                <span title=\"2019-12-08 09:51:09\">12-08</span>\n" +
                "            </div>\n" +
                "            <div class=\"itemContent\">\n" +
                "                <p>\n" +
                "                    攻略：王者荣耀冰封战神关羽连招，无限大招杀遍天下夏侯惇\n" +
                "                </p>\n" +
                "                <!--loop=\"loop\"-->\n" +
                "                <video src=\"video/game.mp4\" controls=\"controls\" autoplay=\"autoplay\"></video>\n" +
                "            </div>\n" +
                "            <div class=\"itemTag\">\n" +
                "                <a href=\"#\">王者荣耀</a>\n" +
                "                <a href=\"#\">交流讨论</a>\n" +
                "            </div>\n" +
                "            <ul class=\"itemFooter\">\n" +
                "                <li>99赞</li>\n" +
                "                <li>99踩</li>\n" +
                "                <li>99回复</li>\n" +
                "                <li>分享</li>\n" +
                "            </ul>\n" +
                "        </div>\n" +
                "        <div class=\"item\">\n" +
                "            <div class=\"author\">\n" +
                "                <img src=\"img/bugDuoDuo.jpg\" alt=\"\">\n" +
                "                <a href=\"#\">白锟龙</a>\n" +
                "                <br>\n" +
                "                <span title=\"2019-12-08 09:51:09\">12-08</span>\n" +
                "            </div>\n" +
                "            <div class=\"itemContent\">\n" +
                "                <p>\n" +
                "                    攻略：王者荣耀冰封战神关羽连招，无限大招杀遍天下夏侯惇\n" +
                "                </p>\n" +
                "                <!--loop=\"loop\"-->\n" +
                "                <video src=\"video/game.mp4\" controls=\"controls\"></video>\n" +
                "            </div>\n" +
                "            <div class=\"itemTag\">\n" +
                "                <a href=\"#\">王者荣耀</a>\n" +
                "                <a href=\"#\">交流讨论</a>\n" +
                "            </div>\n" +
                "            <ul class=\"itemFooter\">\n" +
                "                <li>99赞</li>\n" +
                "                <li>99踩</li>\n" +
                "                <li>99回复</li>\n" +
                "                <li>分享</li>\n" +
                "            </ul>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "\n" +
                "</div>\n" +
                "</body>\n" +
                "</html>";
            cPage = 4;
            break;
    }
}

var cPage = 0;//默认首页
var mainIframe;//iframe
var noNum = 4;//排行榜默认有4个
//类别的标题些
var cateIndex = 0;
var categories = ["新游预约", "往期专题", "近期最热", "最近更新", "单机", "模拟", "卡牌", "动作", "放置", "角色扮演"];

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
        // mainIframe = mainPage.contentWindow.document;
        switch (cPage) {
            case 0:
                moreMain();
                // mainPage.height = mainIframe.body.scrollHeight;
                break;
            case 1:
                moreTop();
                //都有动画，但是不知道这里为啥多出了动画那一百px
                // mainPage.height = mainIframe.body.scrollHeight - 100;
                break;
            case 2:
                moreCategories();
                //都有动画，但是不知道这里为啥多出了动画那一百px
                // mainPage.height = mainIframe.body.scrollHeight - 100;
                break;
            case 3:
                moreForum();
                //都有动画，但是不知道这里为啥多出了动画那一百px
                // mainPage.height = mainIframe.body.scrollHeight - 100;
                break;
            case 4:
                moreVideo();
                //都有动画，但是不知道这里为啥多出了动画那一百px
                // mainPage.height = mainIframe.body.scrollHeight - 100;
                break;
        }
        loadImg.style.display = "none";
        loadBtn.style.display = "block";
    }, 1000);
}

/**
 * 主页加载更多数据
 */
function moreMain() {
    // var left = mainIframe.getElementsByClassName("leftContent")[0];
    var left = mainPage.getElementsByClassName("leftContent")[0];
    var div = document.createElement("div");
    div.classList.add("item");
    div.classList.add("animationFade");
    div.innerHTML = "<p>强烈推荐</p>\n" +
        "            <div class=\"itemImg\">\n" +
        "                <img src=\"img/" + randomNum(1, 6) + ".jpg\" alt=\"\">\n" +
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
        "                <img src=\"img/" + randomNum(1, 10) + "_icon.png\" alt=\"\">\n" +
        "                <div>\n" +
        "                    <p class=\"game-title\">\n" +
        "                        <span>明日方舟</span>\n" +
        "                    </p>\n" +
        "                    <p class=\"game-description\">「喧闹法则」现已开启，堕天使“莫斯提马”登场「喧闹法则」现已开启，堕天使“莫斯提马”登场「喧闹法则」现已开启，堕天使“莫斯提马”登场</p>\n" +
        "                </div>\n" +
        "            </div>"
    left.appendChild(div);
}

/**
 * 排行榜加载更多
 */
function moreTop() {
    var mainContent = mainPage.getElementsByClassName("mainContent")[0];
    // var mainContent = mainIframe.getElementsByClassName("mainContent")[0];
    var div = document.createElement("div");
    div.classList.add("item");
    div.classList.add("animationFade");
    div.innerHTML = "<div>\n" +
        "            <img src=\"img/" + randomNum(1, 10) + "_icon.png\" alt=\"\" class=\"imgIcon\">\n" +
        "        </div>\n" +
        "        <div class=\"description\">\n" +
        "            <h1>战双帕弥什</h1>\n" +
        "            <p>厂商: 库洛游戏</p>\n" +
        "            <p>评分: 9.8</p>\n" +
        "            <p>《战双帕弥什》是一款末世科幻题材的3D动作手游。你将化身指挥官，带领人类最后的希望——仿生人形「构造体」，共同对抗被「帕弥什」病毒感染的机械...</p>\n" +
        "        </div>\n" +
        "        <div>\n" +
        "            <img src=\"img/" + randomNum(1, 6) + ".jpg\" alt=\"\" class=\"imgBig\">\n" +
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
        "            " + (++noNum) + "\n" +
        "        </div>"
    mainContent.appendChild(div);
}

/**
 * 发现模块加载更多
 */
function moreCategories() {
    var mainContent = mainPage.getElementsByClassName("mainContent")[0];
    // var mainContent = mainIframe.getElementsByClassName("mainContent")[0];
    var div = document.createElement("div");
    div.classList.add("item");
    div.classList.add("animationFade");
    div.innerHTML = "<div class=\"titleSection\">\n" +
        "            <h3>" + categories[++cateIndex] + "</h3>\n" +
        "            <a href=\"#\">更多</a>\n" +
        "        </div>\n" +
        "        <div class=\"subList\">\n" +
        "            <div class=\"subItem\">\n" +
        "                <a href=\"#\">\n" +
        "                    <img src=\"img/categories" + randomNum(1, 12) + ".png\" alt=\"\">\n" +
        "                </a>\n" +
        "                <div class=\"subItemInfo\">\n" +
        "                    <a href=\"#\" class=\"subItemName\">电竞传奇</a>\n" +
        "                    <a href=\"#\" class=\"subItemType\">模拟</a>\n" +
        "                    <span class=\"subItemScore\">9.9</span>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div class=\"subItem\">\n" +
        "                <a href=\"#\">\n" +
        "                    <img src=\"img/categories" + randomNum(1, 12) + ".png\" alt=\"\">\n" +
        "                </a>\n" +
        "                <div class=\"subItemInfo\">\n" +
        "                    <a href=\"#\" class=\"subItemName\">樱桃湾之夏</a>\n" +
        "                    <a href=\"#\" class=\"subItemType\">模拟</a>\n" +
        "                    <span class=\"subItemScore\">9.9</span>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div class=\"subItem\">\n" +
        "                <a href=\"#\">\n" +
        "                    <img src=\"img/categories" + randomNum(1, 12) + ".png\" alt=\"\">\n" +
        "                </a>\n" +
        "                <div class=\"subItemInfo\">\n" +
        "                    <a href=\"#\" class=\"subItemName\">阿卡迪亚</a>\n" +
        "                    <a href=\"#\" class=\"subItemType\">卡牌</a>\n" +
        "                    <span class=\"subItemScore\">9.9</span>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div class=\"subItem\">\n" +
        "                <a href=\"#\">\n" +
        "                    <img src=\"img/categories" + randomNum(1, 12) + ".png\" alt=\"\">\n" +
        "                </a>\n" +
        "                <div class=\"subItemInfo\">\n" +
        "                    <a href=\"#\" class=\"subItemName\">无尽银河</a>\n" +
        "                    <a href=\"#\" class=\"subItemType\">策略</a>\n" +
        "                    <span class=\"subItemScore\">9.9</span>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div class=\"subItem\">\n" +
        "                <a href=\"#\">\n" +
        "                    <img src=\"img/categories" + randomNum(1, 12) + ".png\" alt=\"\">\n" +
        "                </a>\n" +
        "                <div class=\"subItemInfo\">\n" +
        "                    <a href=\"#\" class=\"subItemName\">幽行玄城</a>\n" +
        "                    <a href=\"#\" class=\"subItemType\">角色扮演</a>\n" +
        "                    <span class=\"subItemScore\">9.9</span>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div class=\"subItem\">\n" +
        "                <a href=\"#\">\n" +
        "                    <img src=\"img/categories" + randomNum(1, 12) + ".png\" alt=\"\">\n" +
        "                </a>\n" +
        "                <div class=\"subItemInfo\">\n" +
        "                    <a href=\"#\" class=\"subItemName\">猎人</a>\n" +
        "                    <a href=\"#\" class=\"subItemType\">角色扮演</a>\n" +
        "                    <span class=\"subItemScore\">9.9</span>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>";
    mainContent.appendChild(div);
}

/**
 * 论坛加载更多
 */
function moreForum() {
    var mainContent = mainPage.getElementsByClassName("mainContent")[0];
    var div = document.createElement("div");
    div.classList.add("item");
    div.classList.add("animationFade");
    div.innerHTML = "<div class=\"author\">\n" +
        "                <img src=\"img/bugDuoDuo.jpg\" alt=\"\">\n" +
        "                <a href=\"#\">白锟龙</a>\n" +
        "                <br>\n" +
        "                <span title=\"2019-12-08 09:51:09\">12-08</span>\n" +
        "            </div>\n" +
        "            <div class=\"itemContent\">\n" +
        "                <h3>《王者荣耀》2019年11月 社区月报</h3>\n" +
        "                <p>\n" +
        "                    又是一个月过去了，社区里和游戏内都发生了什么？ 来看看《王者荣耀》社区月报；\n" +
        "                    如何成为老船长﻿﻿﻿ 孙策，因为标志性技能大招是开船所以\n" +
        "                    被玩家们常叫做船长。孙策定位是主坦克副战士，但船长上线都一年多了，大家都知道\n" +
        "                    就算是半肉孙策也能一套带走脆皮。不过各...\n" +
        "                </p>\n" +
        "                <img src=\"img/forum1.jpeg\" alt=\"\">\n" +
        "            </div>\n" +
        "            <div class=\"itemTag\">\n" +
        "                <a href=\"#\">王者荣耀</a>\n" +
        "                <a href=\"#\">交流讨论</a>\n" +
        "            </div>\n" +
        "            <ul class=\"itemFooter\">\n" +
        "                <li>99赞</li>\n" +
        "                <li>99踩</li>\n" +
        "                <li>99回复</li>\n" +
        "                <li>分享</li>\n" +
        "            </ul>";
    mainContent.appendChild(div);

}
/**
 * 视频加载更多
 */
function moreVideo() {
    var mainContent = mainPage.getElementsByClassName("mainContent")[0];
    var div = document.createElement("div");
    div.classList.add("item");
    div.classList.add("animationFade");
    div.innerHTML ='<div class="author">\n' +
        '                <img src="img/bugDuoDuo.jpg" alt="">\n' +
        '                <a href="#">白锟龙</a>\n' +
        '                <br>\n' +
        '                <span title="2019-12-08 09:51:09">12-08</span>\n' +
        '            </div>\n' +
        '            <div class="itemContent">\n' +
        '                <p>\n' +
        '                    攻略：王者荣耀冰封战神关羽连招，无限大招杀遍天下夏侯惇\n' +
        '                </p>\n' +
        '                <!--loop="loop" autoplay="autoplay"-->\n' +
        '                <video src="video/game.mp4" controls="controls"></video>\n' +
        '            </div>\n' +
        '            <div class="itemTag">\n' +
        '                <a href="#">王者荣耀</a>\n' +
        '                <a href="#">交流讨论</a>\n' +
        '            </div>\n' +
        '            <ul class="itemFooter">\n' +
        '                <li>99赞</li>\n' +
        '                <li>99踩</li>\n' +
        '                <li>99回复</li>\n' +
        '                <li>分享</li>\n' +
        '            </ul>';
    mainContent.appendChild(div);

}

/**
 * 生成从minNum到maxNum的随机数
 * @param minNum
 * @param maxNum
 * @returns {number}
 */
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
            return 0;
    }
}

/**
 * 根据id参数，访问并记录当前页面
 * @param variable
 * @returns {*}
 */
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] === variable) {
            return pair[1];
        }
    }
    return (false);
}

var queryVariable = getQueryVariable("id");
var navLis = document.getElementById("nav").getElementsByTagName("li");
//无参则为false，则打开首页
if(!queryVariable)queryVariable=0;
addActive(navLis[parseInt(queryVariable)]);


/**
 * 监听每个页面的每个item是否出现，出现则添加动画
 * @deprecated 因为Iframe为动态高，外部滚动事件在这没用，就算写一套也不能全部页面使用
 * @type {Array}
 */
var elements = [];
var windowHeight = window.screen.availHeight;
function getTop(clsName) {
    //用了iframe前
    // var obj = document.getElementsByClassName(clsName);
    //用了iframe后
    //刷新mainIframe的值
    // mainIframe = mainPage.contentWindow.document;
    var obj = mainPage.getElementsByClassName(clsName);
    //之前
    // console.log(obj[5].getBoundingClientRect().top);
    //之后
    // console.log(obj[5].getBoundingClientRect().bottom);
    // console.log(windowHeight);
    for (var i = 0; i < obj.length; i++) {
        if ((windowHeight - obj[i].getBoundingClientRect().top) > 100 && !obj[i].classList.contains("animationFade")) {
            elements.push(obj[i]);
        }
    }
}

window.addEventListener("scroll", function (evt) {
    getTop("item");
    // console.log(elements.length);
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add("animationFade");
    }
});


//*************************************main.js不用iframe只能这样引进来**************************************************
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
