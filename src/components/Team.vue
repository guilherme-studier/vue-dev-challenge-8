<template>
  <section class="team">
    <div class="team-text">
      <p>Meet the team</p>
      <h1>We are chilled and a laidback team</h1>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
    </div>
    <div class="team-img">
      <div class="team-img-1">
        <img src="../assets/person3.png" alt="">
      </div>
      <div class="team-img-2">
        <div class="img-2">
          <img src="../assets/person1.png" alt="">
        </div>
        <div class="img-3">
          <img src="../assets/person2.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Team',
}
</script>

<style scoped>
  .team {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 241px 0 196px 0;
    width: 100%;
    flex-wrap: wrap;
  }

  .team .team-text {
    width: 280px;
    text-align: initial;
  }

  .team .team-text p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: var(--red-500);
  }

  .team .team-text h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    color: var(--gray-800);
  }

  .team .team-text h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--gray-700);
  }

  .team .team-img {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 644px;
  }

  .team .team-img .team-img-1 {
    width: 320px;
    height: 320px;
  }

  .team .team-img .team-img-1 img {
    width: 100%;
    border-radius: 24px;
  }

  .team .team-img .team-img-2 {
    display: flex;
    flex-direction: column;
    height: 584px;
    justify-content: space-between;
  }

  .team .team-img .team-img-2 .img-2 {
    width: 260px;
    height: 260px;
  }

  .team .team-img .team-img-2 .img-2 img {
    width: 100%;
    border-radius: 24px;
  }

  .team .team-img .team-img-2 .img-3 {
    width: 291.43px;
    height: 300px;
  }

  .team .team-img .team-img-2 .img-3 img {
    width: 100%;
    border-radius: 24px;
  }

  @media (max-width: 700px) {
    .team {
      margin: 100px 0;
      padding: 0 15.68px 0 10px;
    }

    .team .team-text {
      max-width: 280px;
      height: 258px;

      display: flex;
      justify-content: space-between;
      flex-direction: column;
      margin-bottom: 36px;
    }

    .team .team-text p {
      font-size: 18px;
      line-height: 27px;
    }

    .team .team-text h1 {
      font-size: 36px;
      line-height: 54px;
    }

    .team .team-text h2 {
      font-size: 16px;
      line-height: 24px;
    }

    .team .team-img .team-img-1 {
      width: 178.16px;
      height: 178.16px;
    }

    .team .team-img .team-img-2 {
      height: 320.7px;
    }

    .team .team-img .team-img-2 .img-2 {
      width: 144.76px;
      height: 144.76px;
    }

    .team .team-img .team-img-2 .img-3 {
      width: 162.25px;
      height: 167.03px;
    }
  }
</style>