export default [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/dashboard/utama/Index.vue'),
    meta: {
      resource: 'Auth',
      action: 'read',
    }
  },
  {
    path: '/rekapitulasi-wilayah',
    name: 'rekapitulasi-wilayah',
    component: () => import('@/views/dashboard/wilayah/Wilayah.vue'),
    //component: () => import('@/views/dashboard/maps/leaflet/Leaflet.vue'),
    meta: {
      resource: 'Auth',
      action: 'read',
    }
  },
  {
    path: '/provinsi/:kode_wilayah',
    name: 'table-provinsi',
    component: () => import('@/views/dashboard/wilayah/Provinsi.vue'),
    meta: {
      resource: 'Auth',
      action: 'read',
      navActiveLink: 'rekapitulasi-wilayah',
    }
  },
  {
    path: '/kabupaten/:kode_wilayah',
    name: 'sekolah-kabupaten',
    component: () => import('@/views/dashboard/wilayah/Kabupaten.vue'),
    meta: {
      resource: 'Auth',
      action: 'read',
      navActiveLink: 'rekapitulasi-wilayah',
    }
  },
  {
    path: '/rekapitulasi-provinsi/:kode_wilayah/:longitude/:latitude',
    name: 'provinsi',
    component: () => import('@/views/dashboard/wilayah/Provinsi.vue'),
    meta: {
      resource: 'Auth',
      action: 'read',
      navActiveLink: 'rekapitulasi-wilayah',
    }
  },
  {
    path: '/rekapitulasi-kabupaten/:kode_wilayah/:longitude/:latitude',
    name: 'kabupaten',
    component: () => import('@/views/dashboard/wilayah/Kabupaten.vue'),
    meta: {
      resource: 'Auth',
      action: 'read',
      navActiveLink: 'rekapitulasi-wilayah',
    }
  },
  {
    path: '/pusat-unduhan',
    name: 'pusat-unduhan',
    //component: () => import('@/views/pages/profile/Profile.vue'),
    component: () => import('@/views/dashboard/unduhan/Unduhan.vue'),
    meta: {
      resource: 'Auth',
      action: 'read',
    }
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('@/views/dashboard/faq/Faq.vue'),
    meta: {
      resource: 'Auth',
      action: 'read',
    }
  },
  {
    path: '/peta',
    name: 'peta',
    component: () => import('@/views/dashboard/peta/Index.vue'),
    meta: {
      resource: 'Auth',
      action: 'read',
    }
  },
]
