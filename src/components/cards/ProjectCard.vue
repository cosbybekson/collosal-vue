<template>
  <div class="col mt-5">
    <div class="project-img">
      <img class="img-fluid" :src="toImageRes()" alt="" />
    </div>
    <div class="project-body">
      <h2 class="project-body-title mt-4">{{ title }}</h2>
      <p class="project-body-content mt-2">{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: String,
    title: String,
    content: String,
  },
  methods: {
    toImageRes() {
      console.log(this.imageRes);
      return require(`@/assets/${this.imageSrc}`);
    },
  },
};
</script>

<style scoped>
.project-body-title {
  color: #fff;
  text-align: center;
  font-family: Noto Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
}
.project-body-content {
  color: var(--muted, rgba(255, 255, 255, 0.6));
  text-align: center;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
}
</style>
