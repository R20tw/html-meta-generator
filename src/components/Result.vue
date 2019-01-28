<template>
  <div>
    <div class="mdui-textfield">
      <label class="mdui-textfield-label">Code</label>
      <textarea class="mdui-textfield-input" v-text="textGenerator()"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "Result",
  methods: {
    textGenerator() {
      var tmp = "";
      this.fieldsData.forEach(type => {
        tmp += `<!-- ${this.$ml.get(type.comment)} -->\n`;
        type.fields.forEach(field => {
          if (field.value) {
            tmp += field.code.replace("{{value}}", field.value) + "\n";
          }
        });
        tmp += "\n\n";
      });
      return tmp;
    }
  },
  props: {
    fieldsData: Array
  }
};
</script>
