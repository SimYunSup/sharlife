<template>
  <q-page class="flex flex-center">
    <div v-if="!hasTicket">
      이용권이 없습니다!
    </div>
    <div v-else>
      <div class="absolute-top vertical-middle flex flex-center column" style="height: 40%">
        <div class="q-my-md text-h6 text-center vertical-middle">
          남은 시간
        </div>
        <div class="text-h3 text-center vertical-middle flex flex-center">
          {{ ticketTime }}
        </div>
      </div>
      <q-field class="q-my-md" label="주소" stack-label style="min-width: 300px;">
        <template #control>
          <div class="self-center full-width no-outline">
            {{ ticket().parking }}
          </div>
        </template>
      </q-field>
      <div class="absolute-bottom vertical-middle flex flex-center column" style="height: 40%">
        <q-btn color="primary" label="연장하기" class="q-mt-md"/>
        <q-btn to="/ticket/tag" color="primary" label="태그모드" class="q-mt-md"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'parkingInfo',
  data () {
    return {
      hasTicket: false,
      ticketTime: this.getTicketTime(),
      interval: null
    }
  },
  methods: {
    getTicketTime () {
      let time = this.ticket().time
      let lastTime = time - Date.now()
      if (lastTime <= 0 || time === undefined) {
        this.hasTicket = false
        return ''
      } else {
        console.log('set')
        this.hasTicket = true
      }
      let hour = parseInt(lastTime / (60 * 60 * 1000))
      return hour + ':' +
        parseInt(lastTime / (60 * 1000) - hour * 60)
    },
    ...mapGetters('list', {
      ticket: 'getTicketInfo'
    })
  },
  mounted () {
    this.ticketTime = this.getTicketTime()
    this.interval = setInterval(() => {
      this.ticketTime = this.getTicketTime()
    }, 1000)
  },
  destroyed () {
    clearInterval(this.interval)
  }
}
</script>

<style scoped>

</style>
