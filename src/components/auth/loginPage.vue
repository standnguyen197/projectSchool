<template>
<div>
  <fb-signin-button style="cursor:pointer"
    :params="fbSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Facebook
  </fb-signin-button>
  
  <p>
    {{ infoLogin }}
  </p>
  <b-btn @click="logOut"> Đăng xuất </b-btn>
  </div>
</template>

<script>
import axios from 'axios'
export default {
 name: 'loginFacebook',
  data () {
    return {
      fbSignInParams: {
        scope: 'email,user_friends,user_videos',
        return_scopes: true
      },
      infoLogin: ''
    }
  },
  methods: {
    onSignInSuccess (response) {
        var _this = this
        let accessToken = response.authResponse.accessToken;
        this.$session.start()
        this.$session.set('access_token', accessToken)
      FB.api('me?fields=id,name,email', dude => {
        let _id = dude.id
        let name = dude.name
        let email = dude.email
        var role_id = ''
        let cover = `https://graph.facebook.com/${_id}/picture?type=large`
        if(_id == '374440739664862'){
          role_id += 1;
        }else{
          role_id += 0;
        }
        axios.post('/api/AuthFacebook', {_id, name, email,cover,role_id})
        .then(function (response) {
          let authUser = response.data.userData;
          let messageStatus = response.data.message;
          if(!messageStatus){
            _this.$session.set('authUser', authUser)
          }else{
            _this.infoLogin = 'Đăng nhập thất bại'
          }
          _this.$session.set('jwt', response.data.token);
          let roleUser = _this.$session.get('authUser').role_id;
          if(roleUser == 0){
            _this.$router.push('/app');
          }else{
            _this.$router.push('/admin');
          }
          
        })
        .catch(function (error) {
          console.log(error);
        });

      })
    },
    onSignInError (error) {
      console.log('OH NOES')
       this.infoLogin = 'Đăng nhập thất bại'
    },
    logOut(){
      this.$session.destroy()
      this.$router.push('/')
    }
  }
}
</script>

<style>
.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
}
</style>