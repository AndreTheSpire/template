<template>
    <div class="d-flex flex-column justify-center align-center">
      <div class="d-flex flex-column justify-center align-center">
       
          <v-avatar class="ma-3" size="96">
            <v-img src="/img/logopfp.png"></v-img>
          </v-avatar>
       
      </div>
          <div class="d-flex flex-column justify-center align-center">
        
      <v-card-title class="text-header heading-3 weight--700">Reset Password </v-card-title>
      <v-card-title class="text-header heading-3 weight--700">berhasil</v-card-title>
       <v-card-title class="text-component paragraph-small weight--500 text-center text-wrap">Harap cek email anda untuk mengubah kata sandi</v-card-title>
       
        <v-btn type="submit" class="mt-2 px-10 text-btn"   @click="backtosignin">Sign in Kembali</v-btn>
          </div>

    </div>
</template>

<script setup>
  import { ref } from 'vue'

  const email = ref('')
  const EmailRules = [
    value => {
      if (value?.length > 3) return true
      return 'email must be at least 3 characters.'
    },
  ]

</script>

<script>
definePageMeta({
  layout: 'login'
})
  export default {
    data: () => ({
      email: '',
      EmailRules: [
        value => {
          if (value?.length > 3) return true

          return 'First name must be at least 3 characters.'
        },
      ],
    }),
    methods:{
      backtosignin(){
        this.$router.push('/');
      }
    }
  }
</script>

<style lang="scss" scoped>
.auto-margin{
  margin: 5vh;
}
.custom-btn{
  background-color: rgb(45, 42, 39);
  color: white;
}
.text-header{

  color: $primary-color;
}
.text-component{

   color: $neutral-3;
}
.text-btn{

  color: $neutral-4;
  background-color: $secondary-medium-color;
}
@media (max-width: 40em) {
  
}
</style>