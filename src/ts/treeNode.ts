export enum TreeNodeType {
  Branch,
  Leaf,
  ChapterSep
}

export interface TreeBranch {
  summary: string
  sons: Array<TreeNode>
}

export interface TreeLeaf {
  name: string
  url: string
}

export interface TreeNode {
  type: TreeNodeType
  content: TreeLeaf | TreeBranch | string
}

export function ObjectToTree(obj: any): Array<TreeNode> {
  let res: Array<TreeNode> = []
  let key: keyof any
  for (key in obj) {
    if (typeof obj[key] === 'string') {
      if ((obj[key] as string) === '-----') {
        res.push({
          type: TreeNodeType.ChapterSep,
          content: key as string
        })
      } else {
        res.push({
          type: TreeNodeType.Leaf,
          content: {
            name: key as string,
            url: obj[key] as string
          }
        })
      }
    } else if (typeof obj[key] === 'object') {
      res.push({
        type: TreeNodeType.Branch,
        content: {
          summary: key as string,
          sons: ObjectToTree(obj[key])
        }
      })
    }
  }
  return res
}
