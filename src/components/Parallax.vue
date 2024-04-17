<template>
  <v-div class="parallax">
    <v-parallax src="../assets/dunlop.jpg" height="600">
      <v-card
        rounded
        class="mx-auto"
        width="600"
        height="500"
        data-aos="fade-down"
        data-aos-ease="ease"
        data-aos-duration="500"
        data-aos-delay="100"
        max-width="100%"
        max-height="100%"
      >
        <v-card-title class="d-flex justify-center align-center mt-4">
          <h1>Search Tires</h1>
        </v-card-title>
        <v-card-action class="d-flex justify-center align-center mt-10">
          <v-btn
            text
            class="ml-10"
            x-small
            @click="setSearchMode('tire')"
            :class="{
              'blue-accent-4': searchMode !== 'tire',
              'grey lighten-2': searchMode === 'tire',
            }"
          >
            <v-p class="black--text font-weight-light"> Search by tire </v-p>
            <v-icon> mdi-tire </v-icon>
          </v-btn>

          <v-btn
            text
            class="ml-8"
            x-small
            @click="setSearchMode('car')"
            :class="{
              'blue-accent-4': searchMode !== 'car',
              'grey lighten-2': searchMode === 'car',
            }"
          >
            <v-p class="black--text font-weight-light"> Search by car </v-p>
            <v-icon> mdi-car </v-icon>
          </v-btn>
        </v-card-action>

        <v-img
          src="../assets/banner.jpg"
          width="700"
          height="200"
          v-if="searchMode === 'tire'"
        >
        </v-img>

        <v-img
          src="../assets/banner_car.jpg"
          width="400"
          height="200"
          v-if="searchMode === 'car'"
          class="mx-auto d-block"
          style="max-width: 100%"
        >
        </v-img>

        <template>
          <v-container fluid class="mt-10">
            <v-row>
              <v-col cols="4" v-if="searchMode === 'tire'">
                <v-combobox
                  v-model="select1"
                  :items="item1"
                  label="Width"
                  outlined
                  dense
                  small
                  @change="recomendations()"
                ></v-combobox>
              </v-col>

              <v-col cols="4" v-if="searchMode === 'tire'">
                <v-combobox
                  v-model="select2"
                  :items="item2"
                  label="Aspect Ration"
                  outlined
                  dense
                  small
                  @change="recomendations()"
                ></v-combobox>
              </v-col>

              <v-col cols="4" v-if="searchMode === 'tire'">
                <v-combobox
                  v-model="select3"
                  :items="item3"
                  label="Rim Diameter"
                  outlined
                  dense
                  small
                ></v-combobox>
              </v-col>

              <v-col cols="4" v-if="searchMode === 'car'">
                <v-combobox
                  v-model="select4"
                  :items="item4"
                  label="Maker"
                  outlined
                  dense
                  small
                ></v-combobox>
              </v-col>

              <v-col cols="4" v-if="searchMode === 'car'">
                <v-combobox
                  v-model="select5"
                  :items="item5"
                  label="Model"
                  outlined
                  dense
                  small
                ></v-combobox>
              </v-col>

              <v-col cols="4" v-if="searchMode === 'car'">
                <v-combobox
                  v-model="select6"
                  :items="item6"
                  label="Year"
                  outlined
                  dense
                  small
                ></v-combobox>
              </v-col>
            </v-row>
          </v-container>
          <v-btn
            elevation="2"
            color="primary"
            class="white--text ml-8 mt-5"
            @click="search"
          >
            <v-icon>mdi-magnify</v-icon>
            Search
          </v-btn>
        </template>
      </v-card>
    </v-parallax>
  </v-div>
</template>

<script>
export default {
  name: "Parallax",
  data() {
    return {
      searchMode: "tire",
      select1: null,
      select2: null,
      select3: null,
      item1: [
        "11",
        "145",
        "155",
        "165",
        "175",
        "185",
        "195",
        "205",
        "215",
        "225",
        "255",
        "265",
        "275",
        "285",
        "295",
        "305",
        "315",
        "325",
        "335",
        "345",
        "355",
        "365",
        "375",
        "385",
        "395",
        "40",
        "6.50",
        "7.00",
        "7.50",
      ],
      item2: [],
      item3: [],

      searchMode: "car",
      select4: null,
      select5: null,
      select6: null,
      item4: ["Item 1", "Item 2", "Item 3"],
      item5: ["Item A", "Item B", "Item C"],
      item6: ["Item X", "Item Y", "Item Z"],
    };
  },
  methods: {
    recomendations() {
      const width = this.select1;
      const aspect = this.select2;
      const rim = this.select3;

      if (width === "11") {
        this.item2 = ["R"];
        this.item3 = ["22.5"];
      } else if (width === "145") {
        this.item2 = ["R", "65"];
        if (aspect === "R") {
          this.item3 = ["12"];
        }
        else if (aspect === "65") {
          this.item3 = ["15"];
        }
      } else if (width === "155") {
        this.item2 = ["R", "65", "70", "80", "85"];
        if (aspect === "R") {
          this.item3 = ["12"];
        }
        else if (aspect === "65") {
          this.item3 = ["13", "14"];
        }
        else if (aspect === "70") {
          this.item3 = ["12", "13", "14"];
        }
        else if (aspect === "80") {
          this.item3 = ["12", "13"];
        }
        else if (aspect === "85") {
          this.item3 = ["18"];
        }
      } else if (width === "165"){
         this.item2 = ["50", "55", "60", "65", "70", "75", "80", "R"];

         if (aspect === "50") {
          this.item3 = ["15"];
      }
         else if(aspect === "55"){
           this.item3 = ["14", "15"]; 
      }
         else if(aspect === "60"){
           this.item3 = ["14"]; 
      
      }
         else if(aspect === "65"){
           this.item3 = ["13","14"]; 
      
      }

         else if(aspect === "70"){
           this.item3 = ["10","13","14"]; 
      
      }

         else if(aspect === "75"){
           this.item3 = ["14"]; 
      
      }
        else if(aspect === "80"){
           this.item3 = ["13","14"]; 
      
      }
       else if(aspect === "R"){
           this.item3 = ["13"]; 
      
      }
     
     }else if(width === "175"){
      this.item2 = ["50", "55", "60", "65", "70", "75", "80", "R"];
      if(aspect === "50"){
        this.item3 = ["13", "15"] ;
      }else if(aspect ==="55"){
        this.item3 = ["15"] ;
      }else if(aspect ==="60"){
        this.item3 = ["13","14","15"] ;
      }else if(aspect ==="65"){
        this.item3 = ["14","15"] ;
      }else if(aspect ==="70"){
        this.item3 = ["12","13","14"] ;
      }else if(aspect ==="75"){
        this.item3 = ["16"] ;
      }else if(aspect ==="80"){
        this.item3 = ["15", "16"] ;
      }else if(aspect ==="R"){
        this.item3 = ["13", "14"] ;
      }
     }else if (width === "185"){
      this.item2 = ["55", "60", "65", "70", "75", "80", "R"];
      if(aspect ==="55"){
        this.item3 = ["15", "16"] ;
      }else if(aspect ==="60"){
        this.item3 = ["14","15", "16"] ;
      }else if(aspect ==="65"){
        this.item3 = ["14","15"] ;
      }else if(aspect ==="70"){
        this.item3 = ["13","14"] ;
      }else if(aspect ==="75"){
        this.item3 = ["13", "14"] ;
      }else if(aspect ==="80"){
        this.item3 = ["14"] ;
      }else if(aspect ==="R"){
        this.item3 = ["14", "15"] ;
      }
     }else if (width === "195"){
      this.item2 = ["40", "45", "50", "55", "60", "65", "70", "75", "80", "R"];
      if(aspect ==="40"){
        this.item3 = ["17"] ;
      }else if(aspect ==="45"){
        this.item3 = ["15", "16", "17"] ;
      }else if(aspect ==="50"){
        this.item3 = ["15", "16"] ;
      }else if(aspect ==="55"){
        this.item3 = ["15","16"] ;
      }else if(aspect ==="60"){
        this.item3 = ["14", "15", "16"] ;
      }else if(aspect ==="65"){
        this.item3 = ["14", "15", "16"] ;
      }else if(aspect ==="70"){
        this.item3 = ["14", "15"] ;
      }else if(aspect ==="75"){
        this.item3 = ["14", "15"] ;
      }else if(aspect ==="80"){
        this.item3 = ["14", "15"] ;
      }else if(aspect ==="R"){
        this.item3 = ["14", "15"] ;
      }
     }

    },
    setSearchMode(mode) {
      this.searchMode = mode;
      // Reset the selected values when the search mode changes
      this.select1 = null;
      this.select2 = null;
      this.select3 = null;
      this.select4 = null;
      this.select5 = null;
      this.select6 = null;
    },
    search() {
      // Implement your search logic here
      console.log("Search clicked!");
      console.log("Selected values:", this.select1, this.select2, this.select3);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.parallax {
  width: 100%;
  height: 100vh;
}
</style>
