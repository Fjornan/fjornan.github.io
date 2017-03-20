//切换css
function cssTrainsition(index){
	if(index == 0){
		$('#home h1').css('bottom','25%');
      	$('#home h2').css('bottom','15%');
	}else{
		$('#home h1').css('bottom','100%');
      	$('#home h2').css('bottom','-100px');
	}

	if(index == 3){
		$('.contact-list li:nth-child(1)').css('top','0px');
		setTimeout(function(){
			$('.contact-list li:nth-child(2)').css('top','0px');
		},1000);
		setTimeout(function(){
			$('.contact-list li:nth-child(3)').css('top','0px');
		},2000);
		setTimeout(function(){
			$('.contact-list li:nth-child(4)').css('top','0px');
		},3000);
		$('.qrcode').css('opacity','1');
	}else{
		$('.contact-list li').css('top','500px');
		$('.qrcode').css('opacity','0');
	}
}

function toPage(index){
	swiper.slideTo(index);
}
