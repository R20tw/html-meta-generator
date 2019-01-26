<template>
  <div class="mdui-card">
    <div class="mdui-card-primary">
      <div class="mdui-card-primary-title">{{$ml.get(fieldsData.title)}}</div>
      <div class="mdui-card-primary-subtitle">{{$ml.get(fieldsData.subtitle)}}</div>
    </div>
    <div class="mdui-card-content">
      <Field
        v-for="fieldData in fieldsData.fields"
        :key="fieldData.title"
        v-bind:title="fieldData.title"
        v-bind:value="fieldData.value"
        v-bind:example="fieldData.example"
        v-on:valueChanged="updateValue"
      ></Field>
    </div>
    <div class="mdui-card-actions">
      <button class="mdui-btn mdui-ripple">action 1</button>
    </div>
  </div>
</template>

<script>
import Field from "./Field.vue";

export default {
  name: "FieldsCard",
  components: {
    Field
  },
  props: {
    fieldsData: Object
  },
  methods: {
    updateValue(key, value) {
      this.fieldsData.fields.forEach(el => {
        if (el.title == key) {
          el.value = value;
        }
      });
      this.$emit("valueChanged", this.fieldsData.title, this.fieldsData);
    }
  }
};
</script>
