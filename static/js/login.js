(function(){
    new Vue({
  el:"#form",
data:{
   uname:"",
   upwd:"",
},
methods:{
  submit(){
       axios.post(
          "http://localhost:4000/user/login",
          Qs.stringify({
              uname:this.uname,
              upwd:this.upwd
           }).then
        
      )
     
  }},
  mounted(){
          
}
})

})()