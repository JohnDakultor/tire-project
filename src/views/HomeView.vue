<template>
  <div class="home">
    
    <section class="navbar">
      <NavBarView />
    </section>
    <section>
      <ParallaxeVue />
    </section>

    <section class="title">
      <v-main class="text-center">
        <v-container
          fluid
          fill-height
          data-aos="fade-down"
          data-aos-ease="ease"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <v-row align="center" justify="center">
            <v-col cols="12">
              <v-p class="black--text font-weight-bold display-1"
                >Top Tier Brands</v-p
              >
            </v-col>
            <v-col cols="12">
              <v-p class="black--text font-weight-light"
                >Explore a world of premium tire options with our curated
                selection of top-tier brands. Each brand we showcase is known
                for its exceptional quality, durability, and performance.
                Whether you're seeking high-performance tires, all-season
                reliability, or cutting-edge technology, our collection of
                top-tier tire brands has you covered. Discover the perfect
                balance of safety and style for your vehicle.</v-p
              >
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </section>

    <section class="companies" style="margin-top: 100px">
      <v-row>
        <v-col cols="12" md="4">
          <v-card
            class="mx-auto"
            width="400"
            height="300"
            data-aos="fade-down"
            data-aos-ease="ease"
            data-aos-duration="1500"
            data-aos-delay="500"
            max-width="100%"
            max-height="100%"
          >
            <v-img src="../assets/michellin.jpg" style="height: 250px"></v-img>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card
            class="mx-auto"
            width="400"
            height="300"
            data-aos="fade-down"
            data-aos-ease="ease"
            data-aos-duration="2000"
            data-aos-delay="1000"
            max-width="100%"
            max-height="100%"
          >
            <v-img src="../assets/roadmarch.jpg" style="height: 100%"></v-img>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card
            class="mx-auto"
            width="400"
            height="300"
            data-aos="fade-down"
            data-aos-ease="ease"
            data-aos-duration="2500"
            data-aos-delay="1500"
            max-width="100%"
            max-height="100%"
          >
            <v-img src="../assets/dunlop.jpg" style="height: 100%"></v-img>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card
            class="mx-auto"
            width="400"
            height="300"
            data-aos="fade-down"
            data-aos-ease="ease"
            data-aos-duration="3000"
            data-aos-delay="2000"
            max-width="100%"
            max-height="100%"
          >
            <v-img
              src="../assets/Hankook-Tire.png"
              style="height: 100%"
            ></v-img>
          </v-card>
        </v-col>
        
      </v-row>
    </section>
  </div>
</template>


<script>
import NavBarView from "../components/NavBar.vue";
import ParallaxeVue from '../components/Parallax.vue'

export default {
  name: "Home",

  components: {
    NavBarView,
    ParallaxeVue
  },
};
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 10px;
}

.home {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.parallax-section {
  flex: 1; /* This will make the parallax section fill the remaining space */
}

.title {
  display: flex;
}


</style>