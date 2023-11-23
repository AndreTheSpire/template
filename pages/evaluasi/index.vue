<template>
  <v-container id="Evaluasi" fluid tag="section">
    <!-- <v-dialog v-model="filteractive" fluid class="text-filter">
      <v-card
        flat
        class="rounded-lg d-flex justify-center align-start custom-overflow pa-5"
      >
        Filter
        <v-btn
          color="red"
          class="my-3"
          block
          @click="
            selectfilter.value = 2;
            filteractive = false;
          "
          >Belum dikerjakan</v-btn
        >
        <v-btn
          color="green"
          class="mb-3"
          block
          @click="
            selectfilter.value = 3;
            filteractive = false;
          "
          >Sudah dikerjakan</v-btn
        >
      </v-card>
    </v-dialog> -->
    <v-row v-if="$vuetify.display.mdAndUp">
      <v-col cols="12" sm="10">
        <div class="tips-card d-flex d-column">
          <div class="pt-2"><v-icon>mdi-check-circle</v-icon></div>
          <div class="py-2 px-2 paragraph-small weight--400 warn">
            Evaluasi ini untuk mengumpulkan data, pendapat, dan umpan balik dari
            berbagai pemangku kepentingan, seperti siswa, guru, orang tua, staf
            sekolah, dan administrasi sekolah. Evaluasi sekolah bertujuan untuk
            meningkatkan kualitas pendidikan, mengidentifikasi area perbaikan,
            dan membantu sekolah dalam pengambilan keputusan.
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row class="mt-5">
      <!-- <template v-for="(KelasUser) in dataKelasUser"> -->
      <v-col cols="12">
        <v-card class="evaluation-card" flat>
          <!-- Card Header -->

          <!-- <v-card-text class="text-center bold-text">
      <v-icon>mdi-file-document-arrow-right-outline</v-icon>Lihat Evaluasi
    </v-card-text>

    
    <v-card-text class="text-center">
      <h2>Daftar Evaluasi Terbaru</h2>

     
    </v-card-text> -->

          <div class="d-flex flex-row mr-auto pl-5">
            <!-- <span class="d-flex align-center justify-center mr-5 bold-text">Filter By</span> -->
            <!-- <v-text-field
      v-model="search"
      label="Search"
      clearable
      class="mb-4 full-width"
    ></v-text-field> -->

            
          </div>
          <v-table v-if="$vuetify.display.mdAndUp">
            <thead>
              <tr>
                <th class="text-center border paragraph-normal weight--400 theader">Status</th>
                <th class="text-center border paragraph-normal weight--400 theader">Nama Orang</th>
                <th class="text-center border paragraph-normal weight--400 theader">Jabatan</th>
                <th class="text-center border paragraph-normal weight--400 theader">Tanggal</th>
                <th class="text-center border paragraph-normal weight--400 theader">
                  <v-row>
                    <v-col cols="7" class="d-flex justify-end align-center paragraph-normal weight--400">  Action</v-col>
                    <v-col cols="5" class="d-flex justify-end align-center">
                      <v-menu location="bottom" :disable-click="true">
                    <template v-slot:activator="{ props }">
                      <v-btn
                        icon="mdi-filter"
                        v-bind="props"
                        variant="text"
                      ></v-btn>
                    </template>

                    <v-list min-width="250px">
                      <v-list-item >
                        <v-list-item-title>Filter</v-list-item-title>
                  

                        <!-- <v-list-item class="px-0">
                          <v-btn
                            block
                            width="full"
                            color="blue"
                            @click="selectfilter.value = 1"
                            >Semua</v-btn
                          >
                        </v-list-item>
                        <v-list-item class="px-0">
                          <v-btn
                            block
                            class="filter-btn-red"
                            @click="selectfilter.value = 2"
                            >Belum Mengerjakan</v-btn
                          >
                        </v-list-item>
                        <v-list-item class="px-0">
                          <v-btn
                            block
                            class="filter-btn-green"
                            @click="selectfilter.value = 3"
                            >Sudah Mengerjakan</v-btn
                          >
                        </v-list-item> -->
                        <v-select
                          v-model="selectfilter"
                          :items="itemsfilter"
                          density="compact"
                          label="Select"
                          item-title="state"
                          
                          item-value="value"
                          return-object
                          single-line
                           @click.stop
                          :error="false"
                          :hint="false"
                          :bg-color="selectfilter.value===1? 'blue' :selectfilter.value===2?'red':'green'"
                          :item-color="selectfilter.value===1? 'blue' :selectfilter.value===2?'red':'green'"
                        ></v-select>
                      </v-list-item>
                    </v-list>
                  </v-menu></v-col>

                  </v-row>
                 
                  
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in listPairings" :key="item._id">
                <td scope="col" v-if="item.doneAt">
                  <div class="border-green paragraph-normal weight--600">Sudah Selesai</div>
                </td>
                <td scope="col" v-else>
                  <div class="border-red paragraph-normal weight--600">Belum dikerjakan</div>
                </td>

                <td scope="col" class="paragraph-normal weight--600">{{ item.evaluatee.fullname }}</td>

                <td scope="col" class="paragraph-normal weight--600">
                  <span v-if="item.evaluatee.roles">guru</span>
                  <span v-else>Murid</span>
                </td>
                <td scope="col" class="paragraph-normal weight--600">
                  <span v-if="item.doneAt">{{ item.doneAt }}</span
                  ><span v-else>-</span>
                </td>
                <td scope="col">
                  <v-btn
                    color="blue"
                    :disabled="item.doneAt"
                    @click="mulaievaluasi(item._id)"
                    >Mulai Mengerjakan</v-btn
                  >
                </td>
              </tr>
            </tbody>
          </v-table>

          <div class="card-width" v-else>
            <v-row class="mx-0 d-flex justify-center">
              <v-col cols="5" class="d-flex justify-end pr-0">
                <div>
                  <v-avatar class="ma-3" size="59">
                    <v-img src="/img/logopfp.png"></v-img>
                  </v-avatar>
                </div>
              </v-col>
              <v-col
                cols="5"
                class="d-flex align-center justify-start text-header pl-0"
                >Sekolah Yoga
              </v-col>
            </v-row>

            <v-row class="mx-0 d-flex align-right justify-end">
               <v-bottom-sheet v-model="filteractive">
    <template v-slot:activator="{ props }">
      <div class="text-center">
        <v-btn
          v-bind="props"
          color="purple"
          size="x-large"
          text="Filter"
        ></v-btn>
      </div>
    </template>

    <v-list>
      <v-list-subheader>Filter</v-list-subheader>

      <v-list-item
        v-for="item in itemsfilter"
        :key="item.value"
      >

      <v-btn
          :color="item.color"
          block
          @click="
            selectfilter.value = item.value;
            filteractive = false;
          "
          class="text-btn-select"
          >{{item.state}}</v-btn
        >
      </v-list-item>
    </v-list>
  </v-bottom-sheet>
            </v-row>
            <template v-for="item in listPairings" :key="item._id">
              <v-card class="my-5 mx-2 card-text">
                <v-card-title
                  class="d-flex justify-space-between align-center pt-0 pl-0"
                  ><div class="border-green" v-if="item.doneAt">
                    Sudah Selesai
                  </div>
                  <div class="border-red" v-else>Belum dikerjakan</div>
                  <div class="text-date">11/12/2002</div></v-card-title
                >

                <v-card-text class="text-card-content pb-0">{{
                  item.evaluatee.fullname
                }}</v-card-text>
                <v-card-text class="d-flex justify-space-between align-center"
                  ><div class="text-card-content">
                    <span v-if="item.evaluatee.roles">guru</span>
                    <span v-else>Murid</span>
                  </div>
                  <div>
                    <v-btn
                      class="text-btn text-none"
                      size="x-large"
                      variant="flat"
                      :disabled="item.doneAt"
                      @click="mulaievaluasi(item._id)"
                      >Mulai mengerjakan</v-btn
                    >
                  </div></v-card-text
                >
              </v-card>
            </template>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="$vuetify.display.smAndDown">
      <v-col cols="12">
        <div class="tips-card d-flex d-column">
          <div class="pt-2 px-2"><v-icon>mdi-check-circle</v-icon></div>
          <div class="py-2 paragraph-small weight--400 warn">
            Evaluasi ini untuk mengumpulkan data, pendapat, dan umpan balik dari
            berbagai pemangku kepentingan, seperti siswa, guru, orang tua, staf
            sekolah, dan administrasi sekolah. Evaluasi sekolah bertujuan untuk
            meningkatkan kualitas pendidikan, mengidentifikasi area perbaikan,
            dan membantu sekolah dalam pengambilan keputusan.
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ProfileStore } from "../stores/profilestore";
export default {
  name: "KelasUser",

  data() {
    return {
      dataKelasUser: null,
      filteractive: false,
      profilestore: ProfileStore(),
      search: "",
      itemsPerPage: 5,
      filteredevaluation: [],
      currentPage: 1,
      selectfilter: { state: "Semua", value: 1 },
      itemsfilter: [
        { state: "Semua", value: 1 ,color:"blue"},
        { state: "Belum Mengerjakan", value: 2, color:"red" },
        { state: "Sudah Selesai", value: 3, color:"green" },
      ],
      items: [
        {
          status: "belum",
          tanggal: "11/08/2023",
          name: "susanto",
          jabatan: "kepala sekolah",
        },
        {
          status: "belum",
          tanggal: "11/08/2023",
          name: "stanley",
          jabatan: "guru",
        },
        {
          status: "belum",
          tanggal: "11/08/2023",
          name: "andrian",
          jabatan: "guru",
        },
        {
          status: "belum",
          tanggal: "11/08/2023",
          name: "susanto",
          jabatan: "office boy",
        },
        {
          status: "belum",
          tanggal: "11/08/2023",
          name: "patrick",
          jabatan: "guru",
        },
        {
          status: "belum",
          tanggal: "11/08/2023",
          name: "maria",
          jabatan: "kepala sekolah",
        },
      ],
    };
  },
  computed: {
    // filteredItems() {
    //   this.currentPage=1;
    //   return this.items.filter((item) => {
    //     return item.name.toLowerCase().includes(this.search.toLowerCase());
    //   });
    // },
    // paginatedItems() {

    //   const start = (this.currentPage - 1) * this.itemsPerPage;
    //   const end = start + this.itemsPerPage;
    //   return this.filteredItems.slice(start, end);
    // },
    // totalPages() {
    //   return Math.ceil(this.filteredItems.length / this.itemsPerPage);
    // },
    listPairings() {
      const listPairingStore = this.profilestore.profile.listPairings.slice(0);
      if (this.selectfilter.value == 1) {
        return listPairingStore;
      } else if (this.selectfilter.value == 2) {
        return listPairingStore.filter((item) => !item.doneAt);
      } else {
        return listPairingStore.filter((item) => item.doneAt);
      }

      return this.data.filter((item) => item.city === this.selectedItem);
    },
  },

  methods: {
    changefilter() {},
    complete(index) {
      this.list[index] = !this.list[index];
    },
    changePage(page) {
      this.currentPage = page;
    },
    mulaievaluasi(id) {
      console.log(id);
      this.$router.push({
        path: "/evaluasi/isievaluasi",
        query: { id: id }, // Replace 123 with the actual value you want to pass
      });
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.width-header {
  width: 40%;
}
.border-green {
  border: 1px $semantic-green solid;
  color: $semantic-green;
  border-radius: 10px;
  padding: 5px 39px 5px 39px;
}
.border-red {
  border: 1px $semantic-danger solid;
  color: $semantic-danger;
  border-radius: 10px;
  padding: 5px 39px 5px 39px;
}
.text-date {
  font-style: italic;
}
.text-card-content {
  font-style: normal;
}
.text-btn {
  color: white;
  background-color: $secondary-medium-color;
}
.text-btn .v-btn__content {
  text-transform: none;
}
.tips-card {
  border-radius: 20px;
  background-color: #e4e4e4;
  padding-left: 5px;
  padding-right: 5px;
}
.hover-div:hover {
  /* Add your hover effect styles here */
  /* Example styles: */
  background-color: #f0f0f0;
  cursor: pointer;
}
.evaluation-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.full-width {
  width: 50%;
}
.text-header {
  font-family: "Open Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
}
.text-center {
  text-align: center;
}
.card-width {
  width: 100%;
  background: transparent;
  background-color: transparent;
  border: none;
}
.bold-text {
  font-weight: bold;
}
.border {
  border: 1px solid #000; /* Add the border style you prefer */
  padding: 10px; /* Adjust padding as needed */
  background-color: var(
    --primary-color
  ); /* Change the header background color */
  color: white;
}
.custom-checkbox .v-input__slot {
  justify-content: center;
  align-items: center;
  text-align: center;
}
.custom-checkbox .v-input {
  text-align: center !important;
}
.table-container {
  overflow-x: auto;
}

.fullwidth {
  width: 100%;
  margin-bottom: 2vh;
  margin-top: 0vh;
}
.borderupload {
  border: 1px solid black;
}
table td {
  text-align: center;
}
table th {
  text-align: center;
  padding: 10px;
  margin: 10px;
}
.v-table {
  width: 100%;
  border: 1px solid #ccc;
}
.v-table td {
  text-align: center;
}
.v-table th {
  margin: 10px;
}
.card-text .v-sheet.v-card{
  border-radius: 
7px, 10px, 10px, 10px;
}

.mobile {
  color: #333;
}
/* .tdmobile {
  width: 100% !important;
  border: 1px black solid;
} */
.text-filter {
  align-self: flex-end !important;
}
.flex-content {
  padding: 0 !important;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.flex-item {
  padding: 5px;
  width: 100%;
  height: auto;
}
.flex-item-field {
  padding: 5px;
  width: 100%;
  height: auto;
}
.filter-btn-red {
  color: white;
  background-color: red;
}
.filter-btn-green {
  color: white;
  background-color: green;
}
.theader{
  color: $neutral-1;
}
.warn{
  font-family: "Poppins";
}
.text-btn-select{
  font-size: 16px;
  font-weight: 400;
}
@media (max-width: 40em) {
  .border-green {
    padding: 2px;
    font-size: 15px;
    font-weight: 600;
    border-radius: 
7px, 0px, 10px, 0px!important;
  }
  .text-header{
    font-size: 18px;
    font-weight: 700;
  }
  .border-red {
    padding: 2px;
    font-size: 15px;
    font-weight: 600;
    border-radius: 
7px, 0px, 10px, 0px!important;
  }
  .text-card-content{
    font-size: 16px;
    font-weight: 600;
  }
  .text-date{
font-size: 14px;
font-style: italic;
font-weight: 600;
  }
  .text-btn{
    font-size: 10px;
    font-weight: 600;
  }
  .v-dialog {
    align-items: flex-end;
  }
  .v-dialog .v-overlay__content {
    margin: 0px;
  }
}
</style>

