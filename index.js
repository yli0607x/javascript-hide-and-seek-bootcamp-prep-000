function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
   const node = document.getElementById('grand-node');
   const child = node.querySelectorAll('div');
   return child[child.length-1];
}

function increaseRankBy(n) {
    const ranked = document.getElementsByClassName('ranked-list')
    for (let i = 0; i < ranked.length; i++) {
      ranked[i].innerHTML = (parseInt(i) + 1).toString();
    }
}
