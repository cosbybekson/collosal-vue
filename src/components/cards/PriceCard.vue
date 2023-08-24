<template>
  <div class="col-4 ml-1">
    <div :class="['start-card', cardClass]">
      <div class="row">
        <div class="col mt-5">
          <h3 class="start-title">{{ title }}</h3>
        </div>
        <div class="col mt-5">
          <h5 class="start-text">Starting from</h5>
          <h2 class="price">{{ price }}</h2>
        </div>
      </div>
      <hr class="pricing-hr" />
      <ul class="pricing-details">
        <li v-for="item in detailsList" :key="item">{{ item }}</li>
      </ul>
      <button class="btn" :class="buttonClass">Details</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    price: String,
    details: String,
    cardClass: String,
    buttonClass: String,
  },
  computed: {
    detailsList() {
      return this.details.split('<br />');
    }
  }
};
</script>

<style scoped>
.bg-deep-blue {
  background-color: #3f2379;
}
.dp-color {
  color: #3f2379;
}
.bg-blue {
  background-color: #233679;
}
.blue-color {
  color: #233679;
}
.bg-pink {
  background-color: #792366;
}
.color-pink {
  color: #792366;
}
.start-card {
  width: 328px;
  height: 450px;
  flex-shrink: 0;
  border-radius: 10px;
}
.start-title {
  color: #fff;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.start-text {
  color: var(--muted, rgba(255, 255, 255, 0.6));
  text-align: center;
  font-family: Noto Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.price {
  color: #fff;
  font-family: Noto Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.pricing-hr {
  width: 234px;
  height: 1px;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.05);
}
.pricing-details {
  color: #fff;
  text-align: center;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  list-style: none;
}
.btn {
  display: flex;
  padding: 15px 55px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 3px;
  background: #fff;
  margin-left: 80px;
  margin-top: 3rem;
}
</style>
