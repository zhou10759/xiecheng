(function(){
      new Vue({
    el:"#form",
 data:{
     uname:"",
     upwd:"",
     cpwd:"",
     email:"",
     phone:"",
     isuname:false,
     isupwd:false,
     iscpwd:false,
     ispwd:false,
     isemail:false,
     isphone:false

 },methods:{
    submit(){
         if(true) {
            if(this.uname===""){
                this.isuname=true;
                return;
            }else{
                this.isuname=false;
            }
            
            if(this.upwd===""){
                this.isupwd=true;
                return;
            }else{
                this.isupwd=false;
            } 
            if(this.cpwd===""){
                this.iscpwd=true;
                return;
            }else{
                this.iscpwd=false;
            }
            if(this.upwd!=this.cpwd){
                 this.ispwd = true;
                 return;
            }else{
                this.ispwd=false;
            }
            if(this.email===""){
                this.isemail=true;
                return;
            }else {
                this.isemail=false;
            }
            if(this.phone===""){
                this.isphone=true;
                return;
            } else{
                this.isphone=false;
            }
            
            axios.post(
                "http://localhost:4000/user/register/",
                Qs.stringify({
                    uname:this.uname,
                    upwd:this.upwd,
                    email:this.email,
                    phone:this.phone,
                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                
            )
           
        
    }
    }
},
    mounted(){
            
 }
})

})()