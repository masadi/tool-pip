<template>
  <div>
    <!-- faq search section -->
    <section id="faq-search-filter">
      <b-card no-body class="faq-search"
        :style="{ backgroundImage: `url(${require('@/assets/images/banner/banner.png')})` }">
        <b-card-body class="text-center">
          <h2 class="text-primary">
            Cari pertanyaan yang sering ditanyakan
          </h2>
          <b-card-text class="mb-2">
            atau pilih kategori untuk menemukan bantuan yang Anda butuhkan dengan cepat
          </b-card-text>

          <!-- form -->
          <b-form class="faq-search-input">
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="SearchIcon" />
              </b-input-group-prepend>
              <b-form-input id="searchbar" v-model="faqSearchQuery" placeholder="Cari pertanyaan..." />
            </b-input-group>
          </b-form>
          <!-- form -->
        </b-card-body>
      </b-card>
    </section>
    <!--/ faq search section -->

    <!-- frequently asked questions tabs pills -->
    <section id="faq-tabs">
      <b-tabs vertical content-class="col-12 col-md-8 col-lg-9" pills
        nav-wrapper-class="faq-navigation col-md-4 col-lg-3 col-12" nav-class="nav-left">

        <!-- payment tab -->
        <b-tab v-for="(categoryObj, categoryName, index) in faqData" :key="categoryName" :active="!index">

          <!-- title -->
          <template #title>
            <feather-icon :icon="categoryObj.icon" size="18" class="mr-1" />
            <span class="font-weight-bold">{{ categoryObj.title }}</span>
          </template>

          <faq-question-answer :options="categoryObj" />
        </b-tab>
        <!--/ payment tab -->

        <!-- sitting lady image -->
        <template #tabs-end>
          <b-img fluid :src="require('@/assets/images/illustration/faq-illustrations.svg')"
            class="d-none d-md-block mt-auto" />
        </template>
        <!--/ sitting lady image -->
      </b-tabs>
    </section>
    <!--/ frequently asked questions tabs pills -->

    <!-- contact us -->
    <section class="faq-contact">
      <b-row class="mt-5 pt-75 text-center">
        <b-col cols="12">
          <h2>Anda masih memiliki pertanyaan?</h2>
          <b-card-text class="mb-3">
            Jika Anda tidak dapat menemukan pertanyaan di FAQ kami, Anda selalu dapat menghubungi kami. Kami akan
            menjawab Anda segera!
          </b-card-text>
        </b-col>
        <b-col sm="6">
          <b-card class="shadow-none py-1 faq-contact-card">
            <h3>Informasi seputar teknis aplikasi</h3>
            <div class="btn-group-vertical">
              <a target="_blank" href="https://api.whatsapp.com/send?phone=628156441864&text=NPSN:20532211"><b-icon-whatsapp></b-icon-whatsapp> Wahyudin [08156441864]</a>
              <a target="_blank" href="https://api.whatsapp.com/send?phone=6281229997730&amp;text=NPSN:20532211"><b-icon-whatsapp></b-icon-whatsapp> Ahmad Aripin [081229997730]</a>
              <a target="_blank" href="https://api.whatsapp.com/send?phone=6282113057512&amp;text=NPSN:20532211"><b-icon-whatsapp></b-icon-whatsapp> Iman [082113057512]</a>
              <a target="_blank" href="https://api.whatsapp.com/send?phone=6282174508706&amp;text=NPSN:20532211"><b-icon-whatsapp></b-icon-whatsapp> Ikhsan [082174508706]</a>
              <a target="_blank" href="https://api.whatsapp.com/send?phone=6282134924288&amp;text=NPSN:20532211"><b-icon-whatsapp></b-icon-whatsapp> Toni [082134924288]</a>
              <a target="_blank" href="https://api.whatsapp.com/send?phone=6285624669298&amp;text=NPSN:20532211"><b-icon-whatsapp></b-icon-whatsapp> Deetha [085624669298]</a>
            </div>
          </b-card>
        </b-col>
        <b-col sm="6">
          <b-card class="shadow-none py-1 faq-contact-card">
            <b-avatar size="42" rounded variant="light-primary" class="mb-2">
              <feather-icon icon="MailIcon" size="18" />
            </b-avatar>
            <h4>eraporsmk@gmail.com</h4>
            <span class="text-body">Kritik dan saran silahkan kirim ke email ini.</span>
          </b-card>
        </b-col>
      </b-row>
    </section>
    <!--/ contact us -->
  </div>
</template>

<script>
import {
  BCard,
  BCardBody,
  BForm,
  BInputGroup,
  BFormInput,
  BCardText,
  BInputGroupPrepend,
  BTabs,
  BTab,
  BImg,
  BRow,
  BCol,
  BAvatar,
  BIconWhatsapp
} from 'bootstrap-vue'
import FaqQuestionAnswer from './FaqQuestionAnswer.vue'

export default {
  components: {
    BForm,
    BCard,
    BRow,
    BCol,
    BAvatar,
    BCardBody,
    BInputGroup,
    BFormInput,
    BCardText,
    BInputGroupPrepend,
    BTabs,
    BTab,
    BImg,
    FaqQuestionAnswer,
    BIconWhatsapp
  },
  data() {
    return {
      faqSearchQuery: '',
      faqData: {},
    }
  },
  watch: {
    faqSearchQuery: {
      immediate: true,
      handler() {
        this.fetchData()
      },
    },
  },
  methods: {
    fetchData() {
      this.$http.get('/dashboard/faq', { params: { q: this.faqSearchQuery } }).then(res => {
        this.$ability.update([
          { 'action': 'manage' },
          { 'subject': 'all' }
        ])
        this.faqData = res.data
      })
    },
  },
}
</script>

<style lang="scss">
@import '~@resources/scss/vue/pages/page-faq.scss';
</style>
