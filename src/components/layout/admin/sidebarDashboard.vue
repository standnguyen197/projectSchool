<template>
<div>
     <b-list-group style="height: 100vh;border-right:1px solid rgba(0,0,0,.125);">
<!-- Thời gian -->
  <b-list-group-item  active class="flex-column align-items-start"
   style="border-radius:0px;
    padding: 5px 10px;
    z-index: 2;
    color: #fff;
    background-color: #3c4651;
    border-color: #383838;">
    <div class="d-flex w-100 justify-content-between">
    <b-link href="#/app" 
    style="margin-left: auto;
    margin-right: auto;">
      <img src="@/assets/logo.png" 
      style="    width: 50px;
    height: 50px;
    border-radius: 79px;
    background: #FFF;
    border: 2px solid #cebebe;
    "/>
    </b-link>
    </div>
    <hr/>
    <div style="border: 1px solid #9d9d9d;
    padding-top: 15px;
    margin-bottom: 8px;">
    <h4 style="text-align:center">{{ clockTime }}</h4>
    <p class="text-muted" style="text-align:center">{{ new Date() | moment('timezone','Asia/Ho_Chi_Minh', 'L')}}</p>
    </div>
  </b-list-group-item>

<!-- Bắt đầu live -->
  <b-list-group-item @click="getLiveFB" class="flex-column align-items-start active-live" 
  style="border-radius: 0px;
    background-color: rgb(255, 186, 0);
    border-top: 1px solid rgba(0, 0, 0, 0.125);
    border-left: 8px solid rgba(0, 0, 0, 0.125);
    border-bottom: none;
    text-align: center;
    color: #FFF;
    cursor: pointer;
    font-size: 18px;" disabled>
<b>BẮT ĐẦU NÀO</b>
  </b-list-group-item>
<!-- Kết thúc live -->

  <b-list-group-item href="#/app/settingAccountOpenLive" class="flex-column align-items-start" 
  style="border-radius: 0px;
    background-color: rgb(31, 31, 32);
    border-left: 8px solid rgb(255, 193, 7);
    border-bottom: none;
    border-top: 1px solid rgba(0,0,0,.125);
    " >
    <b style="
    font-size: 13px;
    color: #FFF">FANPAGE OR PROFILE</b>
  </b-list-group-item>
  <b-list-group-item href="#" class="flex-column align-items-start" style="border-radius: 0px;
    background-color: rgb(31, 31, 32);
    border-left: 8px solid rgb(255, 193, 7);
    border-bottom: none;
    border-top: 1px solid rgba(0,0,0,.125);">
    <b style="font-size: 13px;
    color: #FFF">QUẢN LÝ SẢN PHẨM</b>
  </b-list-group-item>
  <b-list-group-item href="#" class="flex-column align-items-start" style="border-radius: 0px;
    background-color: rgb(31, 31, 32);
    border-left: 8px solid rgb(255, 193, 7);
    border-bottom: none;
    border-top: 1px solid rgba(0,0,0,.125);">
    <b style="font-size: 13px;     color: #FFF">QUẢN LÝ ĐƠN HÀNG</b>
  </b-list-group-item>
    <b-list-group-item href="#" class="flex-column align-items-start" style="border-radius: 0px;
    background-color: rgb(31, 31, 32);
    border-left: 8px solid rgb(255, 193, 7);
    border-bottom: none;
    border-top: 1px solid rgba(0,0,0,.125);">
    <b style="font-size: 13px;     color: #FFF">QUẢN LÝ THỐNG KÊ</b>
  </b-list-group-item>
    <b-list-group-item href="#" class="flex-column align-items-start" style="border-radius: 0px;
    background-color: rgb(31, 31, 32);
    border-left: 8px solid rgb(255, 193, 7);
    border-bottom: none;
    border-top: 1px solid rgba(0,0,0,.125);">
    <b style="font-size: 13px;     color: #FFF">TRANG CỬA HÀNG</b>
  </b-list-group-item>
    <b-list-group-item href="#" class="flex-column align-items-start" style="border-radius: 0px;
    background-color: rgb(31, 31, 32);
    border-left: 8px solid rgb(255, 193, 7);
    border-bottom: none;
    border-top: 1px solid rgba(0,0,0,.125);">
    <b style="font-size: 13px;     color: #FFF">TRANG NẠP TIỀN</b>
  </b-list-group-item>
    <b-list-group-item href="#" class="flex-column align-items-start" style="border-radius: 0px;
    background-color: rgb(31, 31, 32);
    border-left: 8px solid rgb(255, 193, 7);
    border-bottom: none;
    border-top: 1px solid rgba(0,0,0,.125);">
    <b style="font-size: 13px;     color: #FFF">QUẢN LÝ CÀI ĐẶT</b>
  </b-list-group-item>
    <b-list-group-item href="#" class="flex-column align-items-start" style="border-radius: 0px;
    background-color: rgb(31, 31, 32);
    border-left: 8px solid rgb(255, 193, 7);
    border-bottom: none;
    border-top: 1px solid rgba(0,0,0,.125);">
    <b style="font-size: 13px;     color: #FFF">CHẾ ĐỘ NHANH</b>
  </b-list-group-item>
  <!-- KHOẢNG TRỐN -->
  <div class="mt-5">
  </div>
</b-list-group>
</div>
</template>
<script>
    export default {
        props: {

        },
        data(){
            return {
                 timeClock: this.timeNow(),
                 clockTime: 'Đang cập nhật'
            }
        },
        methods: {
        
        // Thời gian
         timeNow(){
            setInterval(()=>{ 
            var date = new Date();
            var h = date.getHours(); // 0 - 23
            var m = date.getMinutes(); // 0 - 59
            var s = date.getSeconds(); // 0 - 59
            var session = "AM";
            
            if(h == 0){
                h = 12;
            }
            
            if(h > 12){
                h = h - 12;
                session = "PM";
            }
            
            h = (h < 10) ? "0" + h : h;
            m = (m < 10) ? "0" + m : m;
            s = (s < 10) ? "0" + s : s;
            
            var time = h + ":" + m + ":" + s + " " + session;
            this.clockTime = time;
            }, 1000);
      },
      // Gửi lệnh đóng mở sidebar   
        activeSideBar(){
                this.$emit('toggleSideBar');
            },
      // Thử lấy dữ liệu LiveFB
      getLiveFB(){
      const self = this;
      const accessToken = this.$session.get('access_token');
      // Lấy video đang live
        FB.api(
            `/me/live_videos?access_token=${accessToken}`, 'GET', {},
            function(response) {
              // Nhận kết quả trả về bỏ vào Items
                this.items = response.data;
            if(response.data == 'undefined'){
              location.href= "#/app"
            }
            console.log(response.data);
            // Tìm những giá trị đang là VIDEO LIVE
             this.itemsVideo = items.filter(function(item) {
                  return item.status === "LIVE";
              });

           
            var itemsVideoClient = this.itemsVideo;
            // Gán giá trị vào resultVideoLive
            var resultVideoLive = this.itemsVideo.length;

            console.log(itemsVideoClient);
            // Nếu có thì chuyển hướng.. Còn không thì báo không có!
            if(resultVideoLive >= 1){
          // Tách lấy giá trị embedHTML
            const htmlLiveVid = itemsVideoClient[0].embed_html;
            const renderLiveVid = htmlLiveVid.split('src="')[1].split('&width=')[0];
            const renderFullVid = renderLiveVid+"&width=360";
            // Gửi về server để nhận Socket Live Comments
              self.$localStorage.set('htmlLiveVid',renderFullVid)
              self.$localStorage.set('idLiveVid', itemsVideoClient[0].id)  
              self.$localStorage.set('accessToken', accessToken)  

               self.$router.push(`/app/openLive/${itemsVideoClient[0].id}`)
            }else{

              alert('Chưa tìm thấy được Bài viết LIVE VIDEO! Đang thử lại sau 5s!')

            }

        });

      },
        logOut(){
            this.$session.destroy()
            this.$router.push('/')
            }
        }
    }
</script>

<style>
    .img-avatar-cpanel{
    width: 27px;
    border-radius: 20px;
    border: 1px solid #adadad;
}
</style>