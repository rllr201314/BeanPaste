import Vue from 'vue'
import Router from 'vue-router'

import Register from '../pages/register'
import SignIn from '../pages/signin'
import Index from '../pages/index'
import Books from '../pages/books'
import Film from '../pages/film'
import Group from '../pages/group'
import Navigation from '../pages/navigation'
import  RadioBroadCast from '../pages/radiobroadcast'
import Index1 from '../components/index1'
import Film1 from '../components/film1'
import Film2 from '../components/cankao/film2'
import GoodFilm from '../components/dianying/goodfilm'
import fenlei from '../components/dianying/fenlei'
import goodbook from '../components/book/goodbook'
import bookss from '../components/book/bookss'
import group1 from '../components/cankao/group1'
import guangbo from '../components/guangbo/guangbo'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
    },
    {
      path: '/film',
      name: 'Film',
      component: Film
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/navigation',
      name: 'Navigation',
      component: Navigation
    },
    {
      path: '/radiobroadcast',
      name: 'RadioBroadCast',
      component: RadioBroadCast
    },
    {
      path: '/index1',
      name: 'Index1',
      component: Index1
    },
    {
      path: '/film1',
      name: 'Film1',
      component: Film1
    },
    {
      path: '/film2',
      name: 'Film2',
      component: Film2
    },
    {
      path:'/goodfilm',
      name:'GoodFilm',
      component: GoodFilm
    },
    {
      path:'/fenlei',
      name:'fenlei',
      component: fenlei
    },
    {
      path:'/goodbook',
      name:'goodbook',
      component: goodbook
    },
    {
      path:'/bookss',
      name:'bookss',
      component: bookss
    },
    {
      path:'/group1',
      name:'group1',
      component: group1
    },
    {
      path:'/guangbo',
      name:'guangbo',
      component: guangbo
    }
  ]
})
