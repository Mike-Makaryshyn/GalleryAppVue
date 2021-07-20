<template>
   <v-container>
      <h2 class="page">MAIN</h2>
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
   </v-container>
</template>


<script>
export default {
   data: () => ({
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
       
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
         {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
      ],
   })
}
</script>


<style >
   .page {
      display: inline-block;
      margin-bottom: 20px;
      font-weight: bold;
      font-size: 25px;
      padding: 10px 20px;
      border: 1px solid rgb(79, 148, 212);
   }
</style>