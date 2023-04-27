<template>
  <div class="hello">
    <div
      id="carouselExampleInterval"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2000">
          <button>
            <h1 class="ez">EZ-Comerce</h1>
            <h3 class="ez">Simple & Automated E-Commerce Site</h3>
            <img
              src="../components/image/ez_commerce.png"
              class="d-block w-50"
              alt="EZ-Commerce"
            />
          </button>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <button>
            <h1 class="tv">Digital Signage</h1>
            <h3 class="tv">In-Store Digital Signage Systen</h3>
            <img
              src="../components/image/header-img-two.png"
              class="d-block w-50"
              alt="EZ-AD TV"
            />
          </button>
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
  </div>
</template>
  
  <script>
export default {
  name: "EZADHome",
};
</script>
  
  <style scoped>
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