export function filt(obj: any, filter: (str: string) => boolean) {
  let res: any = {}
  let key: keyof any
  for (key in obj) {
    if (typeof obj[key] === 'string') {
      if (filter(key as string)) {
        res[key] = obj[key]
      }
    } else if (typeof obj[key] === 'object') {
      const son = filt(obj[key], filter)
      if (Object.keys(son).length !== 0) {
        res[key] = son
      }
    }
  }
  return res
}

export function filtEn(obj: any) {
  return filt(obj, (str: string) => {
    return !/^.+ \(Chinese\)$/.test(str)
  })
}

export function filtCn(obj: any) {
  return filt(obj, (str: string) => {
    return /^.+ \(Chinese\)$/.test(str)
  })
}