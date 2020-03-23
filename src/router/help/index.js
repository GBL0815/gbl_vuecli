export default [{
  path: '/help',
  name: 'help',
  component: () => import('@/views/home/help.vue'),
  meta: { needntLogin: true }
}]
