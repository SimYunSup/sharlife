<template>
  <second-layout title="주차장 정보">
    <q-field class="q-my-md" label="주소" stack-label>
      <template #control>
        <div class="self-center full-width no-outline" tabindex="0">
          {{ location.address }}
        </div>
      </template>
    </q-field>
    <q-select
      filled
      v-model="value"
      :options="options"
      label="주차 시간"
      class="q-my-xl"
      emit-value
      map-options
      option-value="value"
      option-label="label"
      :error="isValueError"
      error-message="시간대를 입력해주세요!"
      @input="onInput"/>

    <div class="q-mt-xl q-mb-md text-h6 text-center">
      주차요금은 {{ value * location.parkingFee / 60 }}원입니다.
    </div>
    <div class="absolute-bottom vertical-middle flex flex-center" style="height: 20%">
      <q-btn @click="onSubmit" color="primary" label="결제하기" class="q-mt-md"/>
    </div>
  </second-layout>
</template>

<script>
import SecondLayout from '../layouts/SecondLayout'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'parkingInfo',
  data () {
    return {
      value: null,
      options: [],
      isValueError: null
    }
  },
  methods: {
    ...mapActions('list', {
      setTicketInfo: 'setTicketInfo'
    }),
    onInput () {
      this.isValueError = false
    },
    onSubmit () {
      if (this.value !== null) {
        this.isValueError = false
        this.setTicketInfo({ parkingMinutes: this.value, parkingInfo: this.location.address })
        this.$router.push('/parking/paymentDone')
      } else {
        this.isValueError = true
      }
    }
  },
  computed: {
    ...mapGetters('location', {
      location: 'getLocationInfo'
    })
  },
  components: {
    SecondLayout
  },
  mounted () {
    for (let n = 1; n <= 48; n++) {
      this.options.push({
        value: n * 30,
        label: (n === 1 ? '' : (parseInt(n / 2) + '시간')) + (n % 2 ? '30분' : '')
      })
    }
  }
}
</script>

<style scoped>

</style>
