<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="username"
          placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{usererror.errortext}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" v-model="password"
           placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{passerror.errortext}}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onload">登录</a>
        </div>
        <span class="g-form-error">{{allerror}}</span>
      </div>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username:'',
      password:'',
      allerror:''
    }
  },
  computed:{
    usererror(){
          var ratus,errortext
          if(!/@/g.test(this.username)){
              ratus=false
              errortext='不包含@'
          }else{
              ratus=true
              errortext=''
          }
          if(!this.userflag){
            errortext='';
            this.userflag=true
          }
        return {
          ratus,
          errortext
        }
      },
    passerror(){
      var ratus,errortext
      if(!/^\w{1,6}$/g.test(this.password)){
        ratus=false
        errortext='请输入1-6位密码'
      }else{
        ratus=true
        errortext=''
      }
      if(!this.pasflag){
        errortext='';
        this.pasflag=true
      }
      return {
        ratus,
        errortext
      }
    }
  },
  methods:{
    onload(){
       if(!this.usererror.ratus||!this.passerror.ratus){
           this.allerror='部分填写有错误'
       }else{
           this.allerror='';
           this.$http.get('./api/login').then(
               function(res){
                   this.$emit('ondata',res.data)
               },function(error){
                   console.log(error)
             }
           )
       }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
