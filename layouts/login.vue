<template>
  <v-app class="custom-container">
    <v-main>
      <v-row class="h-100">
        <v-col cols="12" md="6" class="left-side">
          <v-card flat class="left-content">
            <div class="headline-img first-left">
              <v-img height="500px" cover :src="content[contentselected].url"></v-img>
            </div>
            <div class=" second-left">
              <div class="heading-4 weight--600 text-heading">{{content[contentselected].name}}</div>
              <div class="paragraph-small weight--400 text-content">{{content[contentselected].content}}</div>
              <div>
                <v-radio-group v-model="contentselected" inline>
                  <v-radio value="0"></v-radio>
                  <v-radio value="1"></v-radio>
                  <v-radio value="2"></v-radio>
                </v-radio-group>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" class=" right-side">
          <v-card flat class="right-content">
            <slot />
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      drawer: true,
      content:[
        {
          name :"Head line 1",
          content:"berita hari ini",
          url:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        },
        {
          name :"Head line 2",
          content:"berita hari ini",
          url:"https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
        },
        {
          name :"Head line 3",
          content:"berita hari ini",
          url:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        }
      ],
      contentselected:"0",
    };
  },
  methods: {
    resetindex() {
      console.log("kepanggil");
      this.selectedIndex = -1;
      console.log(this.selectedIndex);
    },
  },
  mounted() {
    //  if (this.$cookies.get('loginProfile')) {
    //  }else{
    //   this.$router.push('/');
    //  }
  },
};
</script>

<style lang="scss" scoped>
.sidenav {
  background-color: $primary-color;
  color: $neutral-4;
}
.first-left {
  min-height: 500px;
  background-color: darkgray;
}
.second-left {
  min-height: 200px;
  background-color: black;
  padding-left: 55px;
   padding-top: 55px;
  color: white;
}
.left-side {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 0px;
}
.left-content {
  min-width: 540px;
  min-height: 700px;
  border-radius: 12px 0px 0px 12px;
}
.right-side {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
}
.right-content {
  min-width: 540px;
  min-height: 700px;
  background-color: $neutral-4;
  padding: 45px 65px 45px 65px;
    border-radius: 0px 12px 12px 0px;
}
.custom-container {
  // background-image: url('/public/img/logoyg.png');
  // background-size: cover
  background-color: pink;
}
.headline-img {
  color: gray;
}
.text-heading{
color: white;
}
.text-content{
color: #A1A1A1;
}
// .text-header{
//   font-size: 24px;
//   font-weight: 700;
//   font-family: 'Open Sans';
//   line-height: 32px;
//   color: white;
// }
// .selected-item {
//   background-color:#0D8DDA; /* Change this to your desired background color */
// }
// .background-container{
//   background-color: #F0F0F0;/* Adjust this property as needed */
// }
// .text-title{
//   font-family: "Open Sans";
// font-size: 28px;
// font-style: normal;
// font-weight: 700;
// line-height: 22px;
// }
@media (max-width: 63em) {
 .left-side {
    display: none;
  }
  .right-side {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 12px!important;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
@media (max-width: 40em) {
  .left-side {
    display: none;
  }
  .left-content {
    min-width: auto;
    min-height: auto;
  }
  .right-side {
    display: flex;
    align-items: center;
    justify-content: center;
      border-radius: 12px!important;
    padding: 0;
  }
  .right-content {
    background-color: transparent;
    padding: 5%;
    min-width: auto;
    min-height: auto;
  }
}
.full-height-width {
  width: 100%;
  height: 100%;
}
.your-carousel-content {
  box-sizing: border-box;
}
</style>