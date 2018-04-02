<template>
<div style="bg-admin">
<vue-headful
    title="QUẢN LÝ IBEE.VN"
/>
<b-container fluid>
<b-row>
<!-- Sidebar custom left -->
  <b-col cols="2" style="padding-right:0px;padding-left:0px" v-if="isActive">
      <sidebarDashboard/>
  </b-col>
<!-- Dashboard right -->
<b-col :cols="this.sidebarSize" style="padding-right:0px;padding-left:0px">
  <navbarDashboard @toggleSideBar="isActiveInfo"/>
  <b-col cols="12">
   <b-card 
    style="border-radius: 0px;
    border: none;
    border-top: 1px solid rgba(0,0,0,.125);
    border-bottom: 1px solid rgba(0,0,0,.125);" v-if="loadLive">
    <div class="scrollDiv">
  <div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
      </div>

    </div>
  </article>
</div>
  <div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
      </div>

    </div>
  </article>
</div>
  <div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
      </div>

    </div>
  </article>
</div>
  <div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
      </div>

    </div>
  </article>
</div>
  <div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
      </div>

    </div>
  </article>
</div>
  <div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
      </div>

    </div>
  </article>
</div>
  <div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
      </div>

    </div>
  </article>
</div>
  <div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
      </div>

    </div>
  </article>
</div>
            <div>
          </div>
     
    </b-card>
  </b-col>
</b-col>
  </b-row>
</b-container>
</div>
</template>

<script>

import axios from 'axios'
import navbarDashboard from '@/components/layout/admin/navbarDashboard'
import sidebarDashboard from '@/components/layout/admin/sidebarDashboard'

export default {
  name: 'appPage',
  components: {
    navbarDashboard,
    sidebarDashboard
  },
  data () {
    return {
      // Toggle Sidebar
      isActive: true,
      sidebarSize:'10',
     // Cấu hình Quyền FB
      fbSignInParams: {
        scope: 'user_videos,user_posts,email',
        return_scopes: true,
      },
      loadLive: true
    }
  },
  created (){
    // Kiểm tra đăng nhập
      if(!this.$session.get('authUser')){
          this.$router.push('/')
      }else{
        if(this.$session.get('authUser').role_id !== '0'){
          this.$router.push('/admin')
        }
      }
    
    // Kiểm tra đã cài đặt Chọn Fanpage or Profile cá nhân!

    
    
  },

  methods: {

      // Config Toggle SideBar
      isActiveInfo(){
        this.isActive = !this.isActive;
        if(this.isActive !== true){
          this.sidebarSize = 12;
        }else{
          this.sidebarSize = 10;
        }
      },
      // Đăng xuất
      logOut(){
      this.$session.destroy()
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.scrollDiv{
      height: 300px;
      position:relative;
      overflow-y: scroll;
}
</style>