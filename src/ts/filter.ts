export function filt(obj: any, filter: (str: string) => boolean) {
  let res: any = {}
  let key: keyof any

  let sep = ''
  let sonsOfSep: any = {}
  function checkSons() {
    if (Object.keys(sonsOfSep).length !== 0) {
      if (sep !== '') res[sep] = '-----'
      res = { ...res, ...sonsOfSep }
      sonsOfSep = {}
    }
  }
  for (key in obj) {
    if (typeof obj[key] === 'string') {
      if (obj[key] === '-----') {
        checkSons()
        sep = key as string
      } else if (filter(key as string)) {
        sonsOfSep[key] = obj[key]
      }
    } else if (typeof obj[key] === 'object') {
      const son = filt(obj[key], filter)
      if (Object.keys(son).length !== 0) {
        sonsOfSep[key] = son
      }
    }
  }
  checkSons()
  return res
}

export function filtEn(key: string): boolean {
  return !/^.+ \(Chinese\)$/.test(key)
}

export function filtCn(key: string): boolean {
  return /^.+ \(Chinese\)$/.test(key)
}

import { defineStore } from 'pinia'

export const useFilter = defineStore('filter', {
  state: (): {
    filter: (key: string) => boolean
  } => {
    return {
      filter(key: string) {
        return true
      } // No filter
    }
  }
})
