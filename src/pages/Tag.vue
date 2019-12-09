<template>
  <third-layout :title="title">
    <div>
      <div class="absolute-top flex flex-center" style="height: 60%">
        <q-icon name="fas fa-archive" class="absolute" style="font-size: 10em; color:grey; opacity: 0.7"/>
        <q-icon name="fas fa-mobile-alt" class="rotate-45" style="font-size: 8em; z-index: 2;"/>
        <div class="text-h6 text-center absolute-bottom vertical-middle flex flex-center">
          스마트폰을 단말기에 대주세요!
        </div>
      </div>
      <div class="absolute-bottom vertical-middle flex flex-center" style="height: 20%">
        <q-btn color="primary" label="돌아가기" class="q-mt-md" @click.prevent="goBack"/>
      </div>
    </div>
  </third-layout>
</template>

<script>
import ThirdLayout from '../layouts/ThirdLayout'

export default {
  name: 'parkingInfo',
  data () {
    return {
      loadingState: true
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  computed: {
    title () {
      return '결제 ' + (this.loadingState ? '중' : '완료')
    }
  },
  components: {
    ThirdLayout
  }
}
</script>

<style scoped>

</style>
