const testList = ["a" ,"b" ,"c" ];
const testList1 = [1 ,2 ,3 ];

function zipList(list,list1) {
  const newList = [];
  for(let i = 0; i < list.length; i++){
   newList.push(list[i], list1[i]);
  }
  return newList;
}

console.log(zipList(testList, testList1));


function zipListTheSimpleWay(list, list1){
  return _.flatten(_.zip(list, list1));
}

console.log(zipListTheSimpleWay(testList, testList1));