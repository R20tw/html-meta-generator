<template>
  <div>
    <div class="mudi-row">
      <div class="mdui-col-xs-6" v-for="fieldsData in data" :key="fieldsData.title">
        <FieldsCard v-bind:fieldsData="fieldsData" v-on:valueChanged="updateValue"></FieldsCard>
      </div>
    </div>
    <div class="mudi-row">
      <div class="mdui-col-xs-12">
        <Result v-bind:fieldsData="data"></Result>
      </div>
    </div>
  </div>
</template>

<script>
import FieldsCard from "./FieldsCard.vue";
import Result from "./Result.vue";
import "./ml.js";

export default {
  name: "HTMLMetadataGenerator",
  components: {
    FieldsCard,
    Result
  },
  data() {
    var tmp = {};
    if (this.HMsData == undefined) {
      tmp = [
        {
          title: "basic.cardTitle",
          subtitle: "basic.cardSubtitle",
          comment: "basic.cardComment",
          fields: [
            {
              title: "basic.title.title",
              code: "<title>{{value}}</title>",
              example: "basic.title.example",
              value: ""
            },
            {
              title: "basic.description.title",
              code: "<title>{{value}}</title>",
              example: "basic.description.example",
              value: ""
            }
          ]
        }
      ];
    } else {
      tmp = Object.assign(this.HMsData);
    }
    return {
      data: Object.assign(tmp)
    };
  },
  methods: {
    updateValue(key, value) {
      this.data.forEach(el => {
        if (el.title == key) {
          el = value;
        }
      });
    }
  },
  props: {
    HMsData: Object
  }
};
</script>
