<template>
  <v-app class="background-container">
    <v-navigation-drawer
      v-model="drawer"
      app
      :mini-variant="miniVariant"
      @click:mini-variant="miniVariant = !miniVariant"
      class="sidenav"
    >
      <!-- Sidebar content here -->
        <v-row class="my-5 mx-2">
      <v-col cols="5" class="d-flex justify-center">
       <div class="d-flex flex-column justify-center align-center">
        <div>
          <v-avatar class="ma-3" size="79">
            <v-img src="/img/logopfp.png"></v-img>
          </v-avatar>
        </div>
      </div>
      </v-col>
      <v-col cols="7" class="d-flex align-center heading-5 weight--700">Sekolah Yoga </v-col>
    
    </v-row>
    <!-- <v-divider
      :thickness="8"
      class="border-opacity-100"
      color="white"
    ></v-divider> -->
    <v-list>
      <v-list-item
        v-for="(item, index) in routes"
        :key="index"
        @click="navigateroute(item,index)"
        :class="{ 'selected-item': selectedIndex === index }"
      >
        <v-icon class="mr-3">{{item.icon}}</v-icon>
          {{ item.text }}
        
      </v-list-item>
       <v-list-item
       v-if="$vuetify.display.smAndDown"
        @click="navigateprofile()"
        :class="{ 'selected-item': selectedIndex === -1 }"
      >
        <v-icon class="mr-3">mdi-account</v-icon>
          Profile
        
      </v-list-item>
    </v-list>

    </v-navigation-drawer>

    <v-app-bar app v-if="$vuetify.display.smAndDown">
         <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    
    <v-spacer></v-spacer>
      <!-- <v-toolbar-title v-if="selectedIndex!=-1" class="text-center heading-2 weight--700">{{routes[selectedIndex].text}}</v-toolbar-title> -->
      <ProfileHeader  v-if="selectedIndex!=-1" :reset="resetindex"/>
      <v-toolbar-title v-else class="text-center paragraph-normal weight--700 ">Profile</v-toolbar-title>
        <v-spacer></v-spacer>
      <NotificationBell />
    </v-app-bar>
    <v-app-bar app v-else>
     <v-app-bar-nav-icon @click.stop="drawer = !drawer">  <v-icon v-if="drawer">mdi-chevron-left</v-icon><v-icon v-else >mdi-chevron-right</v-icon></v-app-bar-nav-icon>
    
      <v-toolbar-title class="heading-2 weight--700"  v-if="selectedIndex!=-1">{{routes[selectedIndex].text}}</v-toolbar-title>
      <v-toolbar-title v-else></v-toolbar-title>
      <NotificationBell />
      <ProfileHeader :reset="resetindex"/>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script>
import { ref } from 'vue'


export default {
  data() {
    return {
      drawer: true, // Controls whether the sidebar is open
      miniVariant: false, // Controls whether the sidebar is in mini-variant mode (for mobile)
      routes: [
        // { text: 'Home', route: '/home', icon:'mdi-home' },
        { text: 'Evaluasi', route: '/evaluasi',icon:'mdi-clipboard-list-outline' },
        { text: 'Hasil Evaluasi', route: '/evaluasi/hasilevaluasi',icon:'mdi-file-document-check' },
        // Add more menu items as needed
      ],
      selectedIndex: 0, // Index of the selected item

    }
  },
  methods:{
    resetindex(){
      console.log("kepanggil");
      this.selectedIndex=-1;
      console.log(this.selectedIndex);
    },
    toogledrawer(){
      this.drawer=!this.drawer;
      console.log(this.drawer);
      this.toggleSidebar();
    },
    navigateroute(route,index) {
      this.$router.push(route.route);
      this.selectedIndex = index;
      
    },
    navigateprofile() {
      this.$router.push("/profile");
      this.selectedIndex = -1;
      
    },
     toggleSidebar() {
      this.$emit('toggleSidebar');
    }, 
  },mounted(){
    //  if (this.$cookies.get('loginProfile')) {


    //  }else{
    //   this.$router.push('/');
    //  }
  }
};
</script>

<style lang="scss" scoped>
.sidenav{
  background-color: $primary-color;
  color: $neutral-4;
}
// .text-header{
//   font-size: 24px;
//   font-weight: 700;
//   font-family: 'Open Sans';
//   line-height: 32px;
//   color: white;
// }
// .selected-item {
//   background-color:#0D8DDA; /* Change this to your desired background color */
// }
// .background-container{
//   background-color: #F0F0F0;/* Adjust this property as needed */
// }
// .text-title{
//   font-family: "Open Sans";
// font-size: 28px;
// font-style: normal;
// font-weight: 700;
// line-height: 22px;
// }
// @media (max-width: 40em) {
//   .text-title{
//     font-size: 15px;
//   }
  
// }

</style>