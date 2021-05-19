export default [{
  path: '/help',
  name: 'help',
  component: (): unknown => import('@/views/help/Help.vue'),
  meta: { needntLogin: true }
}]
