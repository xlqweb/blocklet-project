import { createRouter,createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/blockDetail',
            component:defineAsyncComponent(()=>import("../views/BlockDetail.vue")),
            meta:{
                title:'交易详情'
            }
        }
    ]
});

router.beforeEach((to,from,next)=>{
    if(to.meta.title){
        document.title = `${to.meta.title}`;
    }
    next();
});
export default router;