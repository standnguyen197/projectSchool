<template>
<div style="bg-admin">
<vue-headful
    title="FANPAGE OR PROFILE || Cài đặt tài khoản OpenLive"
/>
<b-container fluid>
<b-row>
<!-- Sidebar custom left -->
  <b-col cols="2" style="padding-right:0px;padding-left:0px" v-if="isActive">
      <sidebarDashboard/>
  </b-col>
<!-- Dashboard right -->
<b-col :cols="sidebarSize" style="padding-right:0px;padding-left:0px">
  <navbarDashboard @toggleSideBar="isActiveInfo()"/>
  <b-col cols="12">
  
  <h2 style="color:orange" class="mt-2 ml-2">CÀI ĐẶT TÀI KHOẢN LIVE</h2>
   <b-card style="border-radius:0px" class="mt-2">
    <div>   
        <b-col sm="12" md="8" offset-md="2">
            <b-form @submit="onSubmit">
            <vue-snotify></vue-snotify>
                <p>{{ selectTypeAccountFanpageLive }}</p>
                <h5 style="color: orange;font-size: 17px;">CHỌN TÀI KHOẢN KHI LIVE</h5>
                <span style="color: #7a7a7a;"> Bạn live bằng Facebook Cá Nhân hay Fanpage ?? <i style="color:orange" v-b-popover.hover.top="'Bạn sử dụng ứng dụng của iBee.Vn LIVE ở Trang cá nhân hay ở FanPage?? Nếu bạn LIVE ở Trang Cá Nhân thì hãy chọn Trang Cá Nhân nhé!'" class="fa fa-question-circle"/></span>
                <b-form-select v-model="selectTypeAccountLive" :options="optionsTypeAccountLive" class="mb-3" />
                <!--@change="getTypeAccountLive(selectTypeAccountLive)"-->
                <div v-if="isActiveSelectFanpage">
                <h5 style="color: orange;font-size: 17px;">CHỌN TÊN FANPAGE BẠN LIVE</h5>
                <span style="color: #7a7a7a;"> Bạn live bằng Fanpage nào ?? <i style="color:orange" v-b-popover.hover.top="'Bạn sử dụng ứng dụng của iBee.Vn LIVE ở FanPage?? Vậy hãy chọn Fanpage chính mà bạn hay LIVE Bán hàng trên đó!'" class="fa fa-question-circle"/></span>
                 <b-form-select v-model="selectTypeAccountFanpageLive" class="mb-3">
                  <template slot="first">
                    <!-- this slot appears above the options from 'options' prop -->
                    <option :value="null" disabled>Hãy chọn Fanpage bạn LIVE</option>
                  </template>
                  <!-- these options will appear after the ones from 'options' prop -->
                   <option v-for="item in optionsTypeAccountFanpageLive" :value="item.id">{{ item.name }}</option>
                </b-form-select>
                </div>
                <h5 style="color: orange;font-size: 17px;">CHỌN MÃ SẢN PHẨM</h5>
                <span style="color: #7a7a7a;"> Bạn muốn dùng mã sản phẩm nhập sẵn hay random mã cho bạn ?? <i style="color:orange" v-b-popover.hover.top="'Khi bạn LIVE thì iBee.Vn sẽ hiển thị MÃ SỐ cho bạn đọc cho KHÁCH HÀNG. Nếu bạn có dữ liệu sẵn trong iBee.Vn thì có thể sử dụng MÃ SỐ từ hệ thống sản phẩm. Hoặc nếu không thì chọn NGẪU NHIÊN nhé!'" class="fa fa-question-circle"/></span>
                <b-form-select v-model="selectTypeCodeProduct" :options="optionsTypeCodeProduct" class="mb-3" />

                <h5 style="color: orange;font-size: 17px;">CHỌN THỂ LOẠI SẢN PHẨM</h5>
                <span style="color: #7a7a7a;"> Bạn bán nhiều sản phẩm hay chỉ 1 sản phẩm ?? <i style="color:orange" v-b-popover.hover.top="'Nếu bạn chỉ bán 1 sản phẩm duy nhất, như kiểu (Bóng điện tích điện). Thì bạn nên chọn MỘT LOẠI SẢN PHẨM.Còn nếu bạn bán quần áo hay Đồng hồ nhiều mã thì nên chọn NHIỀU SẢN PHẨM nhé!'" class="fa fa-question-circle" /></span>
                <b-form-select v-model="selectTypeProductShop" :options="optionsTypeProductShop" class="mb-3" />

                <h5 style="color: orange;font-size: 17px;">CHỌN SỐ KHÁCH HÀNG DỰ BỊ</h5>
                <span style="color: #7a7a7a;">  Nếu khách hàng đầu từ chối mua sản phẩm. Bạn cần khách hàng thay thế ?? <i style="color:orange" v-b-popover.hover.top="'Nếu như trong khi 1 vị khách của bạn đã chốt đơn hàng trong quá trình LIVE bán hàng.. Nhưng sau đó họ không mua nữa thì mặc định iBee.Vn đã lưu trữ cho bạn 2 vị khách hàng dự bị để thay thế đơn hàng rồi.Nếu bạn muốn dự bị nhiều hơn thì hãy thay thế cho phù hợp nhé!'" class="fa fa-question-circle"/></span>
                <b-form-group id="exampleInputGroup1"
                               >
                    <b-form-input id="exampleInput1"
                                type="text"
                                value="2"
                                required
                                v-model="userReserve"
                                placeholder="Nhập số người dự bị">
                    </b-form-input>
                </b-form-group>

                <b-button type="submit" style="color:#FFF;cursor:pointer" variant="warning">LƯU CÀI ĐẶT</b-button>
      </b-form>
        </b-col>
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
      loadLive: true,
      isActiveSelectFanpage: false,
      
      selectTypeAccountLive: 'profile',
      optionsTypeAccountLive: [
        { value: 'profile', text: 'Trang Cá Nhân' },
        { value: 'fanpage', text: 'Trang Fanpage' }
      ],
      
      selectTypeCodeProduct: 'randomType',
      optionsTypeCodeProduct: [
        { value: 'randomType', text: 'Ngẫu nhiên' },
        { value: 'productType', text: 'Mã Sản Phẩm được lập sẵn' }
      ],

      selectTypeProductShop: 'multipleProduct',
      optionsTypeProductShop: [
        { value: 'multipleProduct', text: 'Nhiều sản phẩm' },
        { value: 'singleProduct', text: 'Một loại sản phẩm' }
      ],

      selectTypeAccountFanpageLive: null,
      optionsTypeAccountFanpageLive: [],
      userReserve: '2'
    }
  },
  created (){
    var _this = this;
    // Kiểm tra đăng nhập
      if(!this.$session.get('authUser')){
          this.$router.push('/')
      }else{
        if(this.$session.get('authUser').role_id !== '0'){
          this.$router.push('/admin')
        }
      }
      // Hiển thị thông báo khi mới vào!
     window.setTimeout(()=>{ 
      _this.displayNotification();
      }, 2000);   
  },
  watch: {
    selectTypeAccountLive: function(val) {
      this.isActiveSelectFanpage = (val === 'fanpage');
    },
    isActiveSelectFanpage: function(val) {
      const access_token = this.$session.get('access_token');
      const _this = this;
      if (val) {
       FB.api(`me/accounts?access_token=${access_token}`, (response) => {
              const dataFanpage = response.data;
              if(dataFanpage.length == 0){
                _this.isActiveSelectFanpage = false;
                _this.selectTypeAccountLive = 'profile'
                _this.displayNotificationError();
              }else{
                _this.optionsTypeAccountFanpageLive = response.data;
              }
        })
      }
    }
  },
  methods: {
    onSubmit(event){
     event.preventDefault();
     console.log('Đã gửi thông tin');
     console.log(`Tài khoản: ${this.selectTypeAccountLive} - Tên Fanpage: ${this.selectTypeAccountFanpageLive} - 
     Kiểu mã: ${this.selectTypeCodeProduct} - Loại sản phẩm: ${this.selectTypeProductShop} - Khách dự bị : ${this.userReserve}`)
    },
    displayNotification() {
        this.$snotify.html(`<div class="snotifyToast__title" style="color:orange;font-size:20px"><b>Tips cho bạn!</b></div>
        <div class="snotifyToast__body">Nếu bạn không hiểu các ô lựa chọn có thể click vào <i style="color:orange" class="fa fa-question-circle"></i> để biết thêm thông tin nhé!</div> `, {
        timeout: 10000,
        showProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
    },
    displayNotificationError() {
        this.$snotify.error('Lỗi bạn không có Fanpage nào cả!','Thông báo', {
        timeout: 10000,
        showProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true
      });
    },
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