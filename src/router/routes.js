export default [
    {
        path: '/',
        name: 'layout',
        component: () => import(/* webpackChunkName: "layout" */ '../views/layout.vue')
    }
]