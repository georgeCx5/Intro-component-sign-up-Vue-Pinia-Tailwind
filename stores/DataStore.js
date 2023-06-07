import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
   state: () => ({
      emailRgx: new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
      stateArr: [true, true, true, true],
      showErrorArr: [false, false, false, false],
      inputTextArr: ['', '', '', ''],
   }),
   getters: {
      exampleGet(state) {
         return state.stateArr.length;
      }
   },
   actions: {
      checkForm() {
         for (let i = 0; i < this.stateArr.length; i++) {
            if (this.stateArr[i] == true) {
               for (let j = 0; j < this.stateArr.length; j++) {
                  // 2 porque es el index que tiene 'email' como tipo
                  j == 2 ? this.checkInput(j, 'email') : this.checkInput(j, 'text');
               }
               return;
            }
         }
         this.inputTextArr.fill('');
         this.stateArr.fill(true);
      },
      // Activación al desenfocar el input
      checkInput(index, typeText) {
         if (this.inputTextArr[index].length <= 0) {
            this.stateArr[index] = true;
            this.showErrorArr[index] = true;
         }
         if (typeText == 'email') {
            this.stateArr[index] = !this.emailRgx.test(this.inputTextArr[index]);
            this.showErrorArr[index] = !this.emailRgx.test(this.inputTextArr[index]);
            return;
         }
         if (this.inputTextArr[index].length > 0) {
            this.stateArr[index] = false;
            this.showErrorArr[index] = false;
         }
      },
      // Activación al escribir en el input
      checkInputOnKey(index) {
         if (this.stateArr[index] == true) {
            if (this.inputTextArr[index].length > 0) {
               this.stateArr[index] = false;
               this.showErrorArr[index] = false;
            }
         }
      }
   }
})