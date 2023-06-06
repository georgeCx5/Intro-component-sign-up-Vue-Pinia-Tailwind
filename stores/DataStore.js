import { defineStore } from 'pinia'
export const useDataStore = defineStore('data', {
   state: () => ({
      stateArr: [false, false, false, false],
   }),
   getters: {
      exampleGet(state) {
         return state.stateArr.length;
      }
   },
   actions: {
      exampleSet(newItem) {
         this.state.push(newItem);
      }
   }
})