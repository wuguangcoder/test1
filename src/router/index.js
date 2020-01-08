import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import shoppinglist from '@/components/shoppinglist'
import prodetail from '@/components/addtodo'
import detail from '@/components/detail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
   /* {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
    {
      //path: '/detail/:id',
      path: '/detail',
      name: 'detail',
      component: detail
    },
   /* {
      path: '/shop',
      name: 'shop',
      component: shoppinglist
    },
    {
      path: '/detail',
      name: 'detail',
      component: prodetail
    },*/
    /*{path:"*",redirect:"/"

    }*/
  ]
})
