<template>
  <v-card flat class="mt-5 custom-background">
    <!-- <v-card-title> Ganti Kata Sandi </v-card-title>
    <v-divider
      :thickness="4"
      class="border-opacity-100"
      color="black"
    ></v-divider> -->
    <v-card-text>
      <v-row>
        <v-col cols="12" class="px-0">
          <v-list class="pa-5 custom-background">
            <v-row>
               <v-col cols="12" >
                 <v-list-item class="pb-5">
                  <v-list-item-title class="text-header pb-5">Ganti Kata Sandi</v-list-item-title>
                  <v-list-item-subtitle class="text-subheader">Perbaharui kata sandi anda yang baru </v-list-item-subtitle>
                  
                </v-list-item>
               </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="5">
               
                <v-list-item>
                  <v-list-item-title class="text-content">Kata Sandi Lama:</v-list-item-title>
                  <v-text-field
                    v-model="lastpassword"
                    placeholder="Masukkan kata sandi lama anda"
                    :append-inner-icon="showlastPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    prepend-inner-icon="mdi-lock"
                    :type="showlastPassword ? 'text' : 'password'"
                    @click:append-inner="showlastPassword = !showlastPassword"
                  ></v-text-field>
                </v-list-item>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="5">
                <v-list-item>
                  <v-list-item-title class="text-content">Kata Sandi baru:</v-list-item-title>
                  <v-text-field
                    v-model="newpassword"
                    placeholder="Masukkan kata sandi baru anda"
                    :append-inner-icon="shownewPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="shownewPassword ? 'text' : 'password'"
                     prepend-inner-icon="mdi-lock"
                    @click:append-inner="shownewPassword = !shownewPassword"
                  ></v-text-field>
                </v-list-item>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="5">
                <v-list-item>
                  <v-list-item-title class="text-content">Konfirmasi Sandi:</v-list-item-title>
                  <v-text-field
                    v-model="confirmnewpassword"
                    placeholder="konfirmasi kata sandi baru anda"
                    :append-inner-icon="
                      showconfirmpassword ? 'mdi-eye' : 'mdi-eye-off'
                    "
                     prepend-inner-icon="mdi-lock"
                    :type="showconfirmpassword ? 'text' : 'password'"
                    @click:append-inner="showconfirmpassword = !showconfirmpassword"
                  ></v-text-field>
                </v-list-item>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-btn color="blue" width="200px" height="50px" @click="confirmupdate()" class="mx-5">Update</v-btn>
                <!-- <v-btn color="blue" @click="cancelupdate()">Batal</v-btn> -->
              </v-col>
            </v-row>
            <!-- Add more profile information as needed -->
          </v-list>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      update: false,
      lastpassword: null,
      showlastPassword: false,
      shownewPassword: false,
      showconfirmpassword: false,
      newpassword: null,
      confirmnewpassword: null,
    };
  },
  methods: {
    resetpassword() {
      this.lastpassword = null;
      this.newpassword = null;
      this.confirmnewpassword = null;
    },
    confirmupdate() {
      this.update = false;
      this.userProfile.nama = this.updatename;
      this.userProfile.nip = this.updatenip;
      this.userProfile.email = this.updateemail;
      this.userProfile.jabatan = this.updatejabatan;
      this.userProfile.nohp = this.updatenohp;
      this.userProfile.tanggallahir = this.updatetgllahir;
    },
    cancelupdate() {
      this.update = false;
      this.resetpassword();
    },
  },
};
</script>

<style>

.no-scrollbar-list {
  max-height: 100vh; /* Set the maximum height to the viewport height */
  overflow-y: auto; /* Add a scrollbar only if the content overflows the max height */
}

.full-height-row {
  height: 100%; /* Make the v-row fill the available height within the v-list */
  /* You can add more styling here if needed */
}
.text-header {
  font-family: "Open Sans";
  font-weight: 500;
  font-size: 24px;
  color: black;
}
.text-subheader {
  font-family: "Open Sans";
  font-weight: 300;
  font-size: 14px;
  opacity: 50%;
}
.text-title {
  font-family: "Open Sans";
  font-weight: 500;
  font-size: 18px;
  color: black;
}
.text-subtitle {
  font-family: "Open Sans";
  font-weight: 500;
  font-size: 14px;
  opacity: 40%;
}
.text-content {
  font-family: "Poppins";
  font-weight: 500!important;
  font-size: 14px!important;
  color: black!important;;
  background: transparent!important;
  padding: 0!important;
  opacity: 40%;
}
@media (max-width: 40em) {
  .text-content{
    background: white;
  }
  .text-input-field {
    font-size: 14px;
  }
  .text-input {
    font-size: 14px;
  }
  .text-forget {
    font-size: 12px;
  }
  .text-kontak {
    font-size: 12px;
  }
  .text-checkbox {
    font-size: 12px;
  }
  .custom-background{
    background: transparent;
  }
}
</style>