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
      getTextAndBorder() {
         return this.dataStore.showErrorArr[this.sIndex] ? 'outline-neo-red' : 'outline-neo-grayish-blue';
      },
      getGap() {
         return this.dataStore.showErrorArr[this.sIndex] ? 'gap-[6px] text-neo-red' : '';
      }
   }
}
</script>
<template>
   <div :class="` relative flex ${getGap} flex-col text-neo-dark-blue`">
      <input @blur="dataStore.checkInput(sIndex, typeText)" @keyup="dataStore.checkInputOnKey(sIndex)"
         :class="` h-[56px] w-[279px] dsk:w-[460px] px-5 dsk:px-8 text-[14px] leading-[26px] tracking-[.25px] font-semibold outline outline-1 ${getTextAndBorder} rounded-md`"
         :type="typeText" :placeholder="phText" maxlength="28" v-model="dataStore.inputTextArr[sIndex]">
      <IconError v-show="dataStore.showErrorArr[sIndex]" class=" absolute right-4 top-4" />
      <h4 v-show="dataStore.showErrorArr[sIndex]"
         class=" dsk:self-end text-neo-red text-[11px] leading-[17px] font-medium italic">
         {{ redText }}
      </h4>
      <!-- StateArr: {{ dataStore.stateArr[sIndex] }}
      <br>
      ErrorArr: {{ dataStore.showErrorArr[sIndex] }} -->
   </div>
</template>