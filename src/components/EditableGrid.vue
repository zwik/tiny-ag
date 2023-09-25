<template>
  <ag-grid-vue
    style="width: 800px; height: 500px"
    class="ag-theme-balham flex-grow"
    single-click-edit
    stop-editing-when-cells-lose-focus
    :columnDefs="columnDefs"
    :rowData="rowData"
  >
  </ag-grid-vue>
</template>

<script>
import RichtextCellEditor from './RichtextCellEditor.vue';

export default {
  name: 'EditableGrid',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    richTextEditor: RichtextCellEditor,
  },
  data() {
    return {
      columnDefs: null,
      rowData: null,
    }
  },
  beforeMount() {
    this.columnDefs = [
      { field: "make" },
      { field: "model", cellEditor: 'richTextEditor', editable: true },
      { field: "price" },
    ];

    this.rowData = [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxster", price: 72000 },
    ];
  },
};
</script>