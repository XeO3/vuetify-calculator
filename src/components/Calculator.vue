<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="400">
      <template v-slot:activator="{ on }">
        <v-btn color="red lighten-2" dark v-on="on">Click Me</v-btn>
      </template>

      <v-card class="grey lighten-3">
        <v-card-text style="text-align: right;">
          <div class="subheading">{{displayFormula}}</div>
          <div class="display-2">{{displayResult}}</div>
        </v-card-text>
        <v-card-text class="pa-0">
          <table style="width:100%; table-layout: fixed; border-spacing: 2px;">
            <tr>
              <td>
                <v-btn block depressed large class="calcbutton" color="grey lighten-2">CE</v-btn>
              </td>
              <td>
                <v-btn block depressed large class="calcbutton" color="grey lighten-2">C</v-btn>
              </td>
              <td>
                <v-btn block depressed large class="calcbutton" color="grey lighten-2">BACK</v-btn>
              </td>
              <td>
                <v-btn block depressed large class="calcbutton" color="grey lighten-2">÷</v-btn>
              </td>
            </tr>
            <tr>
              <td>
                <v-btn block depressed large class="calcbutton headline">7</v-btn>
              </td>
              <td>
                <v-btn block depressed large class="calcbutton headline">8</v-btn>
              </td>
              <td>
                <v-btn block depressed large class="calcbutton headline">9</v-btn>
              </td>
              <td>
                <v-btn block depressed large class="calcbutton" color="grey lighten-2">×</v-btn>
              </td>
            </tr>
            <tr>
              <td>
                <v-btn block depressed large class="calcbutton headline">4</v-btn>
              </td>
              <td>
                <v-btn block depressed large class="calcbutton headline">5</v-btn>
              </td>
              <td>
                <v-btn block depressed large class="calcbutton headline">6</v-btn>
              </td>
              <td>
                <v-btn block depressed large class="calcbutton" color="grey lighten-2">-</v-btn>
              </td>
            </tr>
            <tr>
              <td>
                <v-btn block depressed large class="calcbutton headline">1</v-btn>
              </td>
              <td>
                <v-btn block depressed large class="calcbutton headline">2</v-btn>
              </td>
              <td>
                <v-btn block depressed large class="calcbutton headline">3</v-btn>
              </td>
              <td>
                <v-btn block depressed large class="calcbutton" color="grey lighten-2">+</v-btn>
              </td>
            </tr>
            <tr>
              <td>
                <v-btn block depressed large class="calcbutton" color="grey lighten-2">±</v-btn>
              </td>
              <td>
                <v-btn block depressed large class="calcbutton headline">0</v-btn>
              </td>
              <td>
                <v-btn block depressed large class="calcbutton" color="grey lighten-2">.</v-btn>
              </td>
              <td>
                <v-btn block depressed large class="calcbutton" color="grey lighten-2">=</v-btn>
              </td>
            </tr>
          </table>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" depressed large class="calcbutton" @click="dialog = false">I accept</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Calculator extends Vue {
  public dialog: boolean = true;
  @Prop({ default: "" })
  public value!: number | string;

  public get displayResult(): string {
    return "result";
  }

  public get displayFormula(): string {
    return "formula";
  }
}
</script>

<style scoped>
.calcbutton {
  margin: 0;
}
</style>



