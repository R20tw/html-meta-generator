<template>
  <div class="mdui-textfield">
    <label class="mdui-textfield-label">{{ $ml.get(title) }}</label>
    <input
      class="mdui-textfield-input"
      v-bind:placeholder="$ml.get(example)"
      v-on:input="updateValue($event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: "Field",
  props: {
    value: String,
    title: String,
    example: String
  },
  methods: {
    updateValue(value) {
      this.$emit("valueChanged", this.title, value );
    }
  }
};
</script>
