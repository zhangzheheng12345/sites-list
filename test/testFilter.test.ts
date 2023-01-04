import { test, expect, it } from 'vitest'

import { filtEn } from '../src/ts/filter'

test('Test filtEn', () => {
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
  const expected = {
    a: '',
    c: {
      d: ''
    }
  }
  expect(filtEn(input)).toEqual(expected)
})
