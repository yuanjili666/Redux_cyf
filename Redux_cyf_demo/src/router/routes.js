import asyncComponent from '../components/AsyncComponent';
//路由的配置表
export default [
  {
    name: '首页',
    icon: 'home',
    path: '/',
    component: asyncComponent(() => import('../pages/Home')),
  },
  {
    name: '计数器',
    path: '/counter',
    component: asyncComponent(() => import('../pages/Counter')),
  },
]
