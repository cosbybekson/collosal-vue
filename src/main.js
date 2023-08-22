import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import BaseCard from "./components/cards/BaseCard.vue";
import BaseButtonPrimary from "./components/buttons/BaseButtonPrimary.vue";
import BaseButtonSec from "./components/buttons/BaseButtonSec.vue";
import BaseButton from "./components/buttons/BaseButton.vue";


const app = createApp(App);

app.component("base-card", BaseCard);
app.component("base-button-primary", BaseButtonPrimary);
app.component("base-button-sec", BaseButtonSec);
app.component("base-button", BaseButton);


app.use(bootstrap);
app.mount("#app");
