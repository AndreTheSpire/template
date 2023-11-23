<template>
    <v-form fast-fail @submit.prevent>
    <div class="d-flex flex-column justify-center align-center">
      <div>
        <v-avatar class="ma-3" size="96">
          <v-img src="/img/logopfp.png"></v-img>
        </v-avatar>
      </div>
    </div>

    <div class="d-flex flex-column justify-center align-center mb-5">
      <v-card-title class="heading-3 weight--700 text-header">Selamat Datang</v-card-title>
      <v-card-title class="paragraph-small text-component px-0"
        >Masukkan email anda</v-card-title
      >
    </div>
<InputsTextField v-model="name" label="Email Adress" name="Name" placeholder="Enter Name" />
<InputsTextField v-model="password" label="Password" type="password" name="password" placeholder="Enter Password" />
    <div class="d-flex justify-space-between px-0 py-0">
      <v-checkbox
        class="text-checkbox "
        hide-details
      >
       <template v-slot:label>
    <span class="text-checkbox paragraph-small weight--600" >Keep me Sign in</span>
      </template>
      </v-checkbox>
      <NuxtLink
        class="text-forget paragraph-small weight--600 d-flex justify-center align-center"
        to="/resetpassword"
      >
        Lupa kata sandi?</NuxtLink
      ></div
    >

    <v-btn type="submit" block class="mt-2 text-btn weight--700" @click="signin"
      >Sign In</v-btn
    >
    <v-card-title class="d-flex justify-left px-0">
      <span class="text-checkbox paragraph-small weight--600 mr-5">belum punya akun? </span>
      <span class="text-kontak weight--700 paragraph-small">Kontak Admin sekarang</span></v-card-title
    >
  </v-form>

    
</template>

<script>
definePageMeta({
  layout: 'login'
})
import { ProfileStore } from '../stores/profilestore'
    export default {
        data: () => ({
          name:'',
          password:'',
      profile:ProfileStore().profile,
      menuItems: [
        { title: 'Profile Saya', subtitle:'Lihat profile',icon:'mdi-account' },
        //  { title: 'Edit Profile', subtitle:'Mengedit profile',icon:'mdi-account-edit' },
      ],
    }),
    props:{
      reset:Function
    },
    methods:{
      signin(){
        console.log(this.name);
        console.log(this.password);
        this.$router.push("/evaluasi");
      },
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
.text-header{
  color: $primary-color;
}
.text-component{
  color: $primary-color;
}
.text-checkbox{
  color: $secondary-bold-color;
}
.text-forget{
  color: $neutral-2;
}
.text-btn{
  background-color: $secondary-medium-color;
  color: $neutral-4;
}
.text-kontak{
  color: $primary-color;
}
</style>