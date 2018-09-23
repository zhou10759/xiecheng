(async function(){
  var res=await ajax({
    url:"http://localhost:4000/index/",
    type:"get",
    dataType:"json"
});
   var carousel= res.carousel;
     new Vue({
	el:"#index_d1>div:first-child",
	data:{
	 carousel
	}
  })
	var product = res.product;
	new Vue({
	el:"#tanx",
	data:{
	 product
	}
  })
	
  console.log(res);

})()