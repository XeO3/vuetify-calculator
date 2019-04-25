<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">Calculator</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <Calculator/>
      <Calculator>
        <v-btn>OK</v-btn>
      </Calculator>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Calculator from "@/components/Calculator.vue";

@Component({
  components: {
    Calculator,
  },
})
export default class App extends Vue {}
</script>
