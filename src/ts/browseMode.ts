import { defineStore } from 'pinia'

export const useBrowseMode = defineStore('browseMode', {
  state: () => {
    return {
      browserMode: false
    }
  },
  actions: {
    toggle() {
      this.browserMode = !this.browserMode
    }
  }
})
