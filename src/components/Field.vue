<template>
  <div class="mdui-textfield">
    <label class="mdui-textfield-label">{{ $ml.get(title) }}</label>
    <input class="mdui-textfield-input" v-model="value" v-bind:placeholder="$ml.get(example)">
  </div>
</template>

<script>
export default {
  name: "Field",
  props: {
    value: String,
    title: String,
    example: String
  }
};
</script>
