//根据id获取页面元素
function $id(id) {
	return document.getElementById(id);
}
//获取任意区间的整数值
function rand(min, max) { //[min,max]
	return Math.round(Math.random() * (max - min) + min);
}

function rand2(min, max) { //[min,max]
	return Math.floor(Math.random() * (max - min + 1) + min);
}

//获取随机的颜色值
function getColor2() {
	var color = "#";
	for (var i = 1; i <= 6; i++) {
		color += rand(0, 15).toString(16);
	}
	return color;
}
function getColor() {
	return "rgb(" + rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) + ")";
}

//获取时间格式 年月日 时分秒
function dateToString(now) {
	//定义一个时间对象 
	var now = new Date();
	//获取年月日
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	var d = now.getDate();
	//获取时分秒
	var h = now.getHours();
	var m = toTwo(now.getMinutes());
	var s = toTwo(now.getSeconds());

	return year + "-" + month + "-" + d + " " + h + ":" + m + ":" + s;
}
//判断参数是否小于10  小于10 前面拼接0
function toTwo(val) {
	return val < 10 ? "0" + val : val;
}
//判断数组中是否有某元素
function has(arr, num) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == num) {
			return true;
		}
	}
	return false;
}

// 生成验证码 m为位数
function yzm(m) {
	var str = "";
	for (var i = 1; i <= m; i++) {
		var code = rand(48, 122);
		if (code >= 58 && code <= 64 || code >= 91 && code <= 96) {
			i--;
		} else {
			//转成对应的字符
			str += String.fromCharCode(code);
		}
	}
	return str;
}


// CheckBox全选全不选
function allClick(arr) {
	for (var i = 0; i < inputs.length; i++) {
		arr[i].checked = 1;
	}
}
function allNotClick(arr) {
	for (var i = 0; i < inputs.length; i++) {
		arr[i].checked = 0;
	}
}


// 创建一个元素
function createEle(ele) {
	return document.createElement(ele);
}

// 添加一个元素到另一个元素中
function append(parent, child) {
	return parent.appendChild(child);
}

//检验两元素碰撞
function pz(d1, d2) {
	var T1 = d1.offsetTop;
	var B1 = d1.offsetHeight + d1.offsetTop;
	var L1 = d1.offsetLeft;
	var R1 = d1.offsetWidth + d1.offsetLeft;
	var T2 = d2.offsetTop;
	var B2 = d2.offsetHeight + d2.offsetTop;
	var L2 = d2.offsetLeft;
	var R2 = d2.offsetWidth + d2.offsetLeft;
	//碰不上返回false
	if (R2 < L1 || R1 < L2 || B2 < T1 || B1 < T2) {
		return false;
	} else {
		return true;//碰上了 返回true
	}
}