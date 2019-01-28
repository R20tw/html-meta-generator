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
              tip: "basic.title.tip",
              example: "basic.title.example",
              value: ""
            },
            {
              title: "basic.description.title",
              code: '<meta name="description" content="{{value}}"/>',
              tip: "basic.description.tip",
              example: "basic.description.example",
              value: ""
            },
            {
              title: "basic.keywords.title",
              code: '<meta name="keywords" content="{{value}}"/>',
              tip: "basic.keywords.tip",
              example: "basic.keywords.example",
              value: ""
            },
            {
              title: "basic.subject.title",
              code: '<meta name="subject" content="{{value}}"/>',
              tip: "basic.subject.tip",
              example: "basic.subject.example",
              value: ""
            },
            {
              title: "basic.copyright.title",
              code: '<meta name="copyright" content="{{value}}"/>',
              tip: "basic.copyright.tip",
              example: "basic.copyright.example",
              value: ""
            },
            {
              title: "basic.language.title",
              code: '<meta name="language" content="{{value}}"/>',
              tip: "basic.language.tip",
              example: "basic.language.example",
              value: ""
            },
            {
              title: "basic.topic.title",
              code: '<meta name="topic" content="{{value}}"/>',
              tip: "basic.topic.tip",
              example: "basic.topic.example",
              value: ""
            },
            {
              title: "basic.summary.title",
              code: '<meta name="summary" content="{{value}}"/>',
              tip: "basic.summary.tip",
              example: "basic.summary.example",
              value: ""
            },
            {
              title: "basic.author.title",
              code: '<meta name="author" content="{{value}}"/>',
              tip: "basic.author.tip",
              example: "basic.author.example",
              value: ""
            },
            {
              title: "basic.designer.title",
              code: '<meta name="designer" content="{{value}}"/>',
              tip: "basic.designer.tip",
              example: "basic.designer.example",
              value: ""
            },
            {
              title: "basic.copyright.title",
              code: '<meta name="copyright" content="{{value}}"/>',
              tip: "basic.copyright.tip",
              example: "basic.copyright.example",
              value: ""
            },
            {
              title: "basic.owner.title",
              code: '<meta name="owner" content="{{value}}"/>',
              tip: "basic.owner.tip",
              example: "basic.owner.example",
              value: ""
            },
            {
              title: "basic.category.title",
              code: '<meta name="category" content="{{value}}"/>',
              tip: "basic.category.tip",
              example: "basic.category.example",
              value: ""
            },
            {
              title: "basic.coverage.title",
              code: '<meta name="coverage" content="{{value}}"/>',
              tip: "basic.coverage.tip",
              example: "basic.coverage.example",
              value: ""
            },
            {
              title: "basic.distribution.title",
              code: '<meta name="distribution" content="{{value}}"/>',
              tip: "basic.distribution.tip",
              example: "basic.distribution.example",
              value: ""
            }
          ]
        },
        {
          title: "ogBasic.cardTitle",
          subtitle: "ogBasic.cardSubtitle",
          comment: "ogBasic.cardComment",
          fields: [
            {
              title: "ogBasic.title.title",
              code: '<meta name="og:title" content="{{value}}"/>',
              tip: "ogBasic.title.tip",
              example: "ogBasic.title.example",
              value: ""
            },
            {
              title: "ogBasic.type.title",
              code: '<meta name="og:type" content="{{value}}"/>',
              tip: "ogBasic.type.tip",
              example: "ogBasic.type.example",
              value: ""
            },
            {
              title: "ogBasic.url.title",
              code: '<meta name="og:url" content="{{value}}"/>',
              tip: "ogBasic.url.tip",
              example: "ogBasic.url.example",
              value: ""
            },
            {
              title: "ogBasic.image.title",
              code: '<meta name="og:image" content="{{value}}"/>',
              tip: "ogBasic.image.tip",
              example: "ogBasic.image.example",
              value: ""
            },
            {
              title: "ogBasic.site_name.title",
              code: '<meta name="og:site_name" content="{{value}}"/>',
              tip: "ogBasic.site_name.tip",
              example: "ogBasic.site_name.example",
              value: ""
            },
            {
              title: "ogBasic.site_namesite_name.title",
              code: '<meta name="og:description" content="{{value}}"/>',
              tip: "ogBasic.description.tip",
              example: "ogBasic.description.example",
              value: ""
            }
          ]
        },
        {
          title: "ogContact.cardTitle",
          subtitle: "ogContact.cardSubtitle",
          comment: "ogContact.cardComment",
          fields: [
            {
              title: "ogContact.email.title",
              code: '<meta name="og:email" content="{{value}}"/>',
              tip: "ogContact.email.tip",
              example: "ogContact.email.example",
              value: ""
            },
            {
              title: "ogContact.phone_number.title",
              code: '<meta name="og:phone_number" content="{{value}}"/>',
              tip: "ogContact.phone_number.tip",
              example: "ogContact.phone_number.example",
              value: ""
            },
            {
              title: "ogContact.fax_number.title",
              code: '<meta name="og:fax_number" content="{{value}}"/>',
              tip: "ogContact.fax_number.tip",
              example: "ogContact.fax_number.example",
              value: ""
            },
            {
              title: "ogContact.latitude.title",
              code: '<meta name="og:latitude" content="{{value}}"/>',
              tip: "ogContact.latitude.tip",
              example: "ogContact.latitude.example",
              value: ""
            },
            {
              title: "ogContact.longitude.title",
              code: '<meta name="og:longitude" content="{{value}}"/>',
              tip: "ogContact.longitude.tip",
              example: "ogContact.longitude.example",
              value: ""
            },
            {
              title: "ogContact.streetAddress.title",
              code: '<meta name="og:street-address" content="{{value}}"/>',
              tip: "ogContact.streetAddress.tip",
              example: "ogContact.streetAddress.example",
              value: ""
            },
            {
              title: "ogContact.locality.title",
              code: '<meta name="og:locality" content="{{value}}"/>',
              tip: "ogContact.locality.tip",
              example: "ogContact.locality.example",
              value: ""
            },
            {
              title: "ogContact.region.title",
              code: '<meta name="og:region" content="{{value}}"/>',
              tip: "ogContact.region.tip",
              example: "ogContact.region.example",
              value: ""
            },
            {
              title: "ogContact.postalCode.title",
              code: '<meta name="og:postal-code" content="{{value}}"/>',
              tip: "ogContact.postalCode.tip",
              example: "ogContact.postalCode.example",
              value: ""
            },
            {
              title: "ogContact.countryName.title",
              code: '<meta name="og:country-name" content="{{value}}"/>',
              tip: "ogContact.countryName.tip",
              example: "oogContactg.countryName.example",
              value: ""
            }
          ]
        },
        {
          title: "ogVideo.cardTitle",
          subtitle: "ogVideo.cardSubtitle",
          comment: "ogVideo.cardComment",
          fields: [
            {
              title: "ogVideo.video.title",
              code: '<meta name="og:video" content="{{value}}"/>',
              tip: "ogVideo.video.tip",
              example: "ogVideo.video.example",
              value: ""
            },
            {
              title: "ogVideo.videoHeight.title",
              code: '<meta name="og:video:height" content="{{value}}"/>',
              tip: "ogVideo.videoHeight.tip",
              example: "ogVideo.videoHeight.example",
              value: ""
            },
            {
              title: "ogVideo.videoWidth.title",
              code: '<meta name="og:video:width" content="{{value}}"/>',
              tip: "ogVideo.videoWidth.tip",
              example: "ogVideo.videoWidth.example",
              value: ""
            },
            {
              title: "ogVideo.videoType.title",
              code: '<meta name="og:video:type" content="{{value}}"/>',
              tip: "ogVideo.videoType.tip",
              example: "ogVideo.videoType.example",
              value: ""
            }]},
        {
          title: "ogAudio.cardTitle",
          subtitle: "ogAudio.cardSubtitle",
          comment: "ogVideo.cardComment",
          fields: [
            {
              title: "ogAudio.audio.title",
              code: '<meta name="og:audio" content="{{value}}"/>',
              tip: "ogAudio.audio.tip",
              example: "ogAudio.audio.example",
              value: ""
            },
            {
              title: "ogAudio.audioTitle.title",
              code: '<meta name="og:audio:title" content="{{value}}"/>',
              tip: "ogAudio.audioTitle.tip",
              example: "ogAudio.audioTitle.example",
              value: ""
            },
            {
              title: "ogAudio.autdioArtist.title",
              code: '<meta name="og:audio:artist" content="{{value}}"/>',
              tip: "ogAudio.autdioArtist.tip",
              example: "ogAudio.autdioArtist.example",
              value: ""
            },
            {
              title: "ogAudio.audioAlbum.title",
              code: '<meta name="og:audio:artist" content="{{value}}"/>',
              tip: "ogAudio.audioAlbum.tip",
              example: "ogAudio.audioAlbum.example",
              value: ""
            },
            {
              title: "ogAudio.audioType.title",
              code: '<meta name="og:audio:type" content="{{value}}"/>',
              tip: "ogAudio.audioType.tip",
              example: "ogAudio.audioType.example",
              value: ""
            }
          ]
        },
        {
          title: "twitter.cardTitle",
          subtitle: "twitter.cardSubtitle",
          comment: "twitter.cardComment",
          fields: [
            {
              title: "twitter.card.title",
              code: '<meta name="twitter:card" content="{{value}}" />',
              tip: "twitter.card.tip",
              example: "twitter.card.example",
              value: ""
            },
            {
              title: "twitter.site.title",
              code: '<meta name="twitter:site" content="{{value}}" />',
              tip: "twitter.site.tip",
              example: "twitter.site.example",
              value: ""
            },
            {
              title: "twitter.creator.title",
              code: '<meta name="twitter:creator" content="{{value}}" />',
              tip: "twitter.creator.tip",
              example: "twitter.creator.example",
              value: ""
            }
          ]
        },
        {
          title: "other.cardTitle",
          subtitle: "other.cardSubtitle",
          comment: "other.cardComment",
          fields: [
            {
              title: "og.facebookPageID.title",
              code: '<meta name="fb:page_id" content="{{value}}" />',
              tip: "og.facebookPageID.tip",
              example: "og.facebookPageID.example",
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
