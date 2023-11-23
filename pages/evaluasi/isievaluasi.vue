<template>
  <v-container id="Evaluasi" fluid tag="section" v-if="!isSSR">
    <v-dialog v-model="onboard" width="auto" height="auto" persistent="">
      <v-card
        max-width="550"
        max-height="700"
        flat
        class="rounded-lg d-flex justify-center align-center custom-overflow"
      >
        <div class="d-flex justify-center align-center my-5">
          <v-img width="116" height="116" src="/img/surveyor.png"></v-img>
        </div>
        <v-card-text class="text-onboard-header text-center">
          Mari Simak Terlebih Dahulu Sebelum Mengisi Evaluasi?
        </v-card-text>
        <v-card-text class="text-onboard-subheader">
          1. Pilih Jawaban 1 yang benar
        </v-card-text>
        <v-card-text class="text-onboard-subheader">
          2. Klik Next lanjutkan ke pertanyaan berikutnya
        </v-card-text>
        <v-card-text class="text-onboard-subheader">
          3. Periksa Kembali Jawaban
        </v-card-text>
        <v-card-text class="text-onboard-subheader">
          4. Klik Tombol "Selesai" atau "Kirim"
        </v-card-text>
        <v-card-actions>
          <v-row class="ma-0">
            <v-col>
              <v-btn class="text-btn" block @click="onboard = false"
                ><v-icon>mdi-file-edit</v-icon> Mulai Mengisi</v-btn
              >
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="gagalnext" width="auto" height="auto">
      <v-card max-width="550">
        <v-card-text>
          silahkan menjawab soal evaluasi ini terdahulu sebelum lanjut
        </v-card-text>
        <v-card-actions>
          <v-row class="ma-0">
            <v-col>
              <v-btn color="blue" block @click="gagalnext = false">tutup</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="confirmselesai" width="auto" height="auto">
      <v-card max-width="550">
        <v-card-text>
          apakah anda yakin untuk menyelesaikan evaluasi ini?
        </v-card-text>
        <v-card-actions>
          <v-row class="ma-0">
            <v-col>
              <v-btn color="blue" block @click="cekselesai">confirm</v-btn>
            </v-col>
            <v-col>
              <v-btn color="blue" block @click="confirmselesai = false"
                >cancel</v-btn
              >
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-card flat>
      <div class="d-flex justify-center align-center pa-5">
        <template
          v-for="(item, index) in currentPairings.template.items"
          :key="index"
        >
          <v-btn
            :color="
              page === index ? 'black' : checkpage(index) ? 'blue' : 'white'
            "
            size="small"
            density="compact"
            style="padding:0px"
            @click="pageclick(index)"
            class="numbered-circle mx-1 py-3 d-flex"
            v-if="cekbtn(index, page)"
            >{{ index + 1 }}</v-btn
          >
        </template> 
      </div>

      <v-carousel
        v-model="page"
        hide-delimiters
        @click:next="handleNextClick()"
        @click:prev="handlePrevClick()"
        :show-arrows="false"
        height="auto"
      >
        <v-carousel-item
          v-for="(item, index) in currentPairings.template.items"
          :key="item.itemId"
        >
          <div class="d-flex flex-column justify-center align-center h-full">
            <EvaluasiDetailCard
              :soal="item"
              :selected="answers"
              :index="index"
              :addAnswer="addAnswer"
            />
          </div>
        </v-carousel-item>
      </v-carousel>

      <div
        class="d-flex justify-center align-center my-5"
        v-if="page != currentPairings.template.items.length - 1"
      >
      
        <v-btn @click="handlePrevClick" class="custom-btn-nav rounded-pill"
          >kembali</v-btn
        >
        <v-btn @click="handleNextClick" class="custom-btn-nav rounded-pill"
          >lanjut</v-btn
        >
      </div>
      <div class="d-flex justify-center align-center my-5" v-else>
     
        <v-btn @click="handlePrevClick" class="custom-btn-nav rounded-pill"
          >kembali</v-btn
        >
        <v-btn
          @click="confirmselesai = true"
          class="custom-btn-nav rounded-pill"
          >Selesai</v-btn
        >
      </div> 
    </v-card>
  </v-container>
</template>

<script>
import { ProfileStore } from "../stores/profilestore";
export default {
  data() {
    return {
      onboarddialog: true,
      page: 0,
      gagalnext: false,
      onboard: true,
      confirmselesai: false,
      tertinggi: 0,
      profilestore: ProfileStore(),
      confirmmulai: true,
       pageData: undefined,
      
      answers: [
        {
          value: "",
          name: "",
        },
      ],
      Evaluasi: [
        {
          id: 1,
          pertanyaan: "siapa yang hebat didalam tempat ini?",
        },
        {
          id: 1,
          pertanyaan: "siapa yang hebat 1",
        },
        {
          id: 1,
          pertanyaan: "siapa yang hebat 2",
        },
      ],
    };
  },
  
  computed: {
    isSSR() {
        console.log(process.server);
      return process.server;
    },
    currentPairings() {
      // if (!this.$store.state.users.profile.fetched) {
      //   return []
      // }
      this.fetch();
      const listPairingStore = this.profilestore.profile.listPairings;
      const getCurrentPairing = listPairingStore.find((x) => {
        return x._id === this.$route.query.id;
      });
      console.log("output");
      console.log(getCurrentPairing);
      return getCurrentPairing;
    },
  },
  methods: {
    async fetch () {
    let payload = null
    console.log("masuk fetch isievaluasi");
      try {
        payload =await $fetch('/.netlify/functions/evaluation-view')
      } catch (error) {
        console.log("gagal total")
      }
      console.log("payload ini");
    console.log(payload);
    this.pageData = payload
    console.log("berhasil gak nih?");
    console.log(this.pageData);
    },
    cekbtn(index, page) {
      if (page >= 3) {
        if (page <= this.currentPairings.template.items.length - 4) {
          if (index > page - 3 && index < page + 3) {
            return true;
          } else {
            return false;
          }
        } else {
          if (index >= this.currentPairings.template.items.length - 5) {
            return true;
          } else {
            return false;
          }
        }
      } else {
        if (index <= 4) {
          return true;
        } else {
          return false;
        }
      }
    },
    checkpage(index) {
      if (this.answers.length === 1) {
        return false;
      } else {
        if (this.answers[index].value != "") {
          return true;
        } else {
          return false;
        }
      }
    },
    pageclick(index) {
      if (this.page + 1 == index && this.answers[this.page].value != "") {
        this.page = index;
      } else if (this.page > index) {
        this.page = index;
      } else if (this.answers[index - 1].value != "") {
        this.page = index;
      } else {
        this.gagalnext = true;
      }
    },
    handleNextClick() {
      console.log("kanan ditekan");
      if (this.shouldAllowNextSlide()) {
        this.page = this.page + 1;
      } else {
        this.gagalnext = true;
        console.log(this.gagalnext);
      }
    },
    handlePrevClick() {
      if (this.shouldAllowPrevSlide()) {
        this.page = this.page - 1;
      } else {
      }
    },
    shouldAllowNextSlide() {
      console.log("value page");
      console.log(this.answers[this.page].value);
      if (this.answers[this.page].value == "") {
        return false;
      } else {
        return true;
      }
    },
    shouldAllowPrevSlide() {
      if (this.page <= 0) {
        return false;
      } else {
        return true;
      }
    },
    nextpage() {
      this.page = this.page + 1;
    },
    selesaimengerjakan() {
      console.log(this.profilestore);
      this.profilestore.setlistPairingfinish(this.$route.query.id);

      this.$router.push("/evaluasi/selesai");
    },
    cekselesai() {
      if (
        this.answers[this.currentPairings.template.items.length - 1].value != ""
      ) {
        this.selesaimengerjakan();
      } else {
        this.gagalnext = true;
        this.confirmselesai = false;
      }
    },
    addAnswer(index, radiovalue) {
      console.log("function terpanggil");
      console.log(index);
      console.log(radiovalue);
      if (this.answers.length === 1) {
        this.answers[0].name =
          this.currentPairings.template.items[0].groupId +
          "-" +
          this.currentPairings.template.items[0].itemId;
        for (
          let index = 1;
          index < this.currentPairings.template.items.length;
          index++
        ) {
          const element = this.currentPairings.template.items[index];

          this.answers.push({
            value: "",
            name: element.groupId + "-" + element.itemId,
          });
        }
      }
      // console.log(this.answers)
      this.answers[index].value = radiovalue;
      console.log(this.answers);
    },
    mounted() {
       console.log("mounted terjadi wtf");
      this.fetch();
      if (this.answers.length === 1) {
        this.answers[0].name =
          this.currentPairings.template.items[0].groupId +
          "-" +
          this.currentPairings.template.items[0].itemId;
        for (
          let index = 1;
          index < this.currentPairings.template.items.length;
          index++
        ) {
          const element = this.currentPairings.template.items[index];

          this.answers.push({
            value: "",
            name: element.groupId + "-" + element.itemId,
          });
        }
      }
      
    },
  },
};
</script>

<style lang="scss" scoped>
.v-dialog .v-dialog__content {
  overflow-y: hidden;
}
.custom-overflow {
  overflow-y: hidden;
}
.text-onboard-header {
  font-size: 25px !important;
  font-family: "Open Sans" !important;
  font-weight: 700 !important;
}
.text-onboard-subheader {
  font-size: 20px !important;
  font-family: "Open Sans" !important;
  font-weight: 500 !important;
  font-style: italic !important;
  text-align: center;
  padding-bottom: 0px !important;
}
.d-flex {
  display: flex;
}
.h-full {
  height: 90%;
}

.justify-center {
  justify-content: center;
}
.rounded-circle{
 border-radius: 20px;
 font-size: 17px;

}

.numbered-circle {
  width: 30px;
  border-radius: 50%!important;
  background-color: #2196F3; /* Set your desired background color */
  color: white; /* Set your desired text color */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
}
.align-center {
  align-items: center;
}
.custom-btn {
  min-width: 50px;
  background-color: rgb(58, 152, 246);
  color: white;
  margin: 5px;
}
.custom-btn-nav {
  min-width: 50px;
  background-color: white;
  color: #365466;
  margin: 5px;
  font-family: "Work Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px;
  border: 1px #365466 solid;
}
.text-btn {
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 24px;
  line-height: 21.79px;
  color: white;
  background-color: #0d8dda;
  border-radius: 10px;
}
.blurred {
  position: relative;
  z-index: 1;
}

.blurred::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
}
@media (max-width: 40em) {
  .text-onboard-header {
    font-size: 20px !important;
  }
  .text-onboard-subheader {
    font-size: 15px !important;
  }
}
</style>



