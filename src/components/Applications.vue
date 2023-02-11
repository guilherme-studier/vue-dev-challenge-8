<template>
  <section class="container-applications">
    <h1>Good design means good business</h1>
    <div class="applications">
      <div class="application">
        <div class="application-img">
          <img src="../assets/smarthome.jpg" alt="">
        </div>
        <div class="application-title">
          <p>Full stack application</p>
          <h2>Smart home dashboard</h2>
        </div>
      </div>
      <div class="application">
        <div class="application-img">
          <img src="../assets/booking.png" alt="">
        </div>
        <div class="application-title">
          <p>UX/UI design</p>
          <h2>Onboard application</h2>
        </div>
      </div>
      <div class="application">
        <div class="application-img">
          <img src="../assets/onboard.png" alt="">
        </div>
        <div class="application-title">
          <p>Mobile application</p>
          <h2>Booking system</h2>
        </div>
      </div>
      <div class="application">
        <div class="application-img">
          <img src="../assets/juice-product.png" alt="">
        </div>
        <div class="application-title">
          <p>Front End applicati on</p>
          <h2>Juice product homepage</h2>
        </div>
      </div>
    </div>
    <div class="see">
        <p>see more</p>
      </div>
  </section>
</template>

<script>
export default {
  name: 'Applications'
}
</script>

<style scoped>
  .container-applications {
    display: flex;
    flex-direction: column;
    max-width: 1288px;
  }

  .container-applications h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    text-align: initial;
    width: 448px;
    margin-bottom: 12px;
  }

  .container-applications .applications {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  .container-applications .applications .application:nth-child(odd) {
    margin-top: 176px;
  }

  .container-applications .applications .application {
    width: 545px;
    height: 636.43px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 0 10px;
  }

  .container-applications .applications .application .application-img {
    width: 545px;
  }

  .container-applications .applications .application .application-img img {
    width: 100%;
    border-radius: 12px;
  }

  .container-applications .applications .application .application-title p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    text-align: initial;
    color: var(--gray-600);
  }

  .container-applications .applications .application .application-title h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: var(--gray-800);
    text-align: initial;
  }

  .container-applications .see {
    display: flex;
    justify-content: end;
  }

  .container-applications .see p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: var(--blue-500);
  }

  @media (max-width: 900px) {
    .container-applications {
      margin: 0 auto;
      max-width: 500px;
      
      padding: 0 14px 0 10px;
      width: 100%;
    }

    .container-applications h1 {
      font-size: 24px;
      line-height: 36px;
      width: 267px;
      margin: 0 0 48px 35px;
    }

    .container-applications .applications .application {
      width: 100%;
      height: 100%;
      margin: 10px 0;
    }

    .container-applications .applications .application:nth-child(odd)  {
      margin-top: 0;
    }

    .container-applications .applications .application .application-img {
      width: 100%;
    }

    .container-applications .see p {
      font-size: 18px;
      line-height: 27px;
    }

    .container-applications .see {
      display: flex;
      justify-content: start;
      margin-top: 10px;
    }
  }
</style>