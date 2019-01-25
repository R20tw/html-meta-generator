<template>
  <div>
    <div class="mudi-row">
      <div class="mdui-col-xs-6" v-for="fieldsData in data" :key="fieldsData.title">
        <FieldsCard v-bind:fieldsData="fieldsData"></FieldsCard>
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
    if (this.HMsData == undefined) {
      this.HMsData = [
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
    }
    return {
      data: this.HMsData
    };
  },
  props: {
    HMsData: Object
  }
};
</script>
