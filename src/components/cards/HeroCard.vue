<template>
  <div class="col-4">
    <div class="hero-card p-3">
      <div class="card-icon text-start">
        <i :class="iconClass"></i>
      </div>
      <div class="card-body">
        <h2 class="hero-card-title text-start mt-3">{{ title }}</h2>
        <p class="hero-card-text text-start mt-2">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    text: String,
  },
  computed: {
    iconClass() {
      return `bi bi-${this.icon} text-white`;
    },
  },
};
</script>

<style scoped>
.hero-card {
  width: 328px;
  height: 220px;
  flex-shrink: 0;
  border-radius: 5px;
  background: var(--light, rgba(255, 255, 255, 0.05));
}
.hero-card-title {
  color: #fff;
  font-family: Noto Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.hero-card-text {
  color: var(--muted, rgba(255, 255, 255, 0.6));
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
}
.card-icon {
  display: flex;
  width: 50px;
  height: 50px;
  padding: 13px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.03);
}
</style>
