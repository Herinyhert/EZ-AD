<template>
    <div class="hello">
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="2000">
        <h1>EZ-Comerce</h1>
        <h3>Simple & Automated E-Commerce Site</h3>
        <img src="../components/image/ez_commerce.png" class="d-block w-50" alt="EZ-Commerce">
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <h1>Digital Signage</h1>
        <h3>In-Store Digital Signage Systen</h3>
        <img src="../components/image/header-img-two.png" class="d-block w-50" alt="EZ-AD TV">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Anterior</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Siguiente</span>
    </button>
  </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EZADHome'
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    /* .carousel-item{
      display: flex;
      justify-content: center;
    } */
  .carousel-item img{
    margin-left: 20%;
  }
  .carousel-item h1,h3{
    margin-top: 10px;
    width: 20%;
    position: relative;
    left: 20%;
    text-shadow: 0 0 10px #fff, 0 0 10px #fff, 0 0 5px #8c4eb6, 0 0 5px #8c4eb6, 0 0 20px #8c4eb6, 0 0 30px #8c4eb6, 0 0 40px #e60073;
    color: #fff;
  }
  </style>