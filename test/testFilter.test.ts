import { test, expect, it } from 'vitest'

import { filt, filtEn, filtCn } from '../src/ts/filter'

const input = {
  a: '',
  'b (Chinese)': '',
  c: {
    d: '',
    sep: '-----',
    'e (Chinese)': ''
  },
  f: {
    'g (Chinese)': ''
  }
}

test('Test filtEn', () => {
  const expected = {
    a: '',
    c: {
      d: ''
    }
  }
  expect(filt(input, filtEn)).toEqual(expected)
})

test('Test filtCn', () => {
  const expected = {
    'b (Chinese)': '',
    c: {
      sep: '-----',
      'e (Chinese)': ''
    },
    f: {
      'g (Chinese)': ''
    }
  }
  expect(filt(input, filtCn)).toEqual(expected)
})
