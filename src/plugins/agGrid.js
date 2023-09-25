import Vue from 'vue'
import { AgGridVue } from 'ag-grid-vue'

// Import the default styling of ag-Grid
import 'ag-grid-community/styles/ag-grid.css'
// Import the Balham theme. This renders a dense grid for data-heavy applications
import 'ag-grid-community/styles/ag-theme-balham.css'

// Register the Vue version as a global component
Vue.component('AgGridVue', AgGridVue)
