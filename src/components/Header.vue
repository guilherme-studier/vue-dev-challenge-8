<template>
  <header class="container">
    <nav>
      <h1>Edie</h1>
      <div v-show="!mobileView" class="container__nav-menu">
        <ul>
          <li v-for="(link, index) in links" :key="index">
            <a :href="link.link" :style="this.$route.path === link.link ? 'font-weight: 700; border-bottom: 2px solid white' : ''">
            {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
      <a 
        v-show="mobileView && !openMenuMobile"
        @click="openMenuMobile = !openMenuMobile"
        class="container__nav-btn-open-mobile"
        :class="[openMenuMobile ? 'container__nav-btn-open-mobile-opened' : '']" 
      >
        <img src="../assets/icon-hamburger.png" />
      </a>
      <div 
        v-show="mobileView" 
        :class="[openMenuMobile ? 'container__nav-menu-mobile-open' : '']" class="container__nav-menu-mobile"
      >
        <a 
          v-show="mobileView && openMenuMobile"
          @click="openMenuMobile = !openMenuMobile"
          class="container__nav-btn-close-mobile"
          :class="[openMenuMobile ? 'container__nav-btn-open-mobile-opened' : '']" 
        >
          <img src="../assets/icon-close-menu.png" />
        </a>
        <ul>
          <li v-for="(link, index) in links" :key="index">
            <a :href="link.link" :style="this.$route.path === link.link ? 'font-weight: 700; border-bottom: 2px solid white' : ''">
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Home',
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
        }
      ],
      mobileView: true,
      openMenuMobile: null,
    }
  },
  created() {
    window.addEventListener('resize', this.checkMobileView);
    this.checkMobileView();
  },
  methods: {
    checkMobileView() {
      if (window.innerWidth <= 900) return this.mobileView = true;
      else return this.mobileView = false;
    }
  }
}
</script>

<style scoped>
  .container {
    height: 5rem;
    width: 100%;
    margin-bottom: 104px;
    
  }

  .container nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    height: 5rem;
  }

  .container nav h1 {
    font-family: 'Heebo';
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 53px;
    color: var(--gray-800);
  }

  .container__nav-btn-open-mobile {
    position: relative;
    z-index: 999;
    cursor: pointer;
  }

  .container__nav-btn-open-mobile img {
    width: 100%;
    border-bottom: 1px solid transparent;
    transform: rotate(0);
    transition: 1s ease all;
  }

  .container__nav-btn-open-mobile img:hover {
    transform: rotate(360deg);
  }

  .container nav .container__nav-menu {
    display: flex;
    align-items: center;
    width: 443px;
  }

  .container nav .container__nav-menu ul {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .container nav .container__nav-menu ul li a {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: var(--gray-800);
  }

  .container nav .container__nav-menu ul li a .link {
    font-weight: 700;
  }

  .container nav .container__nav-menu ul li a:hover {
    border-bottom: 2px solid var(--black);
  }

  .container nav .container__nav-menu button {
    background: var(--black);
    border: none;
    border-radius: 30px;
    padding: 1rem;
    font-family: 'Fraunces', serif;
    text-transform: uppercase;
  }

  /* mobile */
  .container__nav-menu-mobile {
    display: flex;
    background: var(--white);
    color: var(--black);
    height: 100%;
    width: 100%;
    position: fixed;
    right: -100%;
    top: 0;
    flex-direction: column;
    padding: 2rem;
    
    transition: 1s ease all;
    z-index: 999;
  }


  .container__nav-menu-mobile-open {
    right: 0;
  }

  .container .container__nav-menu-mobile .container__nav-btn-close-mobile {
    cursor: pointer;
    position: absolute;
    right: 2rem;
  }

  .container .container__nav-menu-mobile ul {
    display: flex;
    list-style: none;
    text-decoration: none;
    flex-direction: column;
    padding-top: 3rem;
  }

  .container .container__nav-menu-mobile ul li {
    padding: 2rem;
    align-items: center;
    text-align: center;
  }

  .container .container__nav-menu-mobile ul li a {
    font-weight: 500;
    color: var(--gray-800);
    border-bottom: 2px solid transparent;
    padding-bottom: 8px;
  }

  .container .container__nav-menu-mobile ul li a:hover {
    border-bottom: 2px solid var(--black);
  }


  .container .container__nav-menu-mobile ul li a .link {
    font-weight: 700;
  }

    .container .container__nav-menu-mobile button {
    background: var(--gray-900);
    color: var(--white);
    border: none;
    border-radius: 30px;
    padding: 1rem;
    font-family: 'Fraunces', serif;
    text-transform: uppercase;
    margin: 1.5rem
  }

  .material-symbols-outlined {
    color: var(--white);
    font-size: 33px;
  }

  @media (max-width: 700px) {
    .container {
      padding: 10px;
    }
  }

</style>