import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/Inicio'
import ElHospital from '@/components/ElHospital'
import Servicios from '@/components/Servicios'
import Cita from '@/components/Cita'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
        path: '/elhospital',
        name: 'ElHospital',
        component: ElHospital
    },
    {
        path: '/servicios',
        name: 'Servicios',
        component: Servicios
    },
    {
        path: '/cita',
        name: 'Cita',
        component: Cita
    }
  ]
})
