import ViewCategory  from './layouts/ViewCategory'
import ViewCategories  from './layouts/ViewCategories'
import ViewBook  from './layouts/ViewBook'
import Home  from './layouts/Home.vue'
import About from "./layouts/About";
export  default {
    mode:"history",
    // base:'integration',
    fallback:true,
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/view-book/:bookId',
            name: 'view-book',
            component: ViewBook
        },
        {
            path: '/view-categories/:categoryId',
            name: 'view-category',
            component: ViewCategory
        },
        {
            path: '/view-categories',
            name: 'view-categories',
            component: ViewCategories
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },

    ]

}
