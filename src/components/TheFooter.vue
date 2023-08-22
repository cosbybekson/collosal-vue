<template>
  <div>
    <div class="container p-5">
      <hr />
      <div class="row">
        <div class="col">
          <h1 class="footer-title">
            We've prepared everything, it's time for you to tell the problem
          </h1>
        </div>
        <div class="col mt-3">
          <base-button-primary>Send Quote</base-button-primary>
          <base-button-sec>Ask Me</base-button-sec>
        </div>
      </div>
      <hr />
      <div class="footer-body mt-5">
        <div class="row">
          <div class="col">
            <div class="navbar-brand d-flex mt-5">
              <i class="bi bi-collection text-white mt-2"></i>
              <h3 class="text-white">collosal.</h3>
            </div>
            <p class="footer-content text-start mt-4">
              Copyright © 2021 <br />
              Design By Collosal LLC
            </p>
          </div>
          <div class="col text-start">
            <h1 class="footer-text mt-5">SERVICES</h1>
            <div class="footer-content mt-5">
              <p>Web Development</p>
              <p>App Development</p>
              <p>UI Design</p>
              <p>Consultation</p>
              <p>Maintenance</p>
            </div>
          </div>
          <div class="col text-start">
            <h1 class="footer-text mt-5">COMPANY</h1>
            <div class="footer-content mt-5">
              <p>About</p>
              <p>Contract</p>
              <p>Send Quote</p>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Jobs</p>
            </div>
          </div>
          <div class="col text-start">
            <h1 class="footer-text mt-5">RESOURCES</h1>
            <div class="footer-content mt-5">
              <p>Support</p>
              <p>Documentation</p>
              <p>License</p>
              <p>Sitemap</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>

.footer-title {
  color: #fff;
  font-family: Noto Sans;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
}

.footer-text {
  color: #fff;
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.4px;
}
.footer-content {
  color: var(--muted, rgba(255, 255, 255, 0.6));
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  list-style: none;
  cursor: pointer;
}
</style>
