<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="400">
      <template v-slot:activator="{ on }">
        <v-btn color="red lighten-2" dark v-on="on">Click Me</v-btn>
      </template>

      <v-card class="grey lighten-3">
        <v-card-text style="text-align: right;">
          <div class="subheading" style="min-height:24px;">{{displayFormula}}</div>
          <div class="display-1" style="min-height:48px;">{{displayResult}}</div>
        </v-card-text>
        <v-card-text class="pa-0">
          <v-container grid-list-xs pa-1>
            <v-layout row wrap pa0>
              <v-flex v-for="button in buttons" :key="button.key" xs3>
                <v-btn
                  :class="['calcbutton', button.class]"
                  :color="button.color"
                  @click="InputKey(button.key)"
                  block
                  depressed
                  large
                >
                  <v-icon v-if="button.icon" dark>{{button.icon}}</v-icon>
                  <template v-else>{{button.label}}</template>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn depressed large class="calcbutton" @click="dialog = false">CANCEL</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" depressed large class="calcbutton" @click="commit">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

interface ICalculatorInput {
  current: string;
  operator: string;
  prev: string;
}

@Component
export default class Calculator extends Vue {
  public dialog: boolean = true;
  @Prop({ default: "" })
  public value!: number | string;

  public input: ICalculatorInput = {
    current: "0",
    operator: "",
    prev: "",
  };

  public buttons = [
    { key: "ce", label: "CE", color: "grey lighten-2", class: "" },
    { key: "c", label: "C", color: "grey lighten-2", class: "" },
    {
      key: "back",
      label: "BACK",
      icon: "backspace",
      color: "grey lighten-2",
      class: "",
    },
    { key: "÷", label: "÷", color: "grey lighten-2", class: "" },
    { key: "7", label: "7", color: "", class: "headline" },
    { key: "8", label: "8", color: "", class: "headline" },
    { key: "9", label: "9", color: "", class: "headline" },
    { key: "×", label: "×", color: "grey lighten-2", class: "" },
    { key: "4", label: "4", color: "", class: "headline" },
    { key: "5", label: "5", color: "", class: "headline" },
    { key: "6", label: "6", color: "", class: "headline" },
    { key: "-", label: "-", color: "grey lighten-2", class: "" },
    { key: "1", label: "1", color: "", class: "headline" },
    { key: "2", label: "2", color: "", class: "headline" },
    { key: "3", label: "3", color: "", class: "headline" },
    { key: "+", label: "+", color: "grey lighten-2", class: "" },
    { key: "±", label: "±", color: "grey lighten-2", class: "" },
    { key: "0", label: "0", color: "", class: "headline" },
    { key: ".", label: ".", color: "grey lighten-2", class: "" },
    { key: "=", label: "=", color: "grey lighten-2", class: "" },
  ];

  public get displayResult(): string {
    const hasDot = this.input.current.includes(".");
    const split = this.input.current.split(".");
    const integer = Number(split[0]);
    const minority = split[1];
    // return this.input.current;
    return `${integer.toLocaleString()}${hasDot ? "." + minority : ""}`;
  }

  public get displayFormula(): string {
    return `${this.input.prev} ${this.input.operator}`;
  }

  public InputKey(key: string): void {
    const isNumber = /^\d$/.test(key);
    if (isNumber) {
      if (this.input.current.length >= 12) {
        return;
      }
      if (this.input.current !== "0") {
        this.input.current += key;
      } else {
        this.input.current = key;
      }
      return;
    }

    const isOperator = /^[÷×\-+]$/.test(key);
    if (isOperator) {
      if (this.input.current) {
        this.input.prev = this.Calc(this.input) || this.input.current;
      }
      this.input.operator = key;
      this.input.current = "";
      return;
    }

    switch (key) {
      case "=": {
        if (this.input.operator) {
          const result = this.Calc(this.input) || "";
          this.input.prev = `${this.input.prev} ${this.input.operator} ${
            this.input.current
          } =`;
          this.input.current = result;
          this.input.operator = "";
        }
        return;
      }

      case ".":
        if (!this.input.current.includes(".")) {
          this.input.current += ".";
        }
        return;
      case "±":
        if (this.input.current.includes("-")) {
          this.input.current = this.input.current.replace("-", "");
        } else {
          this.input.current = "-" + this.input.current;
        }
        return;
      case "back":
        this.input.current = this.input.current.substring(
          0,
          this.input.current.length - 1,
        );
        return;
      case "c":
        this.input.current = "0";
        this.input.operator = "";
        this.input.prev = "";
        return;
      case "ce":
        this.input.current = "0";
        return;
    }
  }

  public Calc(input: ICalculatorInput): string | null {
    const a = Number(input.prev);
    const b = Number(input.current);
    switch (input.operator) {
      case "÷":
        {
          const result = a / b;
          const resultString = result.toString();
          if (resultString.split(".")[1].length > 5) {
            return result.toFixed(5);
          }
          return resultString;
        }
        return (a / b).toFixed(5);
      case "×":
        return (a * b).toString();
      case "-":
        return (a - b).toString();
      case "+":
        return (a + b).toString();
    }
    return null;
  }

  public commit(): void {
    this.InputKey("=");
    this.$emit("input", this.input.current);
    this.dialog = false;
  }
}
</script>

<style scoped>
.calcbutton {
  margin: 0;
}
</style>



