<template>
  <div>
    <h1 class="base-title mt-3" :class="[computedClasses, pagePadding]">
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    textPosition: String,
    padding: Number,
  },
  computed: {
    computedClasses() {
      switch (this.textPosition) {
        case "center":
          return "text-center";
        case "start":
          return "text-start";
        case "end":
          return "text-end";
        default:
          return "text-center";
      }
    },
    pagePadding() {
      // console.log(typeof );
      switch (this.padding) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          return `px-${this.padding}`;

        default:
          return "px-auto";
      }
    },
    // pagePadding() {
    //   switch (this.padding) {
    //     case 0:
    //     case 1:
    //     case 2:
    //     case 3:
    //     case 4:
    //     case 5:
    //       const generatedClass = `px-${this.padding}`;
    //       console.log(`Generated class: ${generatedClass}`);
    //       return generatedClass;

    //     default:
    //       console.log("Using default class: px-auto");
    //       return "px-auto";
    //   }
    // },
  },
};
</script>

<style scoped>
.base-title {
  color: #fff;
  text-align: center;
  font-family: Noto Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 54px;
}
</style>
