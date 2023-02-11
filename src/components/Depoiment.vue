<template>
  <section class="depoiment">
    <h1>
      “Fast and outstanding resutls. Edie understands their customer’s needs. They have a young and talented team.”
    </h1>
    <div class="person">
      <div class="person-img">
        <img src="../assets/person4.png" alt="">
      </div>
      <div class="person-office">
        <h2>Carlos Tran</h2>
        <h3>The Decorate Gatsby</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Depoiment'
}
</script>

<style scoped>
  .depoiment {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: initial;
    height: 286px;
    margin-bottom: 203px;
    
  }

  .depoiment h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    color: var(--gray-800);
  }

  .depoiment .person {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 303px;
  }

  .depoiment .person-img {
    width: 82px;
    height: 82px;
  }

  .depoiment .person-img img {
    width: 100%;
    border-radius: 12px;
  }

  .depoiment .person-office {
    display: flex;
    flex-direction: column;
    text-align: initial;
  }

  .depoiment .person-office h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: var(--gray-800);
  }
  .depoiment .person-office h3 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: var(--gray-600);
  }

  @media (max-width: 900px) {
    .depoiment {
      margin: 0 auto;
      max-width: 500px;
      padding: 0 14px 0 10px;
      height: 280px;
      margin-bottom: 103px;
    }

    .depoiment h1 {
      font-size: 24px;
      line-height: 36px;
    }

    .depoiment .person-img {
      width: 82px;
      height: 82px;
    }

    .depoiment .person-office h2 {
      font-size: 24px;
      line-height: 36px;
    }

    .depoiment .person-office h3 {
      font-size: 18px;
      line-height: 27px;
    }
  }
</style>