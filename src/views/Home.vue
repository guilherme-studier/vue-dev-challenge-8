<template>
  <div class="container">
    <Header />
    <Skills />
    <Experience />
    <Projects />
    <Blogs />
    <Hobbies />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Skills from '../components/Skills.vue';
import Experience from '../components/Experience.vue';
import Projects from '../components/Projects.vue';
import Blogs from '../components/Blogs.vue';
import Hobbies from '../components/Hobbies.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Skills,
    Experience,
    Projects,
    Blogs,
    Hobbies,
  }
}
</script>