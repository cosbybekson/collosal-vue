<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  font: inherit;
  color: white;
  cursor: pointer;
  margin-right: 0.5rem;
  display: inline-flex;
  padding: 15px 55px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 3px;
  background: var(--button-light, rgba(255, 255, 255, 0.1));
  box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.1);
  border: none;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color:rgba(37, 37, 36, 0.1);
  border-color: rgba(37, 37, 36, 0.1);
}

.flat {
  background-color: transparent;
  color: rgba(255, 255, 255, 0.1);
  border: none;
}
</style>
