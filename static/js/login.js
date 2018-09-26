(function(){
    new Vue({
  el:"#form",
data:{
   uname:"",
   upwd:"",
   res:""
},
methods:{
  submit(){
       this.res=axios.post(
          "http://localhost:4000/user/login",
          Qs.stringify({
              uname:this.uname,
              upwd:this.upwd
           })
        
      )
      console.log( this.res);
  }},
  mounted(){
          
}
})

})()