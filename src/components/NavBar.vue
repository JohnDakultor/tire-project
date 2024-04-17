<template>
  <v-nav>
    <v-app-bar depressed app color="blue accent-4" dark>
      <v-btn rounded text @click="$router.push('/')">
        <v-toolbar-title v-if="showTitle">
          <span class="white--text font-weight-light">Tire</span>
          <span class="white--text font-weight-bold">Supply</span>
        </v-toolbar-title>
      </v-btn>

      <v-spacer></v-spacer>

      <template v-if="$vuetify.breakpoint.smAndDown">
        <v-btn rounded icon @click="toggleSearchBar">
          <v-icon>
            mdi-magnify
          </v-icon>
        </v-btn>

        <v-btn rounded text @click="navigateTo('cart')">
          <v-icon>
            mdi-cart
          </v-icon>
        </v-btn>

        <v-btn rounded text @click="toggleDrawer">
          <v-icon>
            mdi-menu
          </v-icon>
        </v-btn>

        <v-dialog v-model="showSearchBar" persistent>
          <v-card color="blue lighter-3">
            <v-card-text>
              <v-text-field
                v-model="search"
                label="Search Tire brand, and Tire size"
                single-line
                hide-details
                rounded
                clearable
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn class="white--text" rounded text @click="toggleSearchBar">Close</v-btn>
              <v-btn class="white--text"  rounded text @click="search">Search</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>

      <template v-else>
        <v-text-field
          v-model="search"
          label="Search Tire brand, and Tire size"
          outlined
          hide-details
          rounded
        ></v-text-field>
        <v-btn rounded text>
          <v-icon>
            mdi-magnify
          </v-icon>
        </v-btn>

        <v-btn rounded text @click="navigateTo('cart')">
          <v-icon>
            mdi-cart
          </v-icon>
        </v-btn>

        <v-btn v-if="showTitle" rounded text @click="navigateTo('about')">About</v-btn>
        <v-btn v-if="showTitle" rounded text @click="navigateTo('brand')">Brand</v-btn>
        <v-btn v-if="showTitle" rounded text @click="navigateTo('shop')">Shop</v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" temporary class="blue lighter-3">
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-nav>
</template>


<script>
export default {
  name: 'NavBar',
  data() {
    return {
      search: '',
      drawer: false,
      showSearchBar: false,
      links: [
        { icon: 'mdi-home', text: 'Home', route: '/' },
        { icon: 'mdi-information', text: 'About', route: '/about' },
        { icon: 'mdi-store', text: 'Shop', route: '/shop' },
        { icon: 'mdi-watermark', text: 'Brand', route: '/brand' },
      ],
    };
  },
  computed: {
    showTitle() {
      return true; // Always show the title
    },
  },
  watch: {
    '$vuetify.breakpoint.smAndDown'() {
      // Show search on small screens, hide title
      if (!this.showTitle) {
        this.showSearchBar = true;
      }
    },
  },
  methods: {
    navigateTo(route) {
      if (this.$router.currentRoute.name !== route) {
        this.$router.push({ name: route });
      }
      this.drawer = false; // Close the drawer after navigation on small screens
    },
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    toggleSearchBar() {
      this.showSearchBar = !this.showSearchBar;
    },
  },
};
</script>

<style scoped>

</style>