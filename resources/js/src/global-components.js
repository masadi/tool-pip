import Vue from 'vue'
import FeatherIcon from '@core/components/feather-icon/FeatherIcon.vue'

Vue.component(FeatherIcon.name, FeatherIcon)
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse, faBuildingColumns, faLayerGroup, faCircleDown, faCircleQuestion, faDatabase, faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faHouse, faBuildingColumns, faLayerGroup, faCircleDown, faCircleQuestion, faDatabase, faUser)