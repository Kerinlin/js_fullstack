/* 
    链表节点
      []内存分配给我们一定的数量空间
*/

export default class LinkedListNode{
  constructor(value,next=null){
    this.value=value;
    this.next=next;
  }
  toString(callback){
    return callback?callback(this.value):`${this.value}`;
  }
}