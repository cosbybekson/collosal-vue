<template>
  <div>
    <section class="hero-section mt-5">
      <div class="container p-5">
        <base-badge badge="CLIENT-DEVELOPMENT DRIVEN" />
        <base-title
          title="We Design. We Develop. We Ship.
          In The Same Day." text-position="center"
        />
        <p class="hero-content mt-3">
          We are committed to not making clients wait. We will deliver the work
          <br />
          as quickly as possible. Even on the same day. Even so, we do not
          <br />
          reduce the quality of our work.
        </p>
        <div class="hero-btn mt-4">
          <base-button-primary>Send Quote</base-button-primary>
          <base-button-sec>Learn More</base-button-sec>
        </div>
        <div class="row mt-5">
          <hero-card
            icon="brush"
            title="Design"
            text=" The project interface will be designed first, our favorite tool is
            Figma."
          >
          </hero-card>
          <hero-card
            icon="code"
            title="Develop"
            text="Transform design and write business logic here. Choose the
            technology you want."
          >
          </hero-card>
          <hero-card
            icon="box"
            title="Ship"
            text="  After the work is complete, we will send the project and all its
            assets to you."
          >
          </hero-card>
        </div>
        <hr class="mt-5" />
        <div class="row">
          <div class="col">
            <img src="@/assets/github.png" alt="" />
          </div>
          <div class="col">
            <img src="@/assets/forbes.png" alt="" />
          </div>
          <div class="col">
            <img src="@/assets/google.png" alt="" />
          </div>
          <div class="col">
            <img src="@/assets/microsoft.png" alt="" />
          </div>
          <div class="col">
            <img src="@/assets/facebook.png" alt="" />
          </div>
        </div>
        <hr />
      </div>
    </section>
    <section class="work-section">
      <div class="container p-5">
        <div class="row">
          <div class="col">
            <img src="@/assets/work.png" alt="" />
          </div>
          <div class="col mt-3">
            <base-badge badge="HOW WE WORK?" text-position="start" />
            <base-title
              title="Everything is well planned, well designed and developed
              wholeheartedly"
              text-position="start"
            />
            <base-content
              content=" Careful planning makes us confident, developed with best practices
              so that the project can be maintained. We always test projects
              before they are shipped." text-position="start"
            />
          </div>
        </div>
        <div class="row">
          <div class="col text-start mt-3">
            <base-badge badge="OUR TEAM" text-position="start" />
            <base-title
              title="We're a team of designers, engineers and analysts"
              text-position="start"
            />
            <base-content
              content=" Our team consists of many creative people. We are committed to
              maintaining quality work as well as speed. These creative people
              work together to create maximum work results."
              text-position="start"
            />
            <base-button-sec>See Our Teams</base-button-sec>
          </div>
          <div class="col">
            <img src="@/assets/team.png" alt="" />
          </div>
        </div>
        <hr class="mt-5" />
      </div>
    </section>
    <section class="project-section">
      <div class="container">
        <base-badge badge="PROJECTS" />
        <base-title
          title="   We have completed many
          amazing projects that you will
          not believe"
        />
        <div class="row">
          <div class="col mt-5">
            <project-card
              imageSrc="image.jpg"
              title="The Mobile App Landing Page"
              content="A landing page for the mobile app"
            />
            <base-button>Details</base-button>
          </div>
          <div class="col mt-5">
            <project-card
              imageSrc="image1.jpg"
              title="The Desktop App Landing Page"
              content="A landing page for the desktop app"
            />
            <base-button>Details</base-button>
          </div>
        </div>
      </div>
    </section>
    <section class="start-section p-5 mt-5">
      <div class="container start">
        <div class="start-body p-5">
          <base-badge badge="GET STARTED" />
          <base-title
            title="   What do you need? Choose a
            service that can help you"
          />
        </div>
        <div class="row">
          <price-card
            title="UI Design"
            price="1200$"
            details="10 design pages<br />Well-documented<br />4 revisions<br />$100/additional page"
            cardClass="bg-deep-blue"
            buttonClass="dp-color"
          />

          <price-card
            title="Development"
            price="5000$"
            details="Web & Mobile<br />Well-documented<br />8 revisions<br />$1000/additional feature"
            cardClass="bg-blue"
            buttonClass="blue-color"
          />

          <price-card
            title="Maintenance"
            price="3000$"
            details="Daily backup <br />3 hours of maintenance<br />Including fixing<br />$50/additional hour"
            cardClass="bg-pink"
            buttonClass="color-pink"
          />
        </div>
      </div>
    </section>
    <section class="testimonial">
      <div class="container">
        <div class="start-body p-5">
          <base-badge badge="TESTIMONIAL" />
          <base-title
            title=" What do our clients say that we 
            never let down?" :padding="5"
          />
        </div>
        <div class="row">
          <testimonial-card
            imageSrc="avatar.png"
            name="Courtney Henry"
            company="Biffco Enterprises Ltd."
            content="Very easy to use. I made back the purchase price in just 48 hours! It's great. It's is both attractive and highly adaptable."
          />
          <testimonial-card
            imageSrc="avatar2.png"
            name="Esther Howard"
            company="Abstergo Ltd."
            content="Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business."
          />
          <testimonial-card
            imageSrc="avatar1.png"
            name="Ronald Richards"
            company="Barone LLC."
            content="I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking."
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeroCard from "@/components/cards/HeroCard.vue";
import PriceCard from "@/components/cards/PriceCard.vue";
import TestimonialCard from "@/components/cards/TestimonialCard.vue";
export default {
  components: { HeroCard, PriceCard, TestimonialCard },
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
.work-badge {
  color: var(--green, #16fcd2);
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 1.6px;
}
.work-title {
  color: #fff;
  font-family: Noto Sans;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
}
.work-content {
  color: var(--muted, rgba(255, 255, 255, 0.6));
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
}
.project-badge {
  color: var(--green, #16fcd2);
  text-align: center;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 1.6px;
}
.project-title {
  color: #fff;
  text-align: center;
  font-family: Noto Sans;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
}
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
.start {
  width: 1308px;
  height: 911px;
  flex-shrink: 0;
  border-radius: 30px;
  background: var(--highlight, #221048);
}
/*  */
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
/* .testimonial-title {
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
} */
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
