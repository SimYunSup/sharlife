<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="text-center">
          {{ title }}
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs
        dense
        align="justify"
        v-if="path === 'main'"
        v-model="subTab">
        <q-route-tab
          to="/main/map"
          name="map"
          label="지도"/>
        <q-route-tab
          to="/main/lists"
          name="nearPark"
          label="근처 주차장"/>
      </q-tabs>
    </q-header>

    <q-footer elevated>
      <q-tabs
        v-model="tab"
        align="justify"
        indicator-color="yellow"
        class="bg-primary text-white shadow-2">
        <q-route-tab to="/main/map" name="main" icon="home" label="메인" />
        <q-route-tab to="/ticket" name="ticket" icon="receipt" label="이용권" />
        <q-route-tab to="/share" name="share" icon="cloud" label="주차장 공유" />
        <q-route-tab to="/menu" name="menu" icon="menu" label="메뉴" />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  props: {
    title: {
      type: String,
      default: '주차여따혀'
    }
  },
  data () {
    return {
      tab: 'main',
      subTab: 'map'
    }
  },
  computed: {
    path () {
      return this.$route.path.split('/')[1]
    }
  }
}
</script>
