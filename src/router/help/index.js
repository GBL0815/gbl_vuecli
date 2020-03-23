export default [{
  path: '/help',
  name: 'help',
  component: () => import('@/views/help/help.vue'),
  meta: { needntLogin: true }
}]
