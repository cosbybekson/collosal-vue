<template>
    <div>
      <p class="base-content text-start mt-3" :class="computedClasses">{{ content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      content: String,
      textPosition: String,

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
          return "text-center"
      }
    },
  },
  };
  </script>
  
  <style scoped>
  .base-content {
    color: var(--muted, rgba(255, 255, 255, 0.6));
    text-align: center;
    font-family: Noto Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
  }
  </style>