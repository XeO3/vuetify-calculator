<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span>Vuetify</span>
        <span class="font-weight-light">-Calculator-</span>
        <span>Demo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat icon href="https://github.com/XeO3/vuetify-calculator" target="_blank">
        <v-icon>mdi-github-circle</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <v-card :dark="input1_dark" :light="!input1_dark">
          <v-toolbar flat>
            <v-toolbar-title>v-text-field</v-toolbar-title> 
            <v-spacer></v-spacer>
            <v-btn icon @click="input1_dark = !input1_dark">
              <v-icon>mdi-invert-colors</v-icon>
            </v-btn>
            <v-btn icon @click="input1_code = !input1_code">
              <v-icon>mdi-code-tags</v-icon>
            </v-btn>
          </v-toolbar>
          <v-expand-transition>
            <div v-show="input1_code"></div>
          </v-expand-transition>
          <v-card-text>
            <v-text-field v-model="input1" label="Result" type="number" required reverse clearable>
              <template v-slot:append-outer>
                <Calculator flat icon v-model="input1">
                  <v-icon>mdi-calculator</v-icon>
                </Calculator>
              </template>
            </v-text-field>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-content>
  </v-app>
</template>

<script>
import Calculator from "./components/Calculator.vue";

export default {
  name: "App",
  components: {
    Calculator
  },
  data() {
    return {
      input1: "",
      input1_code: false,
      input1_dark: false
    };
  }
};
</script>
