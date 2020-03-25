// 获取图片对象
var imgObj = document.getElementById("img");

function imgUp() {
    imgObj.style.top == '200px' || !imgObj.style.top ? imgObj.style.top = '0px' : alert("已到达边界");
}

function imgDown() {
    imgObj.style.top == '0px' || !imgObj.style.top ? imgObj.style.top = '200px' : alert("已到达边界");
}

function imgLeft() {
    imgObj.style.left == '300px' ? imgObj.style.left = '0px' : alert("已到达边界");
}

function imgRight() {
    imgObj.style.left == '0px' || !imgObj.style.left ? imgObj.style.left = '300px' : alert("已到达边界");
}

document.onkeydown = function (event) {

    let e = event || window.event || arguments.callee.caller.arguments[0];

    switch (e.keyCode) {
        case 38: imgUp(); break;
        case 37: imgLeft(); break;
        case 40: imgDown(); break;
        case 39: imgRight(); break;
    }

}