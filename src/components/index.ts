import Vue from "vue";
import VuetifyCalculator from "./Calculator.vue";

const Components: { [key: string]: any } = {
  VuetifyCalculator,
};

Object.keys(Comment).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Comment;
