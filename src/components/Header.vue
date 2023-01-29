<template>
  <div class="container">
    <nav>
      <h1>This interior</h1>
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
        <img src="../assets/icon-hamburger.svg" />
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
          <span class="material-symbols-outlined">close</span>
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
  </div>
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
          name: 'Collection',
          link: '/collection'
        },
        {
          name: 'About',
          link: '/about'
        },
        {
          name: 'Contact',
          link: '/contact',
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
  }

  .container nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    height: 5rem;
  }

  .container nav h1 {
    font-family: 'Crimson Pro', serif;
    text-transform: uppercase;
    font-size: 14px;
    color: var(--white);
    border: 1px solid var(--white);
    padding: 8px;
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
    font-weight: 500;
    color: var(--white);
    border-bottom: 2px solid transparent;
    padding-bottom: 8px;
  }

  .container nav .container__nav-menu ul li a .link {
    font-weight: 700;
  }

  .container nav .container__nav-menu ul li a:hover {
    border-bottom: 2px solid var(--white);
  }

  .container nav .container__nav-menu button {
    background: var(--white);
    border: none;
    border-radius: 30px;
    padding: 1rem;
    font-family: 'Fraunces', serif;
    text-transform: uppercase;
  }

  /* mobile */
  .container__nav-menu-mobile {
    display: flex;
    background: var(--dark-900);
    color: var(--white);
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
    color: var(--white);
    border-bottom: 2px solid transparent;
    padding-bottom: 8px;
  }

  .container .container__nav-menu-mobile ul li a:hover {
    border-bottom: 2px solid var(--white);
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

</style>