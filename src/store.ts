import { defineStore } from "pinia";
import { Libs } from "./libs/_list";

export type State = {
  len: number,
  lib: Libs|null,
  start: number
}

export const useStore = defineStore("store", {
  state: ():State=>({
    len: 0,
    lib: null,
    start: Date.now()
  }),
  actions: {
    newgame(lib: Libs){
      console.log(lib)
      this.$state.len = 0;
      this.$state.lib = lib;
      this.$state.start = Date.now();
      localStorage.setItem("longtyper",JSON.stringify(this.$state))
    },
    next(){
      this.$state.len++;
      localStorage.setItem("longtyper",JSON.stringify(this.$state))
    }
  }
})
