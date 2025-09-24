import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from'primevue/config';
import Material from '@primeuix/themes/material';
import 'primeicons/primeicons.css'
import {Avatar, Button, Card, Drawer, Image, Menu, Menubar, SelectButton, Toolbar, Tooltip} from "primevue";

createApp(App)
    .use(PrimeVue, { ripple: true, theme: { preset: Material }})
    .component('pv-button',Button)
    .component('pv-card', Card)
    .component('pv-toolbar', Toolbar)
    .directive('tooltip', Tooltip)
    .mount('#app')