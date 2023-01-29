<template>
  <section>
    <div class="content-text">
      <h1>Modern interior</h1>
      <p>
        A full-Service residential & commercial interior design and staging company offering professional organizing & eco-services.
      </p>
      <span>Read more</span>
    </div>
    <div class="content-img">
      <img src="../assets/photo1.png" alt="" class="card-img">
      <div class="content-img__comment-card">
        <div class="profile">
          <div class="profile-img">
            <img src="../assets/photo2.png" alt="">
          </div>
          <div class="profile-description">
            <h1>Alizza Weber</h1>
            <p>Interior designer</p>
          </div>
        </div>
        <div class="office">
          <h1>Designed in 2020 by Aliza Webber</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Card',
}
</script>

<style>
  section {
    display: flex;
    flex-direction: row;
    padding-top: 5.875rem;
    margin-bottom: 130px;

    width: 100%;
    height: fit-content;

    justify-content: space-between;
    flex-wrap: wrap;
  }

  section .content-text {
    width: 40%;
    flex: 1 1 400px;
    color: var(--white);
    text-align: initial;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  section .content-text h1 {
    font-family: 'Lora', serif;
    font-weight: 500;
    font-size: 48px;

    padding-bottom: 40px;
  }

  section .content-text p {
    font-weight: 400;
    font-size: 24px;

    padding-bottom: 48px;
  }

  section .content-text span {
    font-weight: 700;
    font-size: 18px;
  }

  section .content-img {
    width: 60%;
    flex: 1 1 700px;
    position: relative;
  }

  section .content-img .card-img {
    width: 100%;
    padding: 12px 0 8.19px 52px;
  }

  @media (max-width: 1000px) {
    section .content-img .card-img {
      width: 100%;
      padding: 30px 0;
    }
  }

  section .content-img .content-img__comment-card {
    width: 410px;
    height: 189px;
    background: var(--dark-900);
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    position: absolute;
    right: 40px;
    bottom: -73px;
  }


  section .content-img .content-img__comment-card .profile {
    display: flex;
    align-items: center;

    padding: 10px;
  }

  section .content-img .content-img__comment-card .profile .profile-img{
    width: 85px;
    height: 72px;
  }

  section .content-img .content-img__comment-card .profile .profile-img img {
    width: 100%;
    padding: 18px;
    border-radius: 50%;
  }

  section .content-img .content-img__comment-card .profile .profile-description {
    text-align: initial;
  }

  section .content-img .content-img__comment-card .profile .profile-description h1 {
    font-weight: 500;
    font-size: 14px;
    color: var(--white);
  }

  section .content-img .content-img__comment-card .profile .profile-description p {
    font-weight: 500px;
    font-size: 12px;
    color: var(--gray-200);
  }

  section .content-img .content-img__comment-card .office {
    width: 287px;
    text-align: initial;
    padding-left: 28px;
  }

  section .content-img .content-img__comment-card .office h1 {
    font-family: 'Lora', serif;
    font-weight: 700;
    font-size: 24px;
    color: var(--white);
  }

  @media (max-width: 1000px) {
    section {
      padding-top: 20px;
    }

    section .content-img .card-img {
      width: 100%;
      padding: 30px 0;
    }

    section .content-text h1 {
      font-size: 36px;
      padding-bottom: 25px;
    }

    section .content-text p {
      width: 250px;

      font-size: 14px;
      padding-bottom: 25px;
    }

    section .content-text span {
      font-size: 14px;
    }

    section .content-img .content-img__comment-card {
      width: 300px;
      height: 138px;
    }

    section .content-img .content-img__comment-card .profile {
      padding: 3px;
    }

    section .content-img .content-img__comment-card .profile .profile-description h1 {
      font-size: 12px;
    }

    section .content-img .content-img__comment-card .profile .profile-description p {
      font-size: 12px;
    }

    section .content-img .content-img__comment-card .office h1 {
      font-size: 18px;
    }
  }

</style>