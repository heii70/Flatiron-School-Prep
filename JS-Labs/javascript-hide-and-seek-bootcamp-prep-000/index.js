function getFirstSelector(selector) {
  return document.getElementById('app').querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('app').querySelector('div#nested div.target');
}

function increaseRankBy(n) {
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  
  for(var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
  return list;
}

function deepestChild() {
  var current = document.getElementById('app').querySelector('div#grand-node');
  var next = [];
  var lastChild;
  
  while(current) {
    if(current.children.length > 0) {
      for(var i = 0; i < current.children.length; i++) {
        next.push(current.children[i]);
      }
    }
    lastChild = current;
    current = next.shift();
  }
  return lastChild;
}