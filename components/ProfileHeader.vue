<template>
  <div class="d-flex justify-center">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          color="
#365466"
          v-bind="props"
          min-height="8vh"
          
        >
          <v-avatar class="ma-1" size="30" >
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                    ></v-img>
                  </v-avatar>
                  <div class="d-flex flex-column justify-center align-center">
                    <div class="paragraph-small name-header weight--500">
                        {{profile.profile.fullName}}
                    </div>
                    <div class="paragraph-small role-header weight--400">
                        Admin Account
                    </div>
                    
                  </div>
                  
        </v-btn>
      </template>
       <v-list class="rounded-list">
        <v-list-item
            prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
            title="Hai nama user"
            subtitle="Admin account"
            class="header-list-item rounded-list"
          >
        </v-list-item>
      <v-list-item
        v-for="(item, index) in menuItems"
        :key="index"
        @click="pindahprofile(index)"
        :class="{ 'hovered-item': hoveredIndex === index }"
        :title="item.title"
        :subtitle="item.subtitle"
        :prepend-icon="item.icon"

      >
      </v-list-item>
       <v-list-item
        class=" d-flex justify-center align-center"
          >
          <v-btn class="custom-btn" @click="logout">Keluar</v-btn>
        </v-list-item>
    </v-list>
    
    </v-menu>




  </div>
</template>

<script>
import { ProfileStore } from '../stores/profilestore';
  export default {
    data: () => ({
      profile:ProfileStore(),
      menuItems: [
        { title: 'Profile Saya', subtitle:'Lihat profile',icon:'mdi-account' },
        //  { title: 'Edit Profile', subtitle:'Mengedit profile',icon:'mdi-account-edit' },
      ],
    }),
    props:{
      reset:Function
    },
    methods:{
      pindahprofile(index){
        this.reset();
        this.$router.push('/profile'); 
      },
      logout(){
        this.$router.push('/');
      }
    }
  }
</script>
<style lang="scss" >
.header-list-item {
  background-color: rgb(40, 40, 91); /* Change to your desired background color */
  color: white; /* Change to your desired font color */
  
}
.rounded-list {
  padding-top: 0vh; /* Adjust the value to control the level of rounding */
}
.name-header{
    font-family: 'Roboto';
}
.role-header{
    font-family: 'Roboto';
}

.custom-btn{
  min-width: 50px;
  background-color: rgb(58, 152, 246);
  color: white;
  margin: 5px;
}

</style>