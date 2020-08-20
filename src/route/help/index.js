export default [{
  path: '/help',
  name: 'help',
  component: () => import('@/views/help/Help.vue'),
  meta: { needntLogin: true },
  children: [{
    path: '/help/helpC',
    name: 'helpC',
    component: () => import('@/views/help/HelpC.vue'),
    meta: { needntLogin: true }
  }]
}]
