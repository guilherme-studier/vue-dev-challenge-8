<template>
  <section class="container-services">
    <h1>We offer high demand services</h1>
    <div class="services">
      <Service 
        name="UI/UX Design" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis." 
      />
      <Service 
        name="Front End" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis." 
      />
      <Service 
        name="Back End" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis." 
      />
    </div>
  </section>
</template>

<script>
import Service from './Service.vue';

export default {
  name: 'Services',
  components: {
    Service,
  }
}
</script>

<style scoped>
  .container-services {
    width: 100%;
    padding: 200px 0;
  }

  .container-services h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    text-align: initial;
    width: 346px;
    margin-bottom: 42px;
  }

  .container-services .services {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media(max-width: 700px) {
    .container-services {
      padding: 102px 17px 0 10px;
    }
    .container-services h1 {
      font-size: 24px;
      line-height: 36px;
      margin: 0 0 15px 39px;
      max-width: 259px;
    }
  }

</style>