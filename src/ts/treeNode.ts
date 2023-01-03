export enum TreeNodeType {
  Branch,
  Leaf
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
  content: TreeLeaf | TreeBranch
}
