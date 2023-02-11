<template>
  <Header />
  <Banner />
  <Services />
  <Applications />
  <Team />
  <Depoiment />
  <Footer />
</template>

<script>
import Header from '../components/Header.vue';
import Banner from '../components/Banner.vue';
import Services from '../components/Services.vue';
import Applications from '../components/Applications.vue';
import Team from '../components/Team.vue';
import Depoiment from '../components/Depoiment.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Banner,
    Services,
    Applications,
    Team,
    Footer,
    Depoiment,
  },
}
</script>

<style scoped>
  
</style>