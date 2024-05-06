import { createApp } from 'vue'
import './style.css'
import {createPinia} from "pinia"
import ToDoList from './components/ToDoList.vue'
const pinia = createPinia();
const app =createApp(ToDoList)
app.use(pinia)
app.mount('#app')
