import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import BaseCard from "./components/cards/BaseCard.vue";
import BaseButtonPrimary from "./components/buttons/BaseButtonPrimary.vue";
import BaseButtonSec from "./components/buttons/BaseButtonSec.vue";
import BaseButton from "./components/buttons/BaseButton.vue";
import HeroCard from "./components/cards/HeroCard.vue";
import PriceCard from "./components/cards/PriceCard.vue";
import TestimonialCard from "./components/cards/TestimonialCard.vue";
import HeaderSection from "./components/layout/HeaderSection.vue";
import BaseBadge from "./components/layout/BaseBadge.vue";
import BaseTitle from "./components/layout/BaseTitle.vue";
import ProjectCard from "./components/cards/ProjectCard.vue"
import BaseContent from "./components/layout/BaseContent.vue"

const app = createApp(App);

app.component("base-card", BaseCard);
app.component("base-button-primary", BaseButtonPrimary);
app.component("base-button-sec", BaseButtonSec);
app.component("base-button", BaseButton);
app.component("hero-card", HeroCard);
app.component("price-card", PriceCard);
app.component("testimonial-card", TestimonialCard);
app.component("header-section", HeaderSection);
app.component("base-badge", BaseBadge);
app.component("base-title", BaseTitle);
app.component("project-card", ProjectCard)
app.component("base-content", BaseContent)

app.use(bootstrap);
app.mount("#app");
