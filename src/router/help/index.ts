export default [{
  path: '/help',
  name: 'help',
  component: () => import('@/views/help/Help.vue'),
  meta: { needntLogin: true }
}]
