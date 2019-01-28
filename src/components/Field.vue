<template>
  <div class="mdui-textfield">
    <label class="mdui-textfield-label">{{ $ml.get(title) }}</label>
    <input
      class="mdui-textfield-input"
      v-bind:placeholder="$ml.get(example)"
      v-on:input="updateValue($event.target.value)"
    >
    <div class="mdui-textfield-helper">{{ $ml.get(tip) }}</div>
  </div>
</template>

<script>
export default {
  name: "Field",
  props: {
    value: String,
    title: String,
    example: String,
    tip: String
  },
  methods: {
    updateValue(value) {
      this.$emit("valueChanged", this.title, value );
    }
  }
};
</script>
