import Vue from "vue";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
momentDurationFormatSetup(moment);

export default () => {
  Vue.prototype.$moment = moment;
};
