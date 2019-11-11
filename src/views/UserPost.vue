<template>
  <div class="home">
    <h3>user-post</h3>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
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
      message: ''
    }
  },
  mounted () {
    this.setCountLoop()
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
    }
  }
}
</script>
<style lang="scss">
.home {
  background-color: #fff;
}
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
</style>
