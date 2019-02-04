function zipList(list1, list2) {
  const newList = [];
  for (let i = 0; i < list1.length; i++) {
    newList.push(list1[i], list2[i]);
  }
  return newList;
}

const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

console.log(zipList(list1, list2));

function zipListTheSimpleWay(listA, listB) {
  return _.flatten(_.zip(listA, listB));
}

console.log(zipListTheSimpleWay(list1, list2));
