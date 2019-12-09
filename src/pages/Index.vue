<template>
  <q-page class="flex flex-center">
    <q-tab-panels
      class="absolute-full"
      v-model="tab"
      animated>
      <q-tab-panel
        name="map"
        class="q-pa-none">
        <!-- TODO: map API -->
        <q-img
          style="height: 100%; width: 100%;"
          :src="require('../assets/map.png')">
          <template #error>
            <div class="absolute-full flex flex-center bg-secondary text-white">
              We update next version! maybe....
            </div>
          </template>
        </q-img>
      </q-tab-panel>

      <q-tab-panel name="lists">
        <parking-list :lists="parkingLists"/>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script>
import ParkingList from '../components/ParkingList/ParkingList'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PageIndex',
  methods: {
    ...mapActions('location', {
      setLocation: 'setLocation'
    })
  },
  computed: {
    ...mapGetters('location', {
      parkingLists: 'getLocations'
    }),
    tab () {
      return this.$route.path === '/' ? 'map' : 'lists'
    }
  },
  components: {
    ParkingList
  },
  created () {
    this.setLocation()
  }
}
</script>
