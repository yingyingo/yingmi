//头部
// 更多精彩
var kefu = document.getElementsByClassName("kefu")[0];
var j_tan = document.getElementById("j_tan");
kefu.onmousemove = function(){
	kefu.style.backgroundColor = "#FFFFFF";
	j_tan.style.display = "block";
}
kefu.onmouseout = function(){
	kefu.style.backgroundColor = "#F9F9F9";
	j_tan.style.display = "none";
}

//客服
var kf1 = document.getElementById("kf1");
var k_tan = document.getElementById("k_tan");
kf1.onmouseover = function(){
	kf1.style.backgroundColor = "#FFFFFF";
	k_tan.style.display = "block";
}
kf1.onmouseout = function(){
	kf1.style.backgroundColor ="#F9F9F9";
	k_tan.style.display = "none";
}

// 网站导航弹窗
var w_dao = document.getElementById("w_dao");
var w_tan = document.getElementById("w_tan");
w_dao.onmouseover = function(){
	w_dao.style.backgroundColor = "#FFFFFF";
	w_tan.style.display = "block";
}
w_dao.onmouseout = function(){
	w_dao.style.backgroundColor ="#F9F9F9";
	w_tan.style.display = "none";
}

//手机弹窗
var phone = document.getElementsByClassName("phone")[0];
var p_tan = document.getElementById("p_tan");
phone.onmouseover = function(){
	phone.style.backgroundColor = "#FFFFFF";
	p_tan.style.display = "block";
}
phone.onmouseout = function(){
	phone.style.backgroundColor ="#F9F9F9";
	p_tan.style.display = "none";
}

//购物车弹窗
var top_shop = document.getElementsByClassName("top-shop")[0];
var car_tan = document.getElementById("car_tan");
top_shop.onmouseover = function(){
	top_shop.style.backgroundColor = "#FFFFFF";
	car_tan.style.display = "block";
}
top_shop.onmouseout = function(){
	top_shop.style.backgroundColor ="#F9F9F9";
	car_tan.style.display = "none";
}

// 搜索框弹窗
// var texterea = $(".texterea");
var sea_text = document.getElementsByClassName("text")[0];
var lian = document.getElementsByClassName("lian")[0];
// console.log(lian);
var sea_tan = $("#sea_tan");
sea_text.onclick = function(){
	lian.style.display = "none";
	sea_tan.style.display = "block";
}
document.onmousedown = function(event){
	var event = event || window.event;
	var targetId = event.target? event.target.id : event.srcElement.id;
	if(targetId != "sea_text"){
		lian.style.display = "block";
		sea_tan.style.display = "none";
	}
}


//导航列表弹窗
var uls = $("#uls");
var li_dao = uls.children;
var lun_tan = document.getElementsByClassName("tan");
var lun_ul = $(".tan_sun");
// console.log(lun_ul);
for(var i =0;i<li_dao.length;i++){
	li_dao[i].index = i
	li_dao[i].onmouseover = function(){
		for(var j =0;j<li_dao.length;j++){
			li_dao[j].className = "";
			lun_ul[j].style.display = "none";
		}
		this.className = "onmoues";
		lun_ul[this.index].style.display = "block";
	}
	li_dao[i].onmouseout = function(event){
		var event = event || window.event;
		var targetId = event.target? event.target.id : event.srcElement.id;
		if(targetId != "uls"){
			lun_ul[this.index].style.display = "none";
		}
		
	}
}

