<template>
  <div v-if="options">
    <div class="d-flex align-items-center">
      <b-avatar rounded size="42" variant="light-primary" class="mr-1">
        <!--font-awesome-icon :icon="'fa-solid fa-' + options.icon" size="2xl" /-->
        <feather-icon :icon="options.icon" size="20" />

      </b-avatar>
      <div>
        <h4 class="mb-0">
          {{ options.title }}
        </h4>
        <span>{{ options.deskripsi }}</span>
      </div>
    </div>

    <!-- collapse -->
    <app-collapse id="faq-payment-qna" accordion type="margin" class="mt-2">
      <app-collapse-item v-for="( data, index) in options.faq" :key="data.id" :title="data.question">
        <span v-html="data.answer"></span>
      </app-collapse-item>
    </app-collapse>

    <!--/ collapse -->
  </div>
</template>

<script>
import { BAvatar } from 'bootstrap-vue'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'

export default {
  components: {
    BAvatar,
    AppCollapseItem,
    AppCollapse,
  },
  props: {
    options: {
      type: Object,
      default: () => { },
    },
  },
}
</script>
