import { createApp } from 'vue';
import App from './App.vue';
import eleElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import router from './router'

createApp(App).use(eleElementPlus).use(router).mount('#app');
