import VuetifyCalculator from "./Calculator.vue";

const VuetifyCalculatorPlugin = {
  install(Vue: any) {
    Vue.component("v-calc", VuetifyCalculator);
  },
};

// Install by default if using the script tag
if (typeof window !== "undefined" && (window as any).Vue) {
  (window as any).Vue.use(VuetifyCalculatorPlugin);
}

export default VuetifyCalculatorPlugin;
export { VuetifyCalculator };
