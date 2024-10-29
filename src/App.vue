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

.font-YoungSerif{
  font-family: 'YoungSerif';
}

.font-Hubballi{
  font-family: 'Hubballi';
}

.font-HindVadodara{
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
</style>