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
    <div class="cont">
      <h2>
        Over <strong style="color: rgb(75, 194, 36);">30,000 Sold</strong> in 7 Countries, Some to Notable
        Customers Like
      </h2>
      <div class="cont-custf">
        <img
          src="./image/customers/60be6a67205b7_Spectrum-Logo.png"
          alt="Spectrum"
        />
        <img src="./image/customers/ace.png" alt="Ace" />
        <img src="./image/customers/applied.png" alt="Applied" />
        <img src="./image/customers/ava.png" alt="Ava" />
        <img src="./image/customers/best-buy.png" alt="Best-Buy" />
        <img src="./image/customers/best.png" alt="Best" />
        <img src="./image/customers/costco.png" alt="Costco" />
        <img src="./image/customers/disney.png" alt="Disney" />
        <img src="./image/customers/emery.png" alt="Emery" />
        <img src="./image/customers/napa.png" alt="Napa" />
        <img src="./image/customers/orgill.png" alt="Orgill" />
        <img src="./image/customers/american_home.png" alt="American_home" />
        <img src="./image/customers/true_value.png" alt="True_Value" />
        <img src="./image/customers/ross.png" alt="Ross" />
        <img src="./image/customers/verizon.png" alt="Verizon" />
        <img src="./image/customers/walmart.png" alt="Walmart" />
        <img src="./image/customers/lmc.png" alt="Lmc" />
      </div>
    </div>
    <div class="cont">
      <h1 style="color:#3f566d">A Suite of Marketing Technologies That Is Easy to Use</h1>
      <h3>
        All of our products are fully integrated with one another, meaning you
        can <strong style="color:#3f566d; ;">easily create content to push to multiple outlets.</strong>
      </h3>
      <div class="cont-text">
        <img src="./image/ezcommerce_2.png" alt="EZ-Commerce" />
        <div class="cont-text-text">
          <h2 style="color:#49e158; font-size: 3rem;"><strong>EZ-Commerce</strong></h2>
          <p>
            <strong>            
              Display ALL of your POS Products on a simple & automated E-Commerce Site.
            </strong>
          </p>
          <p>
            Sync Your POS Data System to have your products immediately
            available on your Ecommerce website. Product images and descriptions
            are ready for your customers without even typing a word. We
            automatically match your POS products to our database of over 8
            million products!
          </p>
          <button>Learn More About EZ-Commerce</button>
        </div>
      </div>
      <div class="cont-text">
        <div class="cont-text-text">
          <h2 style="color:#4171c9; font-size: 3rem;">Digital Signage System</h2>
          <p>Simple, Inexpensive In-Store Advertising TV System</p>
          <p>
            Plug our EZ-AD media player into any flat-screen TV and
            automatically turn it into an in-store TV advertising board. Then
            log into ezadtv.com and create your content. We have thousands of
            videos & templates to choose from, so you can quickly create digital
            advertising monitors in your store. Creating digital ads has never
            been so easy with EZ-AD's in-store TV advertising software.
          </p>
          <button>Learn More About EZ-AD TV</button>
          <button>View Pricing</button>
        </div>
        <img src="./image/digital_sinage.png" alt="Digital Sinage" />
      </div>
      <div class="cont-text">
        <img src="./image/cards.png" alt="Social Media Manager" />
        <div class="cont-text-text">
          <h2 style="color:#4171c9; font-size: 3rem;">Social Media Manager</h2>
          <p>Auto Post your content on Facebook® & Twitter®</p>
          <p>
            Managing social media accounts can be a headache. With the Social
            Media Manager, you'll get tons of content and features that will help
            automate that process for you. Simply add content from our EZ-AD
            Library, or build it using our easy to use template builder and have
            EZ-AD post content on a schedule.
          </p>
          <button>Learn More About Social Manager</button>
          <button>Free Sign Up!</button>
        </div>
      </div>
      <div class="cont-text">
        <div class="cont-text-text">
          <h2 style="color:#4171c9; font-size: 3rem;">Print Signs</h2>
          <p>Quickly generate signs from product SKUs or UPCs</p>
          <p>
            The easiest print sign feature that automatically makes product
            signs based on a UPC/SKU or a custom message. EZ-AD has over 1.8
            million products in its catalog across all industries. Create
            multiple signs with a variety of templates, layouts & sizes in a
            matter of seconds.
          </p>
          <button>Learn More About Print Signs</button>
          <button>Start for Free</button>
        </div>
        <img src="./image/print_signs.png" alt="Print Signs"/>
      </div>
      <div class="cont-text">
        <img src="./image/price-comparison.png" alt="Price Comparison" />
        <div class="cont-text-text">
          <h2 style="color:#4171c9; font-size: 3rem;">Price Comparison</h2>
          <p>Automatically View Competitor Pricing & Product Analytics</p>
          <p>
            Using Artifical Intelligence, we analyze product data to show you
            what's hot in your business, and what's not. We also compare your
            prices to other competitors both online & locally.
          </p>
          <button>Learn More About Price Comparison</button>
          <button>Free Sign Up!</button>
        </div>
      </div>
      <div class="cont-text">
        <div class="cont-text-text">
          <h2 style="color:#4171c9; font-size: 3rem;">Barcode Scanner App</h2>
          <p>
            Download the app & scan products to view competitor pricing & videos
          </p>
          <p>
            This friendly app is packed with tons of features like managing your
            EZ-AD TV, creating signs, or viewing manufacturer's videos, all by
            simply scanning a product barcode.
          </p>
          <button>Learn More</button>
          <button>Download for Free!</button>
        </div>
        <img src="./image/scanner-app.png" alt="Barcode Scanner App" />
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
  font-family:Georgia, 'Times New Roman', Times, serif;
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
.cont {
  margin: 5%;
  font-size: 1.5rem;
  color: #3f566d;
}
.cont-custf {
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  gap: 40px;
  padding: 40px;
  justify-content: center;
}
.cont-custf img {
  height: 60px;
}
.cont-text {
  margin: 5%;
  width: 100%;
  height: 700px;
  display: flex;
  color: #2c3e50;
}
.cont-text img {
  width: 70%;
}
.cont-text-text {
  margin-top: 10%;
  font-size: 1.2rem;
  justify-content: center;
  color: #2c3e50;
}
</style>