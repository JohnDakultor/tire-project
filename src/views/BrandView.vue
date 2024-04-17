<template>
    <div class="brand">
        <NavBarView/>
        <h1>This is an brand page</h1>
    </div>
</template>

<script>
import NavBarView from '../components/NavBar.vue';
export default {
  name: 'BrandView',
  components:{
    NavBarView
  },
}
</script>