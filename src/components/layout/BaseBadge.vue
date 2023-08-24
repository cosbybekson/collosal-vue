<template>
  <div>
    <h2 class="base-badge mt-3" :class="computedClasses">{{ badge }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    badge: String,
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
.base-badge {
  color: var(--green, #16fcd2);
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 1.6px;
}
</style>
