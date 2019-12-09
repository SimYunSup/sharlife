<template>
  <third-layout :title="title">
    <div
      class="absolute-full flex flex-center"
      v-if="loadingState">
      <q-circular-progress
        indeterminate
        size="100px"
        color="purple"
        class="q-ma-md"
      />
    </div>
    <div v-else>
      <div class="absolute-top flex flex-center" style="height: 60%">
        <div class="text-h6 text-center absolute-bottom vertical-middle flex flex-center" style="height: 60%">
          결제가 완료되었습니다!
        </div>
      </div>
      <div class="absolute-bottom vertical-middle flex flex-center" style="height: 40%">
        <q-btn color="primary" label="돌아가기" class="q-mt-md" @click.prevent="goMain"/>
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
    goMain () {
      this.$router.go(-3)
    }
  },
  computed: {
    title () {
      return '결제 ' + (this.loadingState ? '중' : '완료')
    }
  },
  components: {
    ThirdLayout
  },
  mounted () {
    setTimeout(() => {
      this.loadingState = false
    }, 1000 * 5)
  }
}
</script>

<style scoped>

</style>
