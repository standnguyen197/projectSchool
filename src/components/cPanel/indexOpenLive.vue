<template>
<div style="bg-admin">
<vue-headful
    title="Bắt đầu supportLive || IBEE.VN "
/>
<b-container fluid>
<b-row>
<!-- ============================= COL 2 Sidebar custom left ======================= -->
  <b-col cols="2" style="padding-right:0px;padding-left:0px;background: #353e48;" v-if="isActive">
      <sidebarOpenDashboard/>
  </b-col>
<!-- ============================= END COL 2 Sidebar custom left ============================= -->

<!-- Dashboard right -->
<b-col :cols="this.sidebarSize" style="padding-right:0px;padding-left:0px">
  <navbarDashboard @toggleSideBar="isActiveInfo"/>
<b-container>
<b-row>
    <div v-if="errorConnect"
    style="min-width: 100%;
    position: absolute;
    min-height: 100%;
    z-index: 900;
    background: rgb(252, 252, 252);
    text-align:center">
    <p 
    style="background: #00d1b2;
    padding: 5px;
    color: #FFF;
    position: relative;
    top: 0;
    width: 100%;">
    <span> Đang kết nối </span></p>
    <p>
    <b-btn style="margin-top:15%;border:none;background:none;box-shadow:none;cursor:pointer" @click="reApp()"><icon style="color: #00d1b2;"  name="ge" scale="6" spin></icon></b-btn>
    <p>Click vào "Logo đang xoay" phía bên trên để Thử kết Nối lại nếu 5 giây chưa Kết nối được.<p>
    </p>
      </div>
<!-- ==================== COL 12 MAIN LIVE BÊN TRÁI ==========================-->
  <b-container 
  style="padding-right: 40px;
    padding-left: 0px;">  
    <b-col cols="12" style="">
    <b-card 
    style="border-radius: 0px;
    border: none;
    border-top: 1px solid rgba(0,0,0,.125);">
    <b-row>
    <!---///////////////// LOAD VIDEO LIVE ////////////////////////////-->
    <!-- COL 5 PHẦN BÊN LIVE -->
     <b-col cols="5" style="border-right: 1px solid #e1e0e0;">
        <div style="width: 100%;height:560px">
        <iframe 
        :src="srcLiveVid" width="100%" height="560" style="border:none;overflow:hidden" 
        scrolling="no" frameborder="0" allowTransparency="true" 
        allowFullScreen="true"></iframe>
        </div>
      </b-col>
      <!-- //////////////////////////// END LOAD VIDEO LIVE /////////////////////////////-->


    <!-- ////////////////////////////// RANDOM + LIVE COMMENT /////////////////////////// -->
    <!-- COL 7 PHẦN BÊN RANDOM + LIVE COMMENT -->
     <b-col cols="7" style="">
     {{infoVoice}}
        <div style="text-align:center;padding:20px;border:1px solid #CCC;">
        <vue-speech/>
        <h2 style="font-size: 86px;">{{dataRan}}</h2></div>
          <p style="border: 1px solid #ffc107;
    background: #ffc107;
    padding: 10px 10px;
    color: #000;
    font-size: 18px;
    margin-top: 12px;
    font-weight: 600;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;"><span style="
    border: 1px solid rgb(255, 255, 255);
    padding: 2px 5px;
    border-radius: 3px;
    background: #FFF;color:#000;
    margin-right: 5px;"> {{ socketUser }} </span>  - "{{socketMessage}}"  <b-badge style="    color: rgb(255, 255, 255);
    background-color: rgb(239, 88, 103);
    position: absolute;
    right: 15px;
    margin-top: -18px;
    border-radius: 0px;">BÌNH LUẬN HIỆN TẠI</b-badge>
     </p>

    <p>{{ theVoice }}</p>

        <!-- //// THANH BÌNH LUẬN //// -->
      <div class="scrollDiv" id="container">
       <div   v-for="item in imes" :key="item" class="box" style="
                      background-color: white;
                      border-radius: 5px;
                      box-shadow: rgba(10, 10, 10, 0.1) 0px 2px 3px, rgba(10, 10, 10, 0.1) 0px 0px 0px 1px;
                      color: rgb(74, 74, 74);
                      display: block;
                      padding: 1.25rem;
                      margin-bottom: 10px;
              ">
                <article class="media"
                 style="margin-top: -16px;
                  margin-bottom: -35px;">
                  <div class="media-left">
                    <figure class="image">
                      <b-img style="width:50px;border: 2px solid #ffc107;" rounded="circle" :src="item.avatarFB" class="m-1" alt="avatar"/>
                    </figure>
                  </div>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <b-link :href="item.idFB" target="_blank" style=""><strong>{{item.nameFB}}</strong></b-link> <small></small>
                        <br>
                        {{item.messageFB}}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
          </div>
    </b-col>
    <!--  END COL 7 PHẦN BÊN RANDOM + LIVE COMMENT -->
    <!--///////////////////////////// END RANDOM + LIVE COMMENT ///////////////////////////-->

    </b-row>
    </b-card>
    </b-col>
    </b-container>
<!--============================= KẾT THÚC COL 12 MAIN LIVE BÊN TRÁI ============================= --> 

<!-- COL 1 MAIN LIVE BÊN TRÁI --> 
<div>
  <div style="
   position: fixed;
    right: 6px;
    border: 1px solid #CCC;
    padding: 4px;
    min-height: 80vh;
    word-wrap: break-word;">
    <b-button-group vertical>

    <b-button variant="warning"
     style="color:#FFF;cursor:pointer;
     border-bottom:1px solid #eee">
     <icon name="shopping-basket" 
     style="margin-top:7px"></icon>
     <b-badge variant="light" 
     style="position: absolute;right: 3px;
    border-radius: 1.25rem;
    top: 4px;">4</b-badge></b-button>

    <b-button variant="warning"
     style="color:#FFF;cursor:pointer;
     border-bottom:1px solid #eee">
     <icon name="id-card-o" 
     style="margin-top:7px"></icon></b-button>

    <b-button v-if="voiceStatusStart == 0" @click="checkApi"  @click="voiceStatusStart = 1"
    style="color:#FFF;cursor:pointer;
    border-bottom:1px solid #eee">
    <icon name="microphone" 
    style="margin-top:7px"></icon></b-button>

    <b-button v-if="voiceStatusStart == 1" @click="checkApi" variant="danger" 
    style="color:#FFF;cursor:pointer;
    border-bottom:1px solid #eee">
    <icon name="microphone" 
    style="margin-top:7px"></icon></b-button>

    <b-button v-if="voiceStatusStart == 2" @click="checkApi" variant="warning" 
    style="color:#FFF;cursor:pointer;
    border-bottom:1px solid #eee">
    <icon name="microphone" 
    style="margin-top:7px"></icon></b-button>

    <b-button variant="warning" 
    style="color:#FFF;cursor:pointer">
    <icon name="cog" style="
    margin-top:6px"></icon></b-button>
    <b-button v-if="isConnected"  
    style="color:#FFF;background:#23d160;border-color:#23d160;box-shadow:none">
    <icon name="wifi" style="
    margin-top:6px"></icon></b-button>
    <b-button v-else
    style="color:#FFF;box-shadow:none">
    <icon name="wifi" style="
    margin-top:6px"></icon></b-button>

  </b-button-group>
  </div>
</div>
<!-- KẾT THÚC COL 1 MAIN LIVE BÊN TRÁI --> 


  </b-col>
<!-- KẾT THÚC Dashboard right -->
 <b-row>
 </b-container> 
  <!--- END MAIN STEAM -->
</b-col>
  </b-row>
<!-- END DASHBOARD LIVE OPEN -->
</b-container>
</div>
</template>

<script>



import axios from 'axios'
import navbarDashboard from '@/components/layout/admin/navbarDashboard'
import sidebarOpenDashboard from '@/components/layout/admin/sidebarOpenDashboard'

export default {
  name: 'openLivePage',
  components: {
    navbarDashboard,
    sidebarOpenDashboard
  },
  data () {
    return {
      isActive: true,
      sidebarSize:'10',
      errorConnect: true,
      fbSignInParams: {
        scope: 'user_videos,user_posts,email',
        return_scopes: true,
      },
      imes: [],
      srcLiveVid:'',
      isConnected: false,
      socketMessage: '',
      socketUser:'',
      dataRan:'',
      theVoice: '',
      infoVoice:'',
      voiceStatusStart: '0'
    }
  },
  sockets:{
    connect(){
      this.isConnected = true;
      console.log('Socket connected')
    },
    disconnect() {
      this.isConnected = false;
    },
    messageVoice(data) {
      const hitData = data
      this.socketMessage = hitData.msg.messageFB
      this.socketUser = hitData.msg.nameFB
    },
    randomNumber(data){
      const hitData = data;
      console.log(hitData);
      this.dataRan = data.randomNumber;
    },
    voiceSocketReply(data){
     this.theVoice = data.msg.noteContent;
     if(data.dataCode == '1'){
       alert(data.msg.noteContent);
     }
    }
    
  },
  created (){
      if(!this.$session.get('authUser')){
          this.$router.push('/')
      }
//============================= KHAI BÁO ===============================//
    var self = this
    const idLiveVidClient = this.$localStorage.get('idLiveVid')  
    const accessTokenClient = this.$localStorage.get('accessToken') 
    var idLiveVidOpen = this.$route.params.id
    var htmlCodeEmbed = this.$localStorage.get('htmlLiveVid')
//============================= KẾT THÚC KHAI BÁO ===============================//

    if(this.$route.params.id == 'undefined'){
      this.$router.push('/app')
    }
    //============================= LẮNG NGHE SSE TỪ FB ===============================//
    var LiveComments = new EventSource(`https://streaming-graph.facebook.com/${idLiveVidClient}/live_comments?access_token=${accessTokenClient}&comment_rate=one_per_two_seconds&fields=from{name,id},message`);
    
    self.statusOnline = LiveComments.readyState; // Kiểm tra trạng thái khi kết nối SSE

    //============================= NHẬN DATA LIVE ===============================//

      LiveComments.addEventListener('open', function(event) {
        self.statusOnline = 1;
        self.errorConnect = false;
        self.srcLiveVid = htmlCodeEmbed;
        console.log('Connected SSE');
        
        //============================= NHẬN DATA BÌNH LUẬN ===============================//
            LiveComments.addEventListener('message', function(event) {
            console.log(event.data);
            var data = JSON.parse(event.data); // NHẬN DATA

            var messageFB = data.message; // GÁN TIN NHẮN
            var nameFB = data.from.name; // GÁN TÊN
            var idFB = `https://facebook.com/${data.from.id}`; // GÁN ID
            var idFBSys = data.from.id; // GÁN ID
            var avatarFB = `https://graph.facebook.com/${data.from.id}/picture?type=small`;// GÁN ID LẤY ẢNH

              // GỬI BÌNH LUẬN HIỂN THỊ CLIENT //
              self.imes.push({messageFB,nameFB,avatarFB,idFB});

              self.$socket.emit('pingServer', {messageFB,nameFB})

              // GỬI COMMENT CHECK ĐƠN HÀNG -- EMIT "replyRandom" //
              self.$socket.emit('replyRandom', {messageFB,nameFB,avatarFB,idFB})
               
               // HIỂN THỊ TIN NHẮN VÀ TÊN RA NGOÀI

              // console.log(`Tin nhắn: ${data.message} - Từ: ${data.from.name}`);

            }, false);
        
    }, false);
  //============================= KIỂM TRA KẾT NỐI OPENLIVE ===============================//
    window.setTimeout(function(){ 
      if(self.statusOnline == 0){
            location.href=`#/app`;
    } 
      }, 3000);
  //============ KIỂM TRA KẾT NỐI SOCKET ============//

      window.setTimeout(function(){ 
      if(self.isConnected == false){
            location.reload();
    } 
      }, 2000);   

  //============================= KẾT THÚC KIỂM TRA KẾT NỐI OPENLIVE ===============================//

  },
  updated() { 
    this.scrollToEnd();
    },
  methods: {
      reApp(){
        location.href = `#/app/openLive/${this.$route.params.id}`   
      },
      // toggle SideBar
      isActiveInfo(){
        this.isActive = !this.isActive;
        if(this.isActive !== true){
          this.sidebarSize = 12;
        }else{
          this.sidebarSize = 10;
        }
      },
     scrollToEnd() {    	
       var container = document.querySelector("#container");
       var scrollHeight = container.scrollHeight;
       container.scrollTop = scrollHeight;
    },
      // Đăng xuất
      logOut(){
      this.$session.destroy()
      this.$router.push('/')
    },
    checkApi () {
      var _this = this;
      var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      var recognition = new SpeechRecognition();
      var noteContent = ''; // nhận giọng nói!
      recognition.lang = 'vi';
      recognition.continuous = true;
      recognition.interimResults = true;


    recognition.onspeechstart = function() { 
        console.log('Đã kết nối Thu Âm');
        this.voiceStatusStart = 1;
          recognition.onresult = function(event) {
          var current = event.resultIndex;
          var transcript = event.results[current][0].transcript;
          var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

        if(!mobileRepeatBug) {
          noteContent = transcript;
          // _this.theVoice = noteContent;
          _this.$socket.emit('voiceSocketPush', {noteContent})
          // console.log(noteContent);
        }
      };
    }

    recognition.onend = function() {
      recognition.start();
      this.voiceStatusStart = 0;
      console.log('Kết thúc Thu Âm!');
    }
    recognition.start(); 

    }

  },
  mounted(){
    this.scrollToEnd();
  },
}
</script>

<style scoped>
.alert {
    color: #c33;
    opacity: .8;
}
.media-left {
    margin-right: 1rem;
}
.media-content {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    text-align: left;
}
.scrollDiv{
      padding: 2px;
      height: 300px;
      position:relative;
      overflow-y: scroll;
}
</style>