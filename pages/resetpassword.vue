<template>
    <v-dialog
      v-model="gagalreset"
      width="auto"
    >
      <v-card>
        <v-card-text>
          Gagal reset! email  tidak sesuai!!
        </v-card-text>
        <v-card-actions>
          <v-btn class="text-btn" block @click="gagalreset = false">tutup</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-form fast-fail @submit.prevent>
     <div class="d-flex flex-column justify-center align-center">
        <div>
          <v-avatar class="ma-3" size="96">
            <v-img src="/img/logopfp.png"></v-img>
          </v-avatar>
        </div>
      </div>
      <div class="d-flex flex-column justify-center align-center mb-5">
      <v-card-title class="heading-3 weight--700 text-header">Reset Password</v-card-title>
       <v-card-title class="paragraph-small weight--600 text-component">Masukkan email anda</v-card-title>
      </div>
        <InputsTextField v-model="email" label="Email Adress" name="Name" placeholder="Enter Name" />

      <v-btn type="submit" block class="text-btn" @click="resetpassword">Kirim</v-btn>
         <v-card-title class="d-flex justify-left px-0">
        <span class="text-checkbox weight--600 paragraph-small mr-5">masih terkendala? </span>
        <span class="text-kontak weight--700 paragraph-small">Kontak Admin sekarang</span></v-card-title>
    </v-form>
 
</template>



<script>
definePageMeta({
  layout: 'login'
})
  export default {
    data: () => ({
      email: 'test',
      gagalreset:false,
      EmailRules: [
        value => {
          if (value?.length > 3) return true

          return 'First name must be at least 3 characters.'
        },
      ],
    }),
    methods:{
      resetpassword(){
        console.log(this.email);
        if(this.email=="admin@gmail.com"){
          this.$router.push('/successresetpassword');
        }else{
          this.gagalreset=true;
        }
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
  color:$primary-color;
}
.text-component{
   color: $primary-color;
}

.text-btn{
  color: white;
  background-color: #0D8DDA;
}

.text-checkbox {

  color: $secondary-bold-color;
}
.text-kontak {

  color: $neutral-1;
}
@media (max-width: 40em) {
}
</style>