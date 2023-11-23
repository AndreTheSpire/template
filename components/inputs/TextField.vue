<template>
 <label v-if="label" class="paragraph-normal text-label weight--600 " :for="name">{{ label }}</label>
    <v-text-field ref="input"
      v-if="name=='password'"
      v-model="inputValue"
      :name="name"
      :placeholder="placeholder"
      variant="outlined"
      class="paragraph-normal my-2 text-input"
      :type="!showText && type === 'password' ? 'password' : 'text'"
      :append-inner-icon="showText ? 'mdi-eye' : 'mdi-eye-off'"
    prepend-inner-icon="mdi-lock"
    @click:append-inner="showText = !showText" />

    <v-text-field ref="input"
      v-else
      v-model="inputValue"
      :name="name"
      variant="outlined"
      :placeholder="placeholder"
      class="paragraph-normal my-2 text-input">

    </v-text-field>
</template>

<script>
    export default {
        name: 'TextBox',
  props: {
    initialValue: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    // rules: {
    //   type: Array,
    //   default () {
    //     // Rules bisa di check di https://vuetifyjs.com/en/components/inputs/#rules
    //     return []
    //   }
    // },
    value: {
      type: String,
      default: ''
    },
    // disabled: {
    //   type: Boolean,
    //   default: false
    // },
    // error: {
    //   type: Boolean,
    //   default: false
    // },
    // success: {
    //   type: Boolean,
    //   default: false
    // },
    // errorMessages: {
    //   type: Array,
    //   default () {
    //     return []
    //   }
    // },

  },
  data () {
    return {
      
      showText: false,
      isTelInputError: false,
      dataError: false,
      dataMessages: [],
      telObject: null,
      state: 'default',
      inputValue: '',
      inputOptions: {
        // Untuk vue-tel-input: https://iamstevendao.github.io/vue-tel-input/documentation/props.html
        id: 'username',
        name: 'username'
      },

    }
  },
  watch: {
    inputValue () {
      console.log("masuk input");
      console.log(this.inputValue);
      this.$emit("update:modelValue", this.inputValue);
    },
    value () {
      this.inputValue = this.value
    }
  },
  mounted () {
    this.inputValue = this.initialValue
  },
    }
</script>

<style lang="scss" scoped>
.text-label{
  color: $secondary-bold-color;
}
.text-input{
  color: $primary-color;
  font-size: 32px!important;
}
.v-text-field :deep(input) {
    font-size: 1rem;
    font-weight: 600;
    font-family: "Open Sans";
}

</style>