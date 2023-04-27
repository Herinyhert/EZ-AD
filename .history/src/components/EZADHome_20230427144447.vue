<template>
  <div class="contend">
    <div
      id="carouselExampleInterval"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2000">
          <router-link to="/ez-commerce">
            <h1 class="ez">EZ-Comerce</h1>
            <h3 class="ez">Simple & Automated E-Commerce Site</h3>
            <img
              src="../components/image/ez_commerce.png"
              class="d-block w-50"
              alt="EZ-Commerce"
            />
          </router-link>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <router-link to="/about">
            <h1 class="tv">Digital Signage</h1>
            <h3 class="tv">In-Store Digital Signage Systen</h3>
            <img
              src="../components/image/header-img-two.png"
              class="d-block w-50"
              alt="EZ-AD TV"
            />
          </router-link>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>
    <div>
      <p>Over 30.000 Sold in 7 Countries, Some to Notable Customers Like</p>
      <div>
        <img src="./image/customers/60be6a67205b7_Spectrum-Logo.png" alt="Spectrum">
        <img src="./image/customers/ace.png" alt="Ace">
        <img src="./image/customers/american_home.png" alt="American_home">
        <img src="./image/customers/applied.png" alt="Applied">
        <img src="./image/customers/ava.png" alt="Ava">
        <img src="./image/customers/best-buy.png" alt="Best-Buy">
        <img src="./image/customers/best.png" alt="Spectrum">
        <img src="./image/customers/60be6a67205b7_Spectrum-Logo.png" alt="Spectrum">
        <img src="./image/customers/60be6a67205b7_Spectrum-Logo.png" alt="Spectrum">
        <img src="./image/customers/60be6a67205b7_Spectrum-Logo.png" alt="Spectrum">
        <img src="./image/customers/60be6a67205b7_Spectrum-Logo.png" alt="Spectrum">
        <img src="./image/customers/60be6a67205b7_Spectrum-Logo.png" alt="Spectrum">
        <img src="./image/customers/60be6a67205b7_Spectrum-Logo.png" alt="Spectrum">
        <img src="./image/customers/60be6a67205b7_Spectrum-Logo.png" alt="Spectrum">
        <img src="./image/customers/60be6a67205b7_Spectrum-Logo.png" alt="Spectrum">
        <img src="./image/customers/60be6a67205b7_Spectrum-Logo.png" alt="Spectrum">
        <img src="./image/customers/60be6a67205b7_Spectrum-Logo.png" alt="Spectrum">
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "EZADHome",
};
</script>
  
  <style scoped>
.contend {
  margin: 1%;
}
.carousel-item img {
  margin-left: 20%;
}
.carousel-item .ez {
  width: 70%;
  position: relative;
  left: 20%;
  text-shadow: 0 0 10px #fff, 0 0 10px #fff, 0 0 5px #49e158, 0 0 5px #49e158,
    0 0 5px #49e158, 0 0 5px #49e158, 0 0 30px #133900;
  color: #fff;
}
.carousel-item .tv {
  width: 70%;
  position: relative;
  left: 20%;
  text-shadow: 0 0 10px #fff, 0 0 10px #fff, 0 0 5px #4171c9, 0 0 5px #4171c9,
    0 0 5px #4171c9, 0 0 5px #4171c9, 0 0 30px #060253;
  color: #fff;
}
</style>