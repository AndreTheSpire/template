<template>
  <v-card :flat="$vuetify.display.smAndDown" class="evaluation-card" :max-width="$vuetify.display.mdAndUp ? '55%' : '100%'" :min-height="$vuetify.display.mdAndUp ? '35%' :'15%'">

  <div class="d-flex justify-center align-center text-question">
{{soal.question}}
  </div>

    
    
      
  
    
  </v-card>
  <v-container>
         <v-radio-group v-model="selectedvalue" @input="addParentAnswer()" >
          <v-row  class="d-flex justify-center align-center" >
        <template v-for="(option, index) in soal.answers" :key="index">
         

      <v-col cols="10" sm="5" v-if="option.label">
        <v-card  class="pa-5 text-selected-answer" v-if="selectedvalue==option.value">
           <v-radio :value="option.value" >
            <template v-slot:label>
    <span class="text-selected-answer-label" >{{option.label}}</span>
      </template>
           </v-radio>
        </v-card>
         <v-card  class="pa-5 text-answer" v-else>
           <v-radio :value="option.value" >
              <template v-slot:label>
    <span class="text-answer-label" >{{option.label}}</span>
      </template>
           </v-radio>
        </v-card>
        
      </v-col>
        </template>
         </v-row>
        </v-radio-group>
   

    <!-- Mobile layout: 1 choice per row -->
     
    
</v-container>
</template>

<script>
  export default {
    name: 'MaterialKelasCard',
    data: () => ({
      show: false,
      waktumulai:" : ",
      selectedvalue:null,
      waktuselesai:" : ",
      selectedChoice: [], // Stores the selected choices
       options: [
        { label: 'Choice 1', value: 'choice1' },
        { label: 'Choice 2', value: 'choice2' },
        { label: 'Choice 3', value: 'choice3' },
        { label: 'Choice 4', value: 'choice4' },
      ],
    }),
    props: {
      soal: {
        type: Object,
      },
      index:{
        type:Number,
      },
      addAnswer:Function,
      selected:{
        type:Array,
      }
      
    },

    computed: {
      classes () {
        return {
          'v-card--material--has-heading': this.hasHeading,
        }
      },
      hasHeading () {
        return Boolean(this.$slots.heading || this.title || this.icon)
      },
      hasAltHeading () {
        return Boolean(this.$slots.heading || (this.title && this.icon))
      },
    },
    methods:{
      addParentAnswer(){
        console.log("index");
        console.log(this.index+"-"+this.selectedvalue);
        this.addAnswer(this.index,this.selectedvalue);
      },
      setwaktupost(waktu){
        let timeconvert=new Date(waktu)+"";
        let timeconvertsplit=timeconvert.split(' ');
        let timevisual=timeconvertsplit[2]+" "+timeconvertsplit[1]+" "+timeconvertsplit[3]+" "+timeconvertsplit[4];
        return timevisual
      },
      clickKelas (id) {
        
      },
    },mounted(){
      console.log(this.selected);
      console.log(this.index);
      this.selectedvalue=this.selected[this.index].value;
    }
  }
</script>

<style lang="sass">
  .v-card--material
    &__avatar
      position: relative
      top: -0px
      margin-bottom: -32px

    &__heading
      position: relative
      top: 0px
      transition: .3s ease
      z-index: 1
</style>
<style scoped>
.hover-div:hover {
  /* Add your hover effect styles here */
  /* Example styles: */
  background-color: #f0f0f0;
  cursor: pointer;
}
.evaluation-card {
  display: flex;
  margin-top: 10vh;
  margin-left: 2vh;
  margin-right: 2vh;
  text-align: center;
  padding: 5%;
}
.text-question{
font-family: "Work Sans";
font-size: 17px;
font-style: normal;
font-weight: 600;
line-height: 22px; 
text-align: center;
}

.text-answer-label{
font-family: "Work Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 112.5% */
letter-spacing: 0.16px;

}
.text-selected-answer{
text-align: center;
background-color: 
#365466;
color: white;
border-radius: 25px;
}


.text-answer{

text-align: center;
border-radius: 25px;
}
.text-selected-answer-label{
font-family: "Work Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 112.5% */
letter-spacing: 0.16px;
}
.text-center {
  text-align: center;
  justify-items: center;
  
}
  .bold-text {
    font-weight: bold;
  }
  .line-spacing {
  line-height: normal; /* Adjust the value as needed to control line spacing */
}
.v-card .v-card-text {
    line-height: 2rem;
}
@media (max-width: 40em) {
  .evaluation-card {
  background: transparent;
  background-color: transparent;
  border: none;
}
  .text-question{
font-family: "Work Sans";
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 14px; 
text-align: center;
}
 .text-answer-label{
font-family: "Work Sans";
font-size: 12px!important;
font-style: normal;
font-weight: 400!important;
line-height: 14px;
color: #000000;
}
.text-selected-answer-label{
font-family: "Work Sans";
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 14px;

}
}
</style>
