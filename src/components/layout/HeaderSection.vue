<template>
  <div class="hero-section">
    <h2 class="hero-badge text-start mt-3">{{ badge }}</h2>
    <h1 class="hero-title text-start mt-3">{{ title }}</h1>
    <p class="hero-content text-start mt-3">{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    badge: String,
    title: String,
    content: String,
  },
};
</script>

<style scoped>
.hero-badge {
  color: var(--green, #16fcd2);
  text-align: center;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 1.6px;
}
.hero-title {
  color: #fff;
  text-align: center;
  font-family: Noto Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 54px;

}
.hero-content {
  color: var(--muted, rgba(255, 255, 255, 0.6));
  text-align: center;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
}
</style>
