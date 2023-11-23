<template>
  <v-container
    id="Evaluasi"
    fluid
    tag="section"
  >
 
   <v-row class="pt-5">
        <!-- <template v-for="(KelasUser) in dataKelasUser"> -->
            <v-col
                cols="12"
            >
            <v-card class="py-10">
              <div class="d-flex flex-column justify-center align-center">
                  <div>
                    <v-avatar class="ma-3" size="139">
                      <v-img src="/img/Group.png"></v-img>
                    </v-avatar>
                  </div>
                </div>
              <!-- <div>
                <v-img src="@/assets/img/Group.png"></v-img>
              </div> -->
                <v-card-text class="text-header text-center text-wrap">Terima Kasih</v-card-text>
              <v-card-text class="text-header text-center">Sudah Mengisi!</v-card-text>
              <v-card-text class="text-subheader text-center">Data Evaluasi sudah berhasil di simpan</v-card-text>
             
               <div class="d-flex justify-center align-center"> <!-- Use layout classes -->
       <v-btn @click="pindahhome" prepend-icon="mdi-home" class="custom-btn">Kembali ke Home</v-btn>
      </div>
            </v-card>
            </v-col>
               
        <!-- </template> -->

    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'KelasUser',

    data () {
      return {
        dataKelasUser :null,
        

      }
    },

    methods: {
      complete (index) {
        this.list[index] = !this.list[index]
      },
      pindahhome(){
        this.$router.push('/evaluasi')
      }
      
    },
    mounted(){
    }
  }
</script>

<style scoped>
.custom-btn{
  min-width: 50px;
  background-color: rgb(58, 152, 246);
  color: white;
  margin: 5px;
  border-radius: 25px;
  font-family: "Roboto"!important;
font-size: 24px!important;
font-style: normal!important;;
font-weight: 400!important;
line-height: normal;
}
.text-header{
  font-family: "Figtree"!important;
font-size: 40px!important;
font-style: normal;
font-weight: 700!important;
line-height: normal;
}
.text-subheader{
  font-family: "Figtree"!important;
font-size: 14px!important;
font-style: normal;
font-weight: 500!important;
color: 
#A3A3A3;
line-height: 18px; /* 128.571% */
letter-spacing: -0.01px;
}
</style>
