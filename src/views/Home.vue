<template>
  <Header />
  <Card />
  <Footer />
</template>

<script>
import Header from '../components/Header.vue';
import Card from '../components/Card.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Card,
    Footer,
  }
}
</script>

<style>

</style>