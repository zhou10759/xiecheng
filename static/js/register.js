(function(){
      new Vue({
    el:"#form",
 data:{
     uname:"",
     upwd:"",
     email:"",
     phone:""
 },
 methods:{
    submit(){
         axios.post(
            "http://localhost:4000/register/",
            Qs.stringify({
                uname:this.uname,
                upwd:this.upwd,
                email:this.email,
                phone:this.phone
             })
        )
    }},
    mounted(){
            
 }
})

})()