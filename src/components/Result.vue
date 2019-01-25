<template>
    <div>
<div class="mdui-textfield">
  <label class="mdui-textfield-label">Code</label>
  <textarea class="mdui-textfield-input" disabled v-text="textGenerator()"></textarea>
</div>
    </div>
</template>

<script>
import { MLBuilder } from 'vue-multilanguage'

export default {
  name: 'Result',
  computed: {
      textGenerator() {
          var tmp = "";
          this.fieldsData.forEach((type) => {
              tmp += `<!-- ${new MLBuilder(type.comment)} -->`
          })
          return(tmp)
      }
  },
  props: {
      fieldsData : Object
  }
}
</script>
