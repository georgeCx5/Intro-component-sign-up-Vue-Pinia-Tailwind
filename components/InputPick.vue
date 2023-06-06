<script>
import { useDataStore } from '@/stores/DataStore';
import { mapStores } from 'pinia'

import IconError from '@/assets/images/icon-error.svg?component';
export default {
   data() {
      return {
         emailRgx: new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
         inputText: '',
         redText: `${this.phText} cannot be empty`,
      }
   },
   mounted() {
      if (this.typeText == 'email') {
         this.redText = 'Looks like this is not an email';
      }
   },
   props: {
      phText: String,
      typeText: {
         type: String,
         default: 'text'
      },
      sIndex: {
         type: Number,
         required: true,
      }
   },
   components: {
      IconError,
   },
   computed: {
      ...mapStores(useDataStore),
   },
   methods: {
      checkInput() {
         if (this.inputText.length <= 0) {
            this.dataStore.stateArr[this.sIndex] = true;
         }
         if (this.typeText == 'email') {
            this.dataStore.stateArr[this.sIndex] = !this.emailRgx.test(this.inputText);
            return;
         }
         if (this.inputText.length > 0) {
            this.dataStore.stateArr[this.sIndex] = false;
         }
      }
   }
}
</script>
<template>
   <div class=" relative flex flex-col gap-[6px] h-[78px] text-neo-dark-blue">
      <input @blur="checkInput()" class=" h-[56px] w-full px-5 outline outline-1 outline-neo-grayish-blue rounded-md"
         :type="typeText" :placeholder="phText" maxlength="20" v-model="inputText">
      <IconError v-show="dataStore.stateArr[sIndex]" class=" absolute right-4 top-4" />
      <div>
         <h4 v-show="dataStore.stateArr[sIndex]"
            class=" self-end text-neo-red text-[11px] leading-[17px] font-medium italic">{{ redText
            }}
         </h4>
      </div>
   </div>
</template>