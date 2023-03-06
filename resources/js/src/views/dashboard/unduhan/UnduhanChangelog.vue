<template>
  <b-card>
    <h3>Daftar Perubahan</h3>
    <span v-html="data"></span>
  </b-card>
</template>

<script>
import { BCard, BCardText } from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BCardText,
  },
  props: {
    data: {
      type: String,
      default: () => '',
    },
  },
}
</script>
