<template>
  <div class="g-index-wrap">
    <Layout>
      <Header></Header>
      <Layout>
        <Slider></Slider>
        <Content>
          <hell-world :list="testList"/>
          <slot></slot>
        </Content>
      </Layout>
      <Layout>
        <Footer></Footer>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import Header from './header'
import Slider from './slider'
import Footer from './footer'
import HellWorld from '../HelloWorld'

export default {
  components: {
    Header,
    Footer,
    Slider,
    HellWorld
  },
  data () {
    return {
      testList: [
        {
          name: '文本1',
          children: [
            { name: '文本1-1',
              children: [
                {
                  name: '文本1-2'
                }
              ] }
          ]
        },
        {
          name: '文本2'
        },
        {
          name: '文本3'
        }
      ]
    }
  }
}
</script>
