(function(){
  
   var num = 0;
   timer=setInterval(function(){
	   num++;

	if(num>$('#index_d1>div:first-child>a>img').length-1){
		    num=0;
		$('#index_d1>div:first-child').animate({marginLeft:-1430*num})
   }else{
		$('#index_d1>div:first-child').animate({marginLeft:-1430*num})
	}
	},3000)


})()