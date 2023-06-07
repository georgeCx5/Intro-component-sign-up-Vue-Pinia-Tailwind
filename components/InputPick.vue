<script>
import { useDataStore } from '@/stores/DataStore';
import { mapStores } from 'pinia'

import IconError from '@/assets/images/icon-error.svg?component';
export default {
   data() {
      return {
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
      getBorder() {
         return this.dataStore.showErrorArr[this.sIndex] ? 'outline-neo-red' : 'outline-neo-grayish-blue';
      }
   }
}
</script>
<template>
   <div class=" relative flex flex-col gap-[6px] h-[78px] text-neo-dark-blue">
      <input @blur="dataStore.checkInput(sIndex, typeText)"
         @keyup="dataStore.checkInputOnKey(sIndex)"
         :class="` h-[56px] w-full px-5 outline outline-1 ${getBorder} rounded-md`" :type="typeText" :placeholder="phText"
         maxlength="20" v-model="dataStore.inputTextArr[sIndex]">
      <IconError v-show="dataStore.showErrorArr[sIndex]" class=" absolute right-4 top-4" />
      <div>
         <h4 v-show="dataStore.showErrorArr[sIndex]"
            class=" self-end text-neo-red text-[11px] leading-[17px] font-medium italic">
            {{ redText }}
         </h4>
      </div>
      StateArr: {{ dataStore.stateArr[sIndex] }}
      <br>
      ErrorArr: {{ dataStore.showErrorArr[sIndex] }}
   </div>
</template>