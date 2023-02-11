<template>
  <section>
    <div class="container-title">
      <p>Unhappy with your website?</p>
      <h1>We create beautiful and fast web services</h1>
    </div>
    <div class="container-img">
      <img src="../assets/heroImage.jpg" alt="">
    </div>
    <div class="container-subtitle">
      <h1>Story, emotion and purpose</h1>
      <h2>
        We help transform your ideas into real world applications that will outperform your toughest competition and help you achieve your strategic goals in short period of time.
      </h2>
      <div>
        <p>Want us to contact you?</p>
        <form class="form-user-contact">
          <input type="email" placeholder="Email">
          <button type="submit">Join</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style scoped>
  section .container-title {
    width: 543px;
    height: 187px;
    margin: 0 277px;
    
    text-align: initial;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-bottom: 42px;
  }

  section .container-title p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: var(--blue-500);
  }

  section .container-title h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 72px;
    color: var(--gray-800);
  }

  section .container-img {
    max-width: 1332px;
    width: 100%;
  }

  section .container-img img {
    width: 100%;
    border-radius: 18px;
  }

  section .container-subtitle {
    width: 366px;
    height: 449px;
    margin: 0 277px;
    text-align: initial;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-top: 42px;
  }

  section .container-subtitle h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 72px;
    color: var(--gray-800);
  }

  section .container-subtitle h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: var(--gray-700);
  }

  section .container-subtitle p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: var(--gray-600);
  }

  section .container-subtitle .form-user-contact {
    position: relative;
    border-radius: 0.5rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    background-color: #f2f2f2;
    width: 350px;
    margin-top: 1rem;
  }

  section .container-subtitle .form-user-contact input {
    border: 0;
    display: block;
    position: relative;
    padding: 1rem;
    background-color: var(--gray-500);
    width: 90%;
    height: 57px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: var(--gray-300);
  }

  section .container-subtitle .form-user-contact button {
    border: none;
    display: block;
    height: 100%;
    position: relative;
    background-color: #2d9cdb;
    padding: 11px 27px;
    color: #fff;
    border-radius: 0.5rem;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
  }

  /* ==== mobile === */
  @media (max-width: 900px) {
    section {
      margin: 0 auto;
      max-width: 500px;

      width: 100%;
      padding: 48px 17px 0 10px;
    }
    section .container-title {
      max-width: 272px;
      height: 90px;
      margin: 0 0 0 30px;
    }

    section .container-title p {
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
    }

    section .container-title h1 {
      font-size: 24px;
      line-height: 36px;
    }

    section .container-img {
      width: 100%;
      margin: 0;
      padding: 15px 0 22px 0;
    }

    section .container-subtitle {
      max-width: 291px;
      height: 264px;
      margin: 0 0 0 30px;
    }

    section .container-subtitle h1 {
      font-size: 24px;
      line-height: 36px;
    }

    section .container-subtitle h2 {
      font-size: 12px;
      line-height: 18px;
      max-width: 275px;
    }

    section .container-subtitle div p {
      font-size: 10px;
      line-height: 15px;
    }

    section .container-subtitle div .form-user-contact {
      position: relative;
      border-radius: 0.5rem;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      background-color: #f2f2f2;
      width: 100%;
      margin-top: 1rem;
    }

    section .container-subtitle div .form-user-contact input {
      border: 0;
      display: block;
      position: relative;
      padding: 1rem;
      background-color: #f2f2f2;
      width: 100%;
      height: 47px
    }

    section .container-subtitle div .form-user-contact button {
      border: none;
      display: block;
      height: 100%;
      position: relative;
      padding: 11px 20px;
      color: #fff;
      border-radius: 0.5rem;
      font-size: 14px;
      line-height: 21px;
    }
  }
</style>