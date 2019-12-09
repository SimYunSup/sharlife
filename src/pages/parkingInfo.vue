<template>
  <second-layout title="주차장 정보">
    <q-field class="q-my-md" label="이름" stack-label>
      <template #control>
        <div class="self-center full-width no-outline" tabindex="0">
          {{ location.name }}
        </div>
      </template>
    </q-field>
    <q-field class="q-my-md" label="주소" stack-label>
      <template #control>
        <div class="self-center full-width no-outline" tabindex="0">
          {{ location.address }}
        </div>
      </template>
    </q-field>
    <div class="q-mt-xl q-mb-md text-h6 text-center">
      주차요금은 1시간당 {{ location.parkingFee }}원입니다.
    </div>
    <div class="q-my-md flex flex-center">
      <q-chip
        size="lg"
        color="info"
        align="center">
        {{ location.type ? '공용' : '사유'}} 주차장
      </q-chip>
    </div>
    <div class="q-my-md flex flex-center">
      <q-chip
        size="lg"
        :color="location.supportsNFC ? 'primary' : 'danger'"
        align="center">
        NFC 사용 {{ location.supportsNFC ? '가능' : '불가' }}
      </q-chip>
    </div>
    <div class="absolute-bottom vertical-middle flex flex-center" style="height: 40%">
      <q-btn
        color="primary"
        label="결제하기"
        class="q-mt-md"
        :to="'/parking/payment/' + location.id"/>
    </div>
  </second-layout>
</template>

<script>
import SecondLayout from '../layouts/SecondLayout'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'parkingInfo',
  methods: {
    ...mapActions('location', {
      setLocation: 'setLocationInfo'
    })
  },
  computed: {
    ...mapGetters('location', {
      location: 'getLocationInfo'
    })
  },
  components: {
    SecondLayout
  },
  created () {
    if (this.$route.params.id) {
      this.setLocation(this.$route.params.id)
    }
  }
}
</script>

<style scoped>

</style>
