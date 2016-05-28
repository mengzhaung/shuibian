(function(global){
	function remChange(){
		document.documentElement.style.fontSize=20*document.documentElement.clientWidth/320+'px';
	}
	remChange();
	global.addEventListener('resize',remChange,false);
})(window);
//命名空间
var index={};

//轮播图
index.pic={};
index.pic.show=function(){
	(function(){
	var swiper = new Swiper('.swiper-container',{
		autoplay:2000,
	   loop:true,
	   mousewheelControl:true 
	});
		
})();	
};
index.pic.show();
//轮播图end

//选项卡
index.tab={};
index.tab.active=function(){
	function tab(id){
		$( id+' .nav li').tap(function(){
			$(id+' .nav li').removeClass('active');
			$(this).addClass('active');
			$(id+' .news>li').removeClass('active');
			$(id+' .news>li').eq($(this).index()).addClass('active');
		});	
	}
	tab('#tab1');
	tab('#tab2');
};
index.tab.active();


//回顶！
index.back={};
index.back.carry=function(){
	function move(duration)
	{
		var start=document.documentElement.scrollTop || document.body.scrollTop;
		var dis=0-start;
		var n=0;
		var count=Math.floor(duration/30);
		
		clearInterval(document.timer);
		document.timer=setInterval(function (){
			n++;
			
			var cur=start+dis*n/count;
			document.body.scrollTop=cur;
			document.documentElement.scrollTop=cur;
			
			if (n == count)
			{
				clearInterval(document.timer);
			}
		}, 30);
	}
	$('#goTop').click(function(){
		move(2000)	
	})
};
index.back.carry();
//回顶end