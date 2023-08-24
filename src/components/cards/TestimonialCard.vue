<template>
  <div class="col-4 mt-4">
    <div class="testimonial-card">
      <div class="testimonial-img">
        <img class="mt-5" :src="toImageRes()" alt="" />
      </div>
      <div class="testimonial-header">
        <h2 class="testimonial-badge mt-2">{{ name }}</h2>
        <h5 class="testimonial-title mt-2">{{ company }}</h5>
      </div>
      <div class="testimonial-body">
        <p class="testimonial-content mt-4">{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import { imageRes } from "../../utils/functions";
export default {
  props: {
    imageSrc: String,
    name: String,
    company: String,
    content: String,
  },
  methods: {
    toImageRes() {
      console.log(this.imageRes)
      return require(`@/assets/${this.imageSrc}`);
    },
  },
};
</script>

<style scoped>
.testimonial-card {
  width: 328px;
  height: 380px;
  flex-shrink: 0;
  border-radius: 3px;
  background: var(--light, rgba(255, 255, 255, 0.05));
}
.testimonial-badge {
  color: #fff;
  text-align: center;
  font-family: Noto Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.testimonial-title {
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.testimonial-content {
  color: var(--muted, rgba(255, 255, 255, 0.6));
  text-align: center;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
}
</style>
