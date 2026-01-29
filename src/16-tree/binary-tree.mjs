class BinaryTree {
  /**
   * @param {any} data - 노드에 저장할 데이터
   * @param {BinaryTree|null} leftSubTree - 왼쪽 서브 트리
   * @param {BinaryTree|null} rightSubTree - 오른쪽 서브 트리
   */
  constructor(data, leftSubTree = null, rightSubTree = null) {
    this.data = data;
    this.leftSubTree = leftSubTree;
    this.rightSubTree = rightSubTree;
  }

  /**
   * 노드의 데이터를 반환한다.
   * @returns {any}
   */
  getData() {
    return this.data;
  }

  /**
   * 노드의 데이터를 설정한다.
   * @param {any} data - 설정할 데이터
   */
  setData(data) {
    this.data = data;
  }

  /**
   * 왼쪽 서브 트리를 반환한다.
   * @returns {BinaryTree|null}
   */
  getLeftSubTree() {
    return this.leftSubTree;
  }

  /**
   * 오른쪽 서브 트리를 반환한다.
   * @returns {BinaryTree|null}
   */
  getRightSubTree() {
    return this.rightSubTree;
  }

  /**
   * 왼쪽 서브 트리를 설정한다.
   * @param {BinaryTree} tree - 설정할 서브 트리
   */
  setLeftSubTree(tree) {
    this.leftSubTree = tree;
  }

  /**
   * 오른쪽 서브 트리를 설정한다.
   * @param {BinaryTree} tree - 설정할 서브 트리
   */
  setRightSubTree(tree) {
    this.rightSubTree = tree;
  }

  /**
   * 현재 노드가 리프 노드(자식이 없는 노드)인지 확인한다.
   * @returns {boolean}
   */
  isLeaf() {
    return this.leftSubTree === null && this.rightSubTree === null;
  }

  /**
   * 전위 순회를 수행한다. (Root -> Left -> Right)
   * @param {BinaryTree|null} tree - 순회할 트리
   */
  preOrderTraversal(tree) {
    if (tree === null) {
      return;
    }

    console.log(tree.data);
    this.preOrderTraversal(tree.getLeftSubTree());
    this.preOrderTraversal(tree.getRightSubTree());
  }

  /**
   * 중위 순회를 수행한다. (Left -> Root -> Right)
   * @param {BinaryTree|null} tree - 순회할 트리
   */
  inOrderTraversal(tree) {
    if (tree === null) {
      return;
    }

    this.inOrderTraversal(tree.getLeftSubTree());
    console.log(tree.data);
    this.inOrderTraversal(tree.getRightSubTree());
  }

  /**
   * 후위 순회를 수행한다. (Left -> Right -> Root)
   * @param {BinaryTree|null} tree - 순회할 트리
   */
  postOrderTraversal(tree) {
    if (tree === null) {
      return;
    }

    this.postOrderTraversal(tree.getLeftSubTree());
    this.postOrderTraversal(tree.getRightSubTree());
    console.log(tree.data);
  }
}

export { BinaryTree };
