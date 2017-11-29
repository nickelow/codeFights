// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
  var values =[];
  var node = l;
  while(node !== null){
    values.push(node.value);
    node = node.next
  }
  for (var i = 0; i < values.length /2 ; i++){
    if(values[i] !== values[values.length - (1+ i)]){
      return false
    }
  }
  return true
}
