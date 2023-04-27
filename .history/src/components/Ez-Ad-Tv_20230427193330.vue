<template>
  <div class="content">
    <div class="cont-1">
      <div class="cont-text">
        <h1>In-Store Digital Signage System</h1>
        <div class="cont-text-icon">
          <div class="cont-1I">
            <div class="iconSysten"><i class="bi bi-check-lg"></i></div>
            <p>Simple & Affordable</p>
          </div>
          <div class="cont-1I">
            <div class="iconSysten"><i class="bi bi-youtube"></i></div>
            <p>Load any YouTube Video</p>
          </div>
          <div class="cont-1I">
            <div class="iconSysten"><i class="bi bi-facebook"></i></div>
            <p>Integrate with Social Media</p>
          </div>
          <div class="cont-1I">
            <div class="iconSysten"><i class="bi bi-layout-wtf"></i></div>
            <p>Template Builder</p>
          </div>
        </div>
      </div>
      <img src="./image/header-img-two (1).png" alt="1" />
    </div>
    <div  class="cont-2">
        <div class="cont-text">
            <div>
                <h1>Auto Post your Content to Digital Screens using the EZ-AD Media Player</h1>
                <p>EZ-AD is a simple & inexpensive In-Store Digital Signage System. Simply plug our EZ-AD media player into any HD Television and start playing product advertisements & videos in seconds. All content is updated wirelessly from our cloud-based website.

Each EZ-AD player operates independently, so each one of your TVs can promote different products at different locations inside your store.</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ez-Ad-Tv",
};
</script>

<style scoped>
.content {
  margin: 8%;
  font-family: Georgia, "Times New Roman", Times, serif;
  justify-content: center;
}
.cont-1 {
  background-color: aquamarine,none;

  display: grid;
  grid-template-columns: repeat(auto-fill, 500px);
  gap: 40px;
  padding: 20px;
  justify-content: center;

}
.cont-text {
  
}
.cont-text-icon {
  display: flex;
  flex-flow: row wrap;
  background-color: blue,none;
  
}
.cont-1I {
  display: flex;
  justify-content: center;
}
.iconSysten {
  background-color: rgb(53, 108, 210);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 20px;
  padding: 7px;
}
.iconSysten i {
  font-size: 2rem;
  color: beige;
}
p {
  font-size: 1.5rem;
}
</style>
