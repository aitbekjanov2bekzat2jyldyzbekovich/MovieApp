import './assets/main.scss'
import layout from './components/layout.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.component('layout', layout)
app.mount('#app')
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCSlIOyiNuwx6XUHdH1PkG5rAOxUp9KrEc",
  authDomain: "auth-muvieapp-5d092.firebaseapp.com",
  projectId: "auth-muvieapp-5d092",
  storageBucket: "auth-muvieapp-5d092.appspot.com",
  messagingSenderId: "133777750148",
  appId: "1:133777750148:web:8ded131bd58b9a84202ad1"
};

import 'swiper/css';

import 'swiper/css/pagination';

import 'swiper/css';

const apps = initializeApp(firebaseConfig);





