<template>
  <div class="home">
    <v-header></v-header>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <a href="weixin://" style="background: #01d00e">打开微信</a>
    <div>
      <h2>Vuex:</h2>
      <p>count:{{$store.getters.getCount}}</p>
    </div>
    <div>
      <p>canvas：</p>
      <circle-canvas label="40%"></circle-canvas>
      <circle-canvas label="40%"></circle-canvas>
      <circle-canvas label="40%"></circle-canvas>
      <circle-canvas label="40%"></circle-canvas>
      <circle-canvas label="40%"></circle-canvas>
      <circle-canvas label="40%"></circle-canvas>
    </div>
    <div>
      <div class="message-list">
        <p v-for="(item,index) in messageList" :key="index">{{item}}</p>
      </div>
      <div ref="formControl">
        <input type="text" id="message" v-model="message" />
        <label for="message" @click="handleSend">发送</label>
      </div>
    </div>
    <div></div>

    <div class="m-kute-wrap">
      <div ref="kuteDoms" v-for="(item,index) in 10" :key="index" class="kute-item">{{index+1}}</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Kute from 'kute.js'
import HelloWorld from '@/components/HelloWorld.vue'
import CircleCanvas from '@/components/circle-canvas.vue'
import Header from '@/components/header'
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ 'header': 1 }, { 'header': 2 }],
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'script': 'sub' }, { 'script': 'super' }],
  [{ 'indent': '-1' }, { 'indent': '+1' }],
  [{ 'direction': 'rtl' }],
  [{ 'size': ['small', false, 'large', 'huge'] }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  [{ 'color': [] }, { 'background': [] }],
  [{ 'font': [] }],
  [{ 'align': [] }],
  ['clean'],
  ['link', 'image']
]
export default {
  name: 'home',
  components: {
    HelloWorld,
    vHeader: Header,
    CircleCanvas
  },
  data () {
    return {
      imgList: [
        {
          url: 'http://pic113.huitu.com/res/20181228/1886382_20181228203900919020_1.jpg'
        },
        {
          url: 'http://pic122.huitu.com/res/20190603/2162798_20190603150445098011_1.jpg'
        },
        {
          url: 'http://pic116.huitu.com/res/20190326/2060116_20190326124605644017_1.jpg'
        },
        {
          url: 'http://pic117.huitu.com/res/20190409/1318758_20190409100656509070_1.jpg'
        },
        {
          url: 'http://pic119.huitu.com/res/20190504/1887823_20190504163825744030_1.jpg'
        },
        {
          url: 'http://img.redocn.com/sheji/20141219/zhongguofengdaodeliyizhanbanzhijing_3744115.jpg'
        },
        {
          url: 'http://pic31.nipic.com/20130801/11604791_100539834000_2.jpg'
        },
        {
          url: 'http://pic41.nipic.com/20140508/18609517_112216473140_2.jpg'
        },
        {
          url: 'http://pic38.nipic.com/20140211/17882171_143443301183_2.jpg'
        },
        {
          url: 'http://pic60.nipic.com/file/20150129/6448355_204110337000_2.jpg'
        }
      ],
      messageList: [],
      message: '',
      content: `<p class="rich_media_content " id="js_content"> 
       <p style="margin: 5px 8px;max-width: 100%;font-family: -apple-system-font, system-ui,Helvetica Neue PingFang SC Hiragino Sans GB Microsoft YaHei UI Microsoft YaHei Arial, sans-serif;white-space: normal;font-size: 14px;letter-spacing: 1px;line-height: 1.75em;box-sizing: border-box !important;overflow-wrap: break-word !important;">
        估计大部分人都做不到完全掌握。因此再次提个醒，
        <strong>千万别以入行为终点。</strong>大家要清楚目前市场对前端岗的需求：初级前端供过于求，高级前端供小于求
        <strong>。</strong>想更上一层楼，要学的东西还多着呢。
       </p>
       <p style="color:red;margin: 5px 8px;max-width: 100%;font-family: -apple-system-font, system-ui,Helvetica Neue PingFang SC Hiragino Sans GB Microsoft YaHei UI Microsoft YaHei Arial, sans-serif;white-space: normal;font-size: 14px;letter-spacing: 1px;line-height: 1.75em;box-sizing: border-box !important;overflow-wrap: break-word !important;">
        估计大部分人都做不到完全掌握。因此再次提个醒，
        <strong>千万别以入行为终点。</strong>大家要清楚目前市场对前端岗的需求：初级前端供过于求，高级前端供小于求
        <strong>。</strong>想更上一层楼，要学的东西还多着呢。
       </p>
      </p>`,
      editorSettings: {
        modules: {
          toolbar: {
            container: toolbarOptions,
            handlers: {
              'image': function (value) {
                console.log('image')
              },
              'clean': function (value) {
              }
            }
          }
        }
      }
    }
  },
  mounted () {
    this.setCountLoop()
    this.initAnimate()
  },
  methods: {
    setCountLoop () {
      setInterval(() => {
        // this.$store.dispatch('setCount', 1)
      }, 1000)
      this.$store.dispatch('setCount', 1)
    },
    handleSend () {
      this.messageList.push(this.message)
      this.message = ''
      this.scrollIntoView()
    },
    scrollIntoView () {
      this.$nextTick(() => {
        this.$refs.formControl.scrollIntoView({ block: 'start', behavior: 'smooth' })
      })
    },
    handleImageAdded (file, Editor, cursorLocation) {

    },
    initAnimate () {
      const { kuteDoms } = this.$refs
      kuteDoms.forEach((item, index) => {
        const kute1 = Kute.fromTo(item, { translateX: 0 }, { translateX: 400 }, { duration: 1000, repeat: 1, yoyo: true, delay: index * 100, complete: () => { console.log(`${index}--complete`) } })
        const kute2 = Kute.to(item, { backgroundColor: `#06${index}` }, { duration: 800, delay: index * 100, complete: () => { console.log(`${index}--complete`) } })
        kute1.chain(kute2)
        kute1.start()
      })
      // setTimeout(() => {
      //   Kute.to('window', { scroll: 0, duration: 100 }).start()
      // }, 2000)
    }
  }
}
</script>
<style lang="scss">
.home {
  background-color: #fff;

  .waterfall-hegiht-css {
    display: flex;
    flex-wrap: wrap;
    .image-box {
      flex-grow: 1;
      width: 50%;
    }
    .img {
      display: block;
      // width: 100%;
      min-width: 100%;
      height: 200px;
      object-fit: cover;
    }
    &:after {
      content: "";
      display: block;
      flex-grow: 99999;
    }
  }
  .m-kute-wrap {
    .kute-item {
      width: 100px;
      height: 70px;
      line-height: 70px;
      border: 1px solid #ccc;
      border-radius: 5px;
      text-align: center;
      font-size: 18px;
      color: #876;
      margin-top: 5px;
    }
  }
}
</style>
