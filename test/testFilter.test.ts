import { test, expect, it } from 'vitest'

import { filtEn, filtCn } from '../src/ts/filter'

const input = {
  a: '',
  'b (Chinese)': '',
  c: {
    d: '',
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
  expect(filtEn(input)).toEqual(expected)
})

test('Test filtCn', () => {
  const expected = {
    'b (Chinese)': '',
    c: {
      'e (Chinese)': ''
    },
    f: {
      'g (Chinese)': ''
    }
  }
  expect(filtCn(input)).toEqual(expected)
})