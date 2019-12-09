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
    <div class="row q-my-md">
      <q-field class="col-6" label="공유 시작 시간" stack-label>
        <template #control>
          <div class="self-center full-width no-outline" tabindex="0">
            {{ location.startTime }}
          </div>
        </template>
      </q-field>
      <q-field class="col-6" label="공유 종료 시간" stack-label>
        <template #control>
          <div class="self-center full-width no-outline" tabindex="0">
            {{ location.endTime }}
          </div>
        </template>
      </q-field>
    </div>
    <div class="q-mt-xl q-mb-md text-h6 text-center">
      주차요금은 1시간당 600원입니다.
    </div>
  </second-layout>
</template>

<script>
import SecondLayout from '../layouts/SecondLayout'
import { mapGetters } from 'vuex'

export default {
  name: 'parkingInfo',
  methods: {
    ...mapGetters('list', {
      getShareInfo: 'getShareInfo'
    })
  },
  computed: {
    location () {
      return this.getShareInfo()(this.$route.params.id)
    }
  },
  components: {
    SecondLayout
  }
}
</script>

<style scoped>

</style>
