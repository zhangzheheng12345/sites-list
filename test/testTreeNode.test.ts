import { ObjectToTree, TreeNode, TreeNodeType } from '../src/ts/treeNode'

import { test, expect, it } from 'vitest'

test('Test ObjectToTree', () => {
  const input = {
    a: 'hello', // Test paring Leaf
    'b & b': {
      // Test parsing Branch and parsing recursively
      'c & c': 'world',
      Sep: '-----', // Test ChapterSep
      d: '!'
    }
  }
  const expected: Array<TreeNode> = [
    {
      type: TreeNodeType.Leaf,
      content: {
        name: 'a',
        url: 'hello'
      }
    },
    {
      type: TreeNodeType.Branch,
      content: {
        summary: 'b & b',
        sons: [
          {
            type: TreeNodeType.Leaf,
            content: {
              name: 'c & c',
              url: 'world'
            }
          },
          {
            type: TreeNodeType.ChapterSep,
            content: 'Sep'
          },
          {
            type: TreeNodeType.Leaf,
            content: {
              name: 'd',
              url: '!'
            }
          }
        ]
      }
    }
  ]
  expect(ObjectToTree(input)).toEqual(expected)
})
