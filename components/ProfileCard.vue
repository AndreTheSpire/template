<template>
  <v-card class="my-5 custom-background" flat>
    <!-- <v-card-title> Informasi Pribadi </v-card-title>
     <v-divider
      :thickness="4"
      class="border-opacity-100"
      color="black"
    ></v-divider> -->
    <v-card-text>
      <v-row v-if="update==false">
        <v-col cols="12" class="mx-5">
          <div class="d-flex d-column justify-centers align-center">
          <v-avatar size="120">
            <img
              src="https://cdn.vuetifyjs.com/images/john.png"
              alt="User Avatar"
            />
          </v-avatar>
          <div class="ml-5">
            <div class="text-header">Informasi Akun</div>
            <div class="text-subheader">Update informasi akun anda</div>
          </div>
          </div>
        </v-col>
        <v-col cols="12" class="pt-0">
          <v-list class="pa-5 pt-0 custom-background">
            <v-row>
              <v-col cols="12" >
                <v-list-item class="px-0">
                <div class="text-title">Data Pribadi</div>
                </v-list-item>
              </v-col>
              <v-col cols="12" sm="6">
                <v-list-item class="px-0">
                  <v-list-item-title class="text-subtitle">Nama:</v-list-item-title>
                  <v-list-item-subtitle class="text-content">{{
                    userProfile.nama
                  }}</v-list-item-subtitle>
                </v-list-item>
              </v-col>
              <v-col cols="12" sm="6">
                <v-list-item class="px-0">
                  <v-list-item-title class="text-subtitle">NIP:</v-list-item-title>
                  <v-list-item-subtitle class="text-content">{{
                    userProfile.nip
                  }}</v-list-item-subtitle>
                </v-list-item >
              </v-col>
              <v-col cols="12" sm="6">
                <v-list-item class="px-0">
                  <v-list-item-title class="text-subtitle">Jabatan:</v-list-item-title>
                  <v-list-item-subtitle class="text-content">{{
                    userProfile.jabatan
                  }}</v-list-item-subtitle>
                </v-list-item>
              </v-col>
              <v-col cols="12" sm="6">
                <v-list-item class="px-0">
                  <v-list-item-title class="text-subtitle">No Handphone:</v-list-item-title>
                  <v-list-item-subtitle class="text-content"> <v-icon class="mr-2">mdi-phone</v-icon> {{
                    userProfile.nohp
                  }}</v-list-item-subtitle>
                </v-list-item>
              </v-col>
              <v-col cols="12" sm="6">
                <v-list-item class="px-0">
                  <v-list-item-title class="text-subtitle">Email:</v-list-item-title>
                  <v-list-item-subtitle   class="text-content"> <v-icon class="mr-2">mdi-email</v-icon> {{
                    userProfile.email
                  }}</v-list-item-subtitle>
                </v-list-item>
              </v-col>
              <v-col cols="12" sm="6">
                <v-list-item class="px-0">
                  <v-list-item-title class="text-subtitle">Tanggal Lahir:</v-list-item-title>
                  <v-list-item-subtitle class="text-content d-flex justify-space-between"> <span>{{
                    userProfile.tanggallahir
                  }}</span> <v-icon>mdi-calendar-month</v-icon></v-list-item-subtitle>
                </v-list-item>
              </v-col>
              
         <!-- <v-col cols="12" >
            <v-btn class="mx-5" @click="doupdate()">Edit</v-btn>
         </v-col> -->
            </v-row>
            <!-- Add more profile information as needed -->
          </v-list>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="12" class="mx-5">
          <v-avatar size="200">
            <img
              src="https://cdn.vuetifyjs.com/images/john.png"
              alt="User Avatar"
            />
          </v-avatar>
        </v-col>
        <v-col cols="12" class="custom-background">
          <v-list class="pa-5 custom-background">
            <v-row>
              <v-col cols="12" sm="6">
                <v-list-item>
                  <v-list-item-title>Nama:</v-list-item-title>
                   <v-text-field
                    v-model="updatename"
                    placeholder="Enter your Name"
                ></v-text-field>
                </v-list-item>
              </v-col>
              <v-col cols="12" sm="6">
                <v-list-item>
                  <v-list-item-title>NIP:</v-list-item-title>
                  <v-text-field
                    v-model="updatenip"
                    placeholder="Enter your Name"
                ></v-text-field>
                </v-list-item>
              </v-col>
              <v-col cols="12" sm="6">
                <v-list-item>
                  <v-list-item-title>Jabatan:</v-list-item-title>
                  <v-text-field
                    v-model="updatejabatan"
                    placeholder="Enter your Name"
                ></v-text-field>
                </v-list-item>
              </v-col>
              <v-col cols="12" sm="6">
                <v-list-item>
                  <v-list-item-title>No Handphone:</v-list-item-title>
                <v-text-field
                    v-model="updatenohp"
                    placeholder="Enter your Name"
                ></v-text-field>
                </v-list-item>
              </v-col>
              <v-col cols="12" sm="6">
                <v-list-item>
                  <v-list-item-title>Email:</v-list-item-title>
                  <v-text-field
                    v-model="updateemail"
                    placeholder="Enter your Name"
                ></v-text-field>
                </v-list-item>
              </v-col>
              <v-col cols="12" sm="6">
                <v-list-item>
                  <v-list-item-title>Tanggal Lahir:</v-list-item-title>
                 <v-text-field
                    v-model="updatetgllahir"
                    placeholder="Enter your Name"
                ></v-text-field>
                </v-list-item>
              </v-col>
         <v-col cols="12">
            <v-btn @click="confirmupdate()" class="mx-5">Confirm</v-btn>
            <v-btn @click="cancelupdate()">Cancel</v-btn>
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
import { ProfileStore } from '../stores/profilestore';
export default {
  data() {
    return {
      profilestore:ProfileStore(),
      update: false,
      updatename:null,
      updatenip:null,
      updateemail:null,
      updatejabatan:null,
      updatenohp:null,
      updatetgllahir:null,
      userProfile: {
        nama: "John Doe",
        email: "johndoe@example.com",
        nip: "11111",
        jabatan: "kepala sekolah",
        nohp: "08123421112",
        tanggallahir: "13-10-2000",
        // Add more profile information here
      },
    };
  },
  methods:{
    getprofile(){
      console.log(this.profilestore.profile);
      this.userProfile.nama=this.profilestore.profile.fullName;
      this.userProfile.email=this.profilestore.profile.email;
      this.userProfile.nip=this.profilestore.profile.nis;
      this.userProfile.nohp=this.profilestore.profile.phoneNumber;
      this.userProfile.jabatan=this.profilestore.profile.jabatan;
      this.userProfile.tanggallahir=this.profilestore.profile.tanggallahir;
    },
    setprofile(){

    },
    doupdate(){
       
         this.updatename=this.userProfile.nama;
         this.updatenip=this.userProfile.nip;
         this.updateemail=this.userProfile.email;
         this.updatejabatan=this.userProfile.jabatan;
         this.updatenohp=this.userProfile.nohp;
         this.updatetgllahir=this.userProfile.tanggallahir;
         this.update=true;
    },
    confirmupdate(){
        this.update=false;
        this.userProfile.nama=this.updatename;
        this.userProfile.nip=this.updatenip;
        this.userProfile.email=this.updateemail;
        this.userProfile.jabatan=this.updatejabatan;
        this.userProfile.nohp=this.updatenohp;
        this.userProfile.tanggallahir=this.updatetgllahir;
    },
    cancelupdate(){
        this.update=false;
    }
  }, mounted(){
    this.getprofile();
    }
};
</script>

<style scoped>
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
  font-weight: 400!important;
  font-size: 16px!important;
  color: black!important;;
  padding: 5%!important;
  opacity: 100%;
}
.text-input {
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 16px;
  line-height: 21.79px;
  color: #457a9a;
  padding-bottom: 5px;
  background-color: transparent;
  background: transparent;
}
.text-input-field {
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 16px;
  line-height: 21.79px;
  color: #365466;
  border-radius: 8px;
  background-color: transparent;
  background: transparent;
}
.text-btn {
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 14px;
  line-height: 21.79px;
  color: white;
  background-color: #0d8dda;
}
.text-forget {
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  justify-items: center;
  align-items: center;
  color: #aeaeae;
  background-color: transparent;
  background: transparent;
}
.text-checkbox {
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #457a9a;
  background-color: transparent;
}
.text-kontak {
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 14px;
  line-height: 19.07px;
  color: #365466;
  background-color: transparent;
}
@media (max-width: 40em) {
  .text-content{
    background: white!important;;
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