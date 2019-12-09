<template>
  <second-layout title="주차장 정보">
    <form @submit.prevent.stop="onSubmit">
      <q-input
        ref="name"
        v-model="name"
        class="q-my-md"
        label="이름"
        lazy-rules
        :rules="[ val => val && val.length > 0 || '이 칸을 채우세요']"/>
      <q-input
        ref="address"
        v-model="address"
        class="q-my-md"
        label="주소"
        lazy-rules
        :rules="[ val => val && val.length > 0 || '이 칸을 채우세요']"/>
      <div class="row q-my-md">
        <q-input ref="startTime" class="col-6" filled v-model="startTime" label="공유 시작 시간" mask="time" :rules="['time']">
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="startTime" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-input ref="endTime" class="col-6" filled v-model="endTime" label="공유 종료 시간" mask="time" :rules="['time']">
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="endTime" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    <div class="q-mt-xl q-mb-md text-h6 text-center">
      주차요금은 1시간당 600원입니다.
    </div>

    <div class="absolute-bottom vertical-middle flex flex-center" style="height: 40%">
      <q-btn
        type="submit"
        color="primary"
        label="공유하기"
        class="q-mt-md"/>
    </div>

    </form>
  </second-layout>
</template>

<script>
import SecondLayout from '../layouts/SecondLayout'
import { mapActions } from 'vuex'

export default {
  name: 'parkingInfo',
  data () {
    return {
      name: null,
      address: null,
      startTime: null,
      endTime: null
    }
  },
  methods: {
    ...mapActions('list', {
      addParkingLot: 'addParkingLot'
    }),
    onSubmit () {
      console.log('start')
      this.$refs.name.validate()
      this.$refs.address.validate()
      this.$refs.startTime.validate()
      this.$refs.endTime.validate()

      if (this.$refs.name.hasError || this.$refs.address.hasError || this.$refs.endTime.hasError || this.$refs.startTime.hasError) {
        console.log('asdf')
      } else {
        this.addParkingLot({
          name: this.name,
          address: this.address,
          startTime: this.startTime,
          endTime: this.endTime
        })
        this.$router.go(-1)
      }
    }
  },
  components: {
    SecondLayout
  }
}
</script>

<style scoped>

</style>
