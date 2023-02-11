<template>
  <div class="service">
    <div class="service-img">
      <img src="../assets/devchallenges.png" alt="">
    </div>
    <h1>{{ name }}</h1>
    <p>{{ text }}</p>
    <button>Get started</button>
  </div>
</template>

<script>
export default {
  name: 'Service',
  props: {
    name: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
  .service {
    width: 341px;
    height: 422px;
    padding: 46px 34px;

    background: #FFFFFF;
    border-radius: 24px;
    text-align: initial;

    transition: 0.2s all;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
  }

  .service h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: var(--gray-800);
  }

  .service p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--gray-700);
  }

  .service button {
    padding: 9px 13px;
    background: var(--gray-400);
    border: none;
    border-radius: 12px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: var(--gray-600);

    max-width: 117px;
    max-height: 42px;

    transition: 0.2s all;
    cursor: pointer;
  }

  .service button:hover {
    background: var(--blue-500);
    color: var(--white);
  }

  .service:hover {
    box-shadow: 0px 10px 30px rgba(51, 51, 51, 0.1);
  }

  @media(max-width: 700px) {
    .service {
      padding: 49px 34px 43px 34px;
    }
    .service h1 {
      font-size: 24px;
      line-height: 36px;
    }

    .service p {
      font-size: 16px;
      line-height: 24px;
    }
  }
</style>