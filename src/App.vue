<script setup lang="ts">

import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';

</script>

<template>
  <NavBar />
  <router-view />
  <FooterBar />
</template>

<style>
* {
  padding: 0;
  margin: 0;
}

.font-YoungSerif {
  font-family: 'YoungSerif';
}

.font-Hubballi {
  font-family: 'Hubballi';
}

.font-HindVadodara {
  font-family: 'HindVadodara';
}

img,
video {
  width: -webkit-fill-available;
  height: inherit !important;
  object-fit: cover;
}

body {
  background-color: #000;
}

.nav__links{
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%, rgba(0,0,0,0) 100%);
}
</style>