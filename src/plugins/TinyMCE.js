import 'tinymce/tinymce'
import Editor from '@tinymce/tinymce-vue'

// Theme
import 'tinymce/themes/silver/theme'
import 'tinymce/icons/default'

// Skins
import 'tinymce/skins/ui/oxide/skin.min.css'
// We load these using the webpack raw-loader because we need to pass these to
// the editor config. Therefore we also export these.
import contentUiCss from '!!raw-loader!tinymce/skins/ui/oxide/content.css'
import contentCss from '!!raw-loader!tinymce/skins/content/default/content.css'

// Plugins
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/anchor'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/code'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/image'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/link'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/media'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/print'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/table'
import 'tinymce/plugins/visualblocks'
import 'tinymce/plugins/wordcount'

export default {
  extends: Editor,
  name: 'Editor',
}

export { contentUiCss, contentCss }
