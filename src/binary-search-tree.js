const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.bstRoot = null;
  }

  root() {
    return this.bstRoot;
    // remove line with error and write your code here
  }

  add(data) {
    this.bstRoot = addNode(this.bstRoot, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addNode(node.left, data);
      }
      if (data > node.data) {
        node.right = addNode(node.right, data);
      }
      return node;
    }
    // remove line with error and write your code here
  }

  has(data) {
    return searchData(this.bstRoot, data);

    function searchData(node, data) {
      if (!node) {
        return false;
      }
      if (data === node.data) {
        return true;
      }
      if (data < node.data) {
        return searchData(node.left, data);
      }
      if (data > node.data) {
        return searchData(node.right, data);
      }
    }
    // remove line with error and write your code here
  }

  find(data) {
    return getData(this.bstRoot, data);

    function getData(node, data) {
      if (!node) {
        return null;
      }
      if (data === node.data) {
        return node;
      }
      if (data < node.data) {
        return getData(node.left, data);
      }
      if (data > node.data) {
        return getData(node.right, data);
      }
    }
    // remove line with error and write your code here
  }

  remove(data) {
    this.bstRoot = removeData(this.bstRoot, data);

    function removeData(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        if (!node.right && !node.left) {
          return null;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeData(node.right, minRight.data);
        return node;
      }
    }
    // remove line with error and write your code here
  }

  min() {
    if (!this.bstRoot) {
      return;
    }
    let node = this.bstRoot;
    while (node.left) {
      node = node.left;
    }
    return node.data;
    // remove line with error and write your code here
  }

  max() {
    if (!this.bstRoot) {
      return;
    }
    let node = this.bstRoot;
    while (node.right) {
      node = node.right;
    }
    return node.data;
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};

const tree = new BinarySearchTree();
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(8);
tree.add(4);
tree.add(32);
tree.add(12);
tree.add(14);
console.log(tree.find(8).data); //, 8);
console.log(tree.find(2).data);//, 2);
console.log(tree.find(32).data);//, 32);
console.log(tree.find(14).data);//, 14);
