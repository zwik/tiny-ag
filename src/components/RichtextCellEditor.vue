
<template>
  <editor
    v-if="!isLoading"
    v-model="value"
    :init="editorConfig"
  />
</template>

<script>
import Editor, { contentUiCss, contentCss } from '@/plugins/TinyMCE.js'

export default {
  name: 'RichtextCellEditor',
  components: { Editor },
  data() {
    return {
      editorConfig: {
        content_style: contentUiCss.toString() + contentCss.toString(),
        content_css: false,
        skin: false,
        paste_data_images: true, // When pasting images, these are saved as a base64 string within the content
        height: 400,
        menubar: false,
        branding: false, // Disables the TinyMCE branding in the editor
        plugins: [
          'advlist anchor autolink charmap code fullscreen',
          'insertdatetime image link lists media preview',
          'searchreplace table visualblocks wordcount',
        ],
        toolbar:
          `undo redo | bold italic underline |
           fontselect fontsizeselect formatselect |
           alignleft aligncenter alignright alignjustify |
           bullist numlist | image media link | table | code`,
      },
      value: null,
      isLoading: true,
    }
  },
  created() {
    this.value = this.params.value
  },
  mounted() {
    this.isLoading = false

    // We need to set focus on an editgrid on a non editor page
    // in order to not automatically close the rich text editor.
    setTimeout(() => {
      window.tinymce.activeEditor.iframeElement.focus()
    })
  },
  methods: {
    getValue() {
      return this.value === '' ? null : this.value
    },
    // AG Grid calls this method to open the editor in a popup: https://www.ag-grid.com/vue-data-grid/component-cell-editor/#configure-popup
    isPopup() {
      return true
    },
  },
}
</script>
