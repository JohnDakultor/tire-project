<template>
    <div class="shop">
        <NavBarView/>
        <h1>This is an shop page</h1>
    </div>
</template>

<script>
import NavBarView from '../components/NavBar.vue';

export default {
  name: 'ShopView',
  components:{
    NavBarView
  },
}
</script>