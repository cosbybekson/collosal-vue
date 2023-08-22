<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <div class="navbar-brand d-flex">
          <i class="bi bi-journals text-white"></i>
          <h3 class="text-white">collosal.</h3>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active text-white" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">How We Work</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link text-white" href="#">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">About</a>
            </li>
          </ul>
        </div>
        <form class="d-flex">
          <base-button-sec class="btn text-white" type="button">Contact</base-button-sec>
        </form>
      </div>
    </nav>
  </div>
</template>

<script></script>

<style scoped>
.navbar-nav .nav-link {
  margin-right: 25px;
}
/* button {
  display: inline-flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 3px;
  background: var(--button-light, rgba(255, 255, 255, 0.1));
  box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.1);
} */
</style>
