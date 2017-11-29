// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
  let dummy = new ListNode();
  dummy.next = l;
  let current = dummy;
 while (current.next) {
  if (current.next.value === k) {
   current.next = current.next.next;
  } else {
   current = current.next;
  }
 }
   return dummy.next;
}
