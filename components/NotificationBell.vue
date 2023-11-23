
<template>
  <div class="d-flex justify-center">
    <v-menu>
      <template v-slot:activator="{ props }">
         <v-btn
          
          min-width="0"
          text
          v-bind="props"
          v-on="on"
        >
          <v-badge
            color="red"
            overlap
            bordered
          >
            <template v-slot:badge>
              <span>{{notreadnification}}</span>
            </template>

            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      </template>
       <v-list class="rounded-list">
      <v-list-item
        v-for="(item, index) in NotificationItems"
        :key="index"
        @mouseover="hoverItem(index)"
        @click="pindahprofile(index)"
        :class="{ 'hovered-item': hoveredIndex === index }"
        :subtitle="item.subtitle"

      >
      </v-list-item>
    </v-list>
    
    </v-menu>




  </div>
</template>

<script>
export default {
  data() {
    return {
        notreadnification:5,
         NotificationItems: [
        { title: 'Profile Saya', subtitle:'Notifikasi 1',icon:'mdi-account' },
         { title: 'Edit Profile', subtitle:'Notifikasi 1',icon:'mdi-account-edit' },
      ],
    };
  },
  methods:{
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
  }
};
</script>

<style lang="scss" scoped>

</style>