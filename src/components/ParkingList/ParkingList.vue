<template>
  <q-list style="width: 100%;">
    <q-item
      clickable
      v-ripple
      right-color="green"
      v-for="(list, index) in lists"
      :key="index"
      @click="goParkingInfo(list.id)">
      <q-item-section class="q-px-md" top>
        <q-item-label class="q-mt-sm" lines="1">{{ list.name }}</q-item-label>
        <q-item-label
          class="q-gutter-sm"
          caption>
          <q-chip
            size="sm"
            color="secondary"
            :outline="!list.supportsNFC"
            align="center">
            NFC
          </q-chip>
          <q-chip
            size="sm"
            color="secondary"
            align="center">
            {{ list.type ? '공용' : '사유'}} 주차장
          </q-chip>
        </q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-icon name="arrow_right"/>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: 'ParkingList',
  props: {
    lists: Array
  },
  methods: {
    goParkingInfo (id) {
      this.$router.push('/parking/' + id)
    }
  }
}
</script>

<style scoped>

</style>
