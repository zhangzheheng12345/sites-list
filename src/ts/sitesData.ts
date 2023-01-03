import { TreeNode, TreeNodeType } from './treeNode'

export const sitesData: TreeNode = {
  type: TreeNodeType.Branch,
  content: {
    summary: 'Frontend',
    sons: [
      {
        type: TreeNodeType.Branch,
        content: {
          summary: 'Vue',
          sons: [
            {
              type: TreeNodeType.Leaf,
              content: {
                name: 'Vue3 Official',
                url: 'vuejs.org'
              }
            },
            {
              type: TreeNodeType.Leaf,
              content: {
                name: 'Vue3 Official (Chinese)',
                url: 'cn.vuejs.org'
              }
            }
          ]
        }
      },
      {
        type: TreeNodeType.Branch,
        content: {
          summary: 'Svelte',
          sons: [
            {
              type: TreeNodeType.Leaf,
              content: {
                name: 'Svelte Official',
                url: 'svelte.dev'
              }
            },
            {
              type: TreeNodeType.Leaf,
              content: {
                name: 'Svelte Official',
                url: 'www.sveltejs.cn'
              }
            }
          ]
        }
      }
    ]
  }
}
