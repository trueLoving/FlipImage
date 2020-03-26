// 获取图片对象
var imgObj = document.getElementById("img");

var imgContainer = document.getElementById("imgContainer")

var src;

var imgContainerImg = document.getElementById("imgContainerImg");

// 图片加载失败钩子函数
imgObj.onerror = function () {
    alert("加载失败");
    imgObj.src = src;
}

// /^(http|https)://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$/;
function inputURL() {
    // https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585113325327&di=c47ffc4048e026d267f9324b6471f191&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201404%2F15%2F20140415204444_kfcMj.jpeg
    var url = prompt("输入图片url");
    src = imgObj.src;
    imgObj.src = url;

}

function handleUploadPic(event) {

    let file = event.target.files[0];

    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (event) {
        imgObj.src = event.target.result;
    }

}

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


function imgRotate() {
    imgObj.animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(180deg)' },
        { transform: 'rotate(360deg)' }
    ], {
        duration: 2000,
        iterationCount: 1,
        fill: "forwards"
    })
}

function openImg() {
    imgContainerImg.src = imgObj.src;
    imgContainer.style.display = 'block';
}

function closeImg() {
    imgContainer.style.display = 'none';
}

function imgRotateUp() {
    imgObj.animate([
        { transform: 'rotateX(0deg)' },
        { transform: 'rotateX(180deg)' },
        { transform: 'rotateX(360deg)' }
    ], {
        duration: 1000,
        iterationCount: 1,
        fill: 'forwards'
    })
}

function imgRotateDown() {
    imgObj.animate([
        { transform: 'rotateX(0deg)' },
        { transform: 'rotateX(-180deg)' },
        { transform: 'rotateX(-360deg)' }
    ], {
        duration: 1000,
        iterationCount: 1,
        fill: 'forwards'
    })
}

function imgRotateLeft() {
    imgObj.animate([
        { transform: 'rotateY(0deg)' },
        { transform: 'rotateY(180deg)' },
        { transform: 'rotateY(360deg)' }
    ], {
        duration: 1000,
        iterationCount: 1,
        fill: 'forwards'
    })
}

function imgRotateRight() {
    imgObj.animate([
        { transform: 'rotateY(0deg)' },
        { transform: 'rotateY(-180deg)' },
        { transform: 'rotateY(-360deg)' }
    ], {
        duration: 1000,
        iterationCount: 1,
        fill: 'forwards'
    })
}