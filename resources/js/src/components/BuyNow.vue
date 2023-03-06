<template>
  <div class="buy-now">
    <b-collapse id="collapse-1">
      <b-card bg-variant="secondary" text-variant="white" header="Pusat Bantuan" style="width:500px; overflow:auto">
        <b-form @submit="onSubmit">
          <div v-if=user>
            <b-card text-variant="dark">
              <!--ul class="list-unstyled">
                <li v-for="(item, index) in items">
                  <font-awesome-icon icon="fa-solid fa-user" /> {{ item.pesan }}
                </li>
              </ul-->
              <ul class="list-unstyled">
                <b-media tag="li" v-for="item in items" :key="item.pesan_id">
                  <template #aside>
                    <font-awesome-icon icon="fa-solid fa-user" />
                  </template>
                  <h5 class="mt-0">{{ item.user.nama }}</h5>
                  <p class="mb-0">{{ item.pesan }}</p>
                </b-media>
              </ul>
            </b-card>
            <b-input-group class="mt-1">
                <b-form-input placeholder="Klik enter untuk mengirim pesan..." v-model="form.pesan"></b-form-input>
            </b-input-group>
          </div>
          <div v-else>
            <b-input-group class="mt-1">
              <b-form-input id="email" v-model="form.email" type="email" placeholder="Email aktif" required></b-form-input>
            </b-input-group>
            <b-input-group class="mt-1">
              <b-form-input id="nama" v-model="form.nama" type="text" placeholder="Nama Lengkap" required></b-form-input>
            </b-input-group>
            <b-input-group class="mt-1">
              <b-form-input id="npsn" v-model="form.npsn" type="text" placeholder="NPSN" required></b-form-input>
            </b-input-group>
            <b-input-group class="mt-1">
              <b-form-input id="no_hp" v-model="form.no_hp" type="text" placeholder="Nomor Whatsapp" required></b-form-input>
            </b-input-group>
            <b-button type="submit" variant="danger" class="mt-1">Kirim</b-button>
          </div>
        </b-form>
      </b-card>
    </b-collapse>
    <b-button v-b-toggle.collapse-1 v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="danger">
      Pusat Bantuan
    </b-button>
  </div>
</template>

<script>
import { BButton, BCollapse, BCard, VBToggle, BInputGroup, BFormInput, BInputGroupText, BForm, BFormGroup, BMedia } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  directives: {
    'b-toggle': VBToggle,
    Ripple,
  },
  components: {
    BButton,
    BCollapse,
    BCard,
    BInputGroup,
    BFormInput,
    BInputGroupText,
    BForm,
    BFormGroup,
    BMedia
  },
  data() { 
    return {
      items: [],
      form: {
        pesan: '',
        email: '',
        nama: '',
        npsn: '',
        no_hp: '',
        user_id: null,
      },
      user: null,
    } 
  },
  created(){
    this.user = this.getUser()
    //setInterval(this.getChat(), 1000);
    window.setInterval(() => {
      this.getChat(); // call any function or end point
    }, 3000); // interval set to one sec. 
  },
  methods: {
    getUser(){
      return JSON.parse(localStorage.getItem('userChat'))
      //localStorage.setItem('userChat', JSON.stringify(userChat))
    },
    getChat(){
      //localStorage.removeItem('userChat')
      let user = this.getUser()
      if(user){
        this.form.user_id = user.user_id
        this.$http.post('/list-pesan', {
          user_id : user.user_id
        }).then(response => {
          let data = response.data
          this.items = data.pesan
        });
      }
    },
    onSubmit(event) {
      event.preventDefault()
      this.$http.post('/pesan', this.form).then(response => {
        let data = response.data
        if(data.success){
          if(data.sekolah){
            localStorage.setItem('userChat', JSON.stringify(data.user))
            this.user = this.getUser()
            this.getChat()
          } else {
            this.form.pesan = ''
          }
        } else {
          this.$swal({
            icon: data.icon,
            title: data.title,
            text: data.text,
            customClass: {
              confirmButton: 'btn btn-success',
            },
          })
        }
      });
      //alert(JSON.stringify(this.form))
    },
  },
}
</script>

<style lang="scss">
@import '~@resources/scss/vue/libs/vue-sweetalert.scss';
</style>
