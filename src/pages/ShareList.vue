<template>
  <q-page class="flex flex-center">
    <q-list class="absolute-full">
      <q-item
        clickable
        v-ripple
        right-color="green"
        v-for="(list, index) in lists"
        :key="index"
        @click="goShareInfo(list.id)">
        <q-item-section top>
          <q-item-label class="q-mt-sm" lines="1">{{ list.name }}</q-item-label>
          <q-item-label caption>{{ list.startTime }} ~ {{ list.endTime }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="arrow_right"/>
        </q-item-section>
      </q-item>
    </q-list>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn round color="accent" icon="add" to="/share/adjust"/>
    </q-page-sticky>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ParkingList',
  methods: {
    goShareInfo (id) {
      this.$router.push('/share/' + id)
    }
  },
  computed: {
    ...mapGetters('list', {
      lists: 'getShareList'
    })
  }
}
</script>

<style scoped>

</style>
