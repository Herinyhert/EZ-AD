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
        <img
          src="./image/customers/60be6a67205b7_Spectrum-Logo.png"
          alt="Spectrum"
        />
        <img src="./image/customers/ace.png" alt="Ace" />
        <img src="./image/customers/american_home.png" alt="American_home" />
        <img src="./image/customers/applied.png" alt="Applied" />
        <img src="./image/customers/ava.png" alt="Ava" />
        <img src="./image/customers/best-buy.png" alt="Best-Buy" />
        <img src="./image/customers/best.png" alt="Best" />
        <img src="./image/customers/costco.png" alt="Costco" />
        <img src="./image/customers/disney.png" alt="Disney" />
        <img src="./image/customers/emery.png" alt="Emery" />
        <img src="./image/customers/lmc.png" alt="Lmc" />
        <img src="./image/customers/napa.png" alt="Napa" />
        <img src="./image/customers/orgill.png" alt="Orgill" />
        <img src="./image/customers/ross.png" alt="Ross" />
        <img src="./image/customers/true_value.png" alt="True_Value" />
        <img src="./image/customers/verizon.png" alt="Verizon" />
        <img src="./image/customers/walmart.png" alt="Walmart" />
      </div>
    </div>
    <div>
      <h2>A Suite of Marketing Technologies That Is Easy to Use</h2>
      <h3>
        All of our products are fully integrated with one another, meaning you
        can easily create content to push to multiple outlets.
      </h3>
      <div>
        <img src="./image/ezcommerce_2.png" alt="EZ-Commerce" />
        <h2>EZ-Commerce</h2>
        <p>
          Display ALL of your POS Products on a simple & automated E-Commerce
          Site.
        </p>
        <p>
          Sync Your POS Data System to have your products immediately available
          on your Ecommerce website. Product images and descriptions are ready
          for your customers without even typing a word. We automatically match
          your POS products to our database of over 8 million products!
        </p>
        <button>Learn More About EZ-Commerce</button>
      </div>
      <div>
        <img src="./image/digital_sinage.png" alt="EZ-Commerce" />
        <h2>Digital Signage System</h2>
        <p>
          Simple, Inexpensive In-Store Advertising TV System
        </p>
        <p>
          Plug our EZ-AD media player into any flat-screen TV and automatically turn it into an in-store TV advertising board. Then log into ezadtv.com and create your content. We have thousands of videos & templates to choose from, so you can quickly create digital advertising monitors in your store. Creating digital ads has never been so easy with EZ-AD's in-store TV advertising software.
        </p>
        <button>Learn More About EZ-AD TV</button>
        <button>View Pricing</button>
      </div>
      <div>
        <img src="./image/cards.png" alt="EZ-Commerce" />
        <h2>Digital Signage System</h2>
        <p>
          Simple, Inexpensive In-Store Advertising TV System
        </p>
        <p>
          Plug our EZ-AD media player into any flat-screen TV and automatically turn it into an in-store TV advertising board. Then log into ezadtv.com and create your content. We have thousands of videos & templates to choose from, so you can quickly create digital advertising monitors in your store. Creating digital ads has never been so easy with EZ-AD's in-store TV advertising software.
        </p>
        <button>Learn More About EZ-AD TV</button>
        <button>View Pricing</button>
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