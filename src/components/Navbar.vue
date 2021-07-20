<template>
       <v-container fluid>
        <v-app-bar
            color="rgb(87, 135, 177)"
            dark
          >
            <v-spacer />
            <v-btn outlined class="ml-3 white">
               <router-link to="/">
               Главная
               </router-link>
            </v-btn>
            <v-btn outlined class="ml-3 white">
               <router-link to="/photo">Фотографии</router-link>
            </v-btn>
          
         </v-app-bar>
      </v-container>
</template>

<script>
export default {
   
}
</script>

<style scoped>
 
</style>