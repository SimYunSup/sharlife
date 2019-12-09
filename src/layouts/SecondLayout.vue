<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat round dense icon="arrow_back" class="q-mr-sm" @click="goBack" />
        <q-toolbar-title class="text-center">
          {{ title }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container class="q-pa-md">
      <slot/>
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
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
