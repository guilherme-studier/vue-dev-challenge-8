<template>
  <div class="container--item user--info">
    <!-- ! User image -->
    <img
      src="../assets/images/user.png"
      alt="user--image"
      class="user--image"
    />

    <!-- ! User details -->

    <div class="user">
      <div class="user--card">
        <div class="user--details">
          <h1 class="username">Billy Pearson</h1>
          <p class="designation">Frontend developer</p>
        </div>
        <div class="user--contacts">
          <p class="email">
            <i class="fas fa-envelope"></i>
            billy@example.com
          </p>
          <p class="phone">
            <i class="fas fa-phone-alt"></i>
            (+603) 546 624 342
          </p>
        </div>
      </div>
      <p class="about--user">
        Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Veniam molestias inventore, hic beatae nostrum
        cumque quasi, amet tempora modi rerum, totam quibusdam
        delectus debitis. Rem?
      </p>
    </div>
</div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
