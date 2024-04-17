<template>
  <div class="about">
    <NavBarView/>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import NavBarView from '../components/NavBar.vue';
export default {
  name: 'AboutView',
  components:{
    NavBarView
  },
}
</script>