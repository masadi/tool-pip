<template>
  <div>
    <p class="clearfix mb-0">
      <span class="float-md-left d-block d-md-inline-block mt-25">
        COPYRIGHT  © {{ new Date().getFullYear() }}
        <b-link class="ml-25" href="http://smk.kemdikbud.go.id/" target="_blank">Direktorat SMK</b-link>
        <span class="d-none d-sm-inline-block">, All rights Reserved</span>
      </span>
      <p class="d-block d-md-none small">Untuk tampilan terbaik minimal resolusi 1360 x 768</p>
      <span class="float-md-right d-none d-md-block">Dashboard v.2.0.3
        <feather-icon
          icon="HeartIcon"
          size="21"
          class="text-danger stroke-current"
        />
      </span>
    </p>
  </div>
</template>

<script>
import { BLink } from 'bootstrap-vue'

export default {
  components: {
    BLink,
  },
}
</script>
