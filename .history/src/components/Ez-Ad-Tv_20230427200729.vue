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
    <div class="cont-2">
      <div class="cont-text-2">
        <div>
          <h1>
            Auto Post your Content to Digital Screens using the EZ-AD Media
            Player
          </h1>
          <p>
            EZ-AD is a simple & inexpensive In-Store Digital Signage System.
            Simply plug our EZ-AD media player into any HD Television and start
            playing product advertisements & videos in seconds. All content is
            updated wirelessly from our cloud-based website. Each EZ-AD player
            operates independently, so each one of your TVs can promote
            different products at different locations inside your store.
          </p>
        </div>
        <img src="./image/ezad_tv_box.png" alt="" />
      </div>
      <div class="cont-text">
        <h1>Install in 5 minutes</h1>
        <div>
          <div>
            <img src="./image/install1.png" alt="" />
            <div>
              <p>1</p>
              <p>
                Connect the HDMI cable from your TV to the EZ-AD Media Player
              </p>
            </div>
          </div>
          <div>
            <img src="./image/install2.png" alt="" />
            <div>
              <p>2</p>
              <p>
                Connect the EZ-AD Media Player to a Wifi Network or Ethernet
                cable. All media is downloaded and stored on the device.
              </p>
            </div>
          </div>
          <div>
            <img src="./image/install3.png" alt="" />
            <div>
              <p>3</p>
              <p>Log onto www.EZADTV.com to create your content & playlist.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="cont-text">
        <img src="./image/imac_manage.png" alt="" />
        <div>
          <h1>
            Create Your Own Playlist, Set Your Own Schedule, All From One
            Website
          </h1>
          <p>
            Control multiple EZ-AD screens from one page. Place ads in a
            playlist which is downloaded onto the EZ-AD media player and looped.
            You can have one screen or hundreds and deploy content any way you
            want it. Are you a national corporation looking to have a simple &
            reliable solution of deploying your ads? Then EZ-AD TV is your
            solution.
          </p>
        </div>
      </div>
      <div class="cont-text">
        <div>
          <h1>Complete Control At Your Fingertips</h1>
          <p>
            The EZ-AD Mobile App makes it easy to update, manage & create
            content right from your mobile device. With support for iOS &
            Android devices, you can easily snap pictures & upload them to EZ-AD
            TV. Scan products and automatically create signs or browse our
            vendor gallery all from the palm of your hand.
          </p>
          <button>App Store</button>
          <button>Google Play</button>
        </div>
        <img src="./image/mobile_app.png" alt="" />
      </div>
      <div class="cont-text">
        <div>
          <h1>Different Screen Layouts</h1>
          <p>
            Want a vertical screen? No problem, simply flip your TV, update the
            settings on the EZ-AD screen, and your ads will now be displayed
            vertically. You can split your screen into different slideshows with
            videos playing on top & images in the middle. Add your logo, ticker
            or a highlighted message that customers can clearly see
          </p>
        </div>
        <img src="./image/diff-screen-layouts.png" alt="" />
      </div>
    </div>
    <div class="cont-3">
      <h1>What are you waiting for?</h1>
      <button>Order Now</button>
    </div>
    <div class="cont-4">
      <h1>Affordable Pricing</h1>
      <img src="./image/ezad_tv_box.png" alt="" />
      <button>Select</button>
      <button>Select</button>
    </div>
    <div class="cont-5">
      <h1>Are you a distributor/wholesaler? <a href="">Get a Quote</a></h1>
    </div>
    <div class="cont-6">
      <h1>FAQS</h1>
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
p {
  font-size: 1.5rem;
}
.cont-1 {
  display: grid;
  grid-template-columns: repeat(auto-fill, 500px);
  gap: 40px;
  padding: 20px;
  justify-content: center;
}
.cont-text-icon {
  display: flex;
  flex-flow: row wrap;
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
.cont-2 h1 {
  color: rgb(135, 214, 207);
  font-size: 3rem;
}
.cont-text-2 {
  margin: 10%;
  display: flex;
  justify-content: center;
}
.cont-text-2 img{
    wi
}
</style>
