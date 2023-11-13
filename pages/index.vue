<template>
    <div class="text-dupe">
{{profile.profile.fullName}}
    </div>
</template>

<script>
import { ProfileStore } from '../stores/profilestore'
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

<style lang="scss" scoped>
.text-dupe{
font-family: "Open Sans";
  font-weight: 500;
  font-size: 24px;
  color: black;
}

</style>