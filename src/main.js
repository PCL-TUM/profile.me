// main.js
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import AosVue from "aos-vue";

const app = createApp(App)

app.use(VueSweetalert2);
app.use(AosVue);

app.mount('#app');