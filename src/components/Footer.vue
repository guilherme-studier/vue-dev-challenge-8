<template>
  <footer>
    <div class="footer">
      <div class="nav">
        <ul>
          <li v-for="(link, index) in links" :key="index">
            <a :href="link.link">
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
      <div class="social">
        <h1>Edie</h1>
        <div class="social-logos">
          <img src="../assets/instagram.svg" alt="">
          <img src="../assets/linkedin.svg" alt="">
          <img src="../assets/twitter.svg" alt="">
        </div>
      </div>
      <div class="contact">
        <p>Want us to contact you?</p>
        <form class="form-user-contact">
          <input type="email" placeholder="Email">
          <button type="submit">Join</button>
        </form>
      </div>
    </div>
    <div class="footer-dev">
      <p>created by <b>Guilherme</b> - devChallenges.io</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      links: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'Services',
          link: '/services'
        },
        {
          name: 'Our Works',
          link: '/our-wokrd'
        },
        {
          name: 'Clients',
          link: '/clients',
        },
        {
          name: 'Contact',
          link: '/contact',
        }
      ],
    }
  }
}
</script>

<style scoped>
  footer {
    background: var(--gray-900);
    width: 100%;
  }

  footer .footer {
    max-width: 1288px;
    display: flex;
    margin: 0 auto;
    padding: 46px 0 118px 0;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  footer .footer .social {
    width: 94px;
    text-align: initial;
  }

  footer .footer .social .social-logos {
    display: flex;
    justify-content: space-between;
  }

  footer .footer .social h1 {
    font-family: 'Heebo';
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 53px;
    color: var(--white);
  }

  footer .footer .contact {
    display: flex;
    flex-direction: column;
    text-align: initial;
  }

  footer .footer .contact p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: var(--white);
  }

  footer .footer .contact .form-user-contact {
    position: relative;
    border-radius: 0.5rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    background-color: #f2f2f2;
    width: 350px;
    margin-top: 1rem;
  }

  footer .footer .contact .form-user-contact input {
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

  footer .footer .contact .form-user-contact button {
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

  footer .footer .nav {
    text-align: initial;
  }

  footer .footer .nav ul li a {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 200%;
    color: white;
  }

  footer .footer-dev p {
    font-family: 'Montserrat';
    font-style: normal;
    font-size: 14px;
    line-height: 17px;
    color: var(--white);
    margin-bottom: 24px;
  }
  
  @media (max-width: 700px) {

    footer .footer div {
      width: 100%;
      padding: 32px 42px;
    }

    footer .footer .nav ul li a {
      font-size: 18px;
    }

    footer .footer .social .social-logos {
      display: flex;
      justify-content: space-between;
      padding: 0;
      width: 94px;
    }

    footer .footer .contact p {
      font-size: 10px;
      line-height: 15px;
      color: var(--gray-600);
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

    footer .footer .contact .form-user-contact {
      width: 100%;
    }
  }
</style>