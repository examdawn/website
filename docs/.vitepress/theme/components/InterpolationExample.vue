<!-- InterpolationExample.vue -->
<template>
  <div class="container">
    <div class="dot"></div>
  </div>
</template>

<script setup>
// No script logic is needed as the animation is handled entirely by CSS.
</script>

<style scoped>
/* The keyframes define the start and end points of the animation. 
   The browser interpolates all the values in between. */
@keyframes moveAndChangeColor {
  0%   { 
    left: 5%; 
    background-color: #3498db; /* Start Point (Blue) */
  }
  100% { 
    left: 85%; 
    background-color: #e74c3c; /* End Point (Red) */
  }
}

.container { 
  position: relative; 
  background: #f0f0f0; 
  height: 50px; 
  border-radius: 25px; 
  border: 1px solid #ccc;
  overflow: hidden;
}

.dot {
  position: absolute; 
  top: 5px; 
  height: 40px; 
  width: 40px;
  border-radius: 50%; 
  /* The 'animation' property applies the interpolation over 4 seconds. */
  animation: moveAndChangeColor 4s infinite alternate ease-in-out;
}
</style>
