'use strict'; 

//node class

class _Node {
  constructor(value, next){
    this.value=value; 
    this.next=next; 
  }
}

class _LinkedList{
  constructor(){
    this.head = null; 
  }

  //insertion
  insertFirst(item){
    this.head = new _Node(item, this.head); 
  }


  insertLast(item){
    if(this.head = null){
      this.insertFirst(item)
    }else{
      let tempNode = this.head; 

      while(tempNode.next !== null){
        tempNode = tempNode.next; 
      
    } tempNode.next = new _Node(item, null);; 
   }
  }

  // when you get to num make newNode have prevNode point to new, and new Point to next // 

  insertAt(item, num){
    let tracker = 0; 
    let currentNode = this.head; 
    let previousNode = this.head; 
    while(tracker < num){
      previousNode = currentNode; 
      currentNode = currentNode.next;
      tracker ++; 
    } previousNode.next = item; 
      item.next = currentNode; 
  }

  find(item) {
    let tempNode = this.head; 
    if (!this.head) return null; 
    while(tempNode.value !== item){
      if(tempNode.next === null){
        return null
      }else{
        tempNode = tempNode.next
      } 
    } return tempNode;  
  }

  remove(item){
    if(!this.head)return null; 

    if(this.head.value === item){
     this.head = this.head.next; 
      return; 
    } 
    let currentNode = this.head; 
    let previousNode = this.head; 

    while(currentNode.value !== item && currentNode !== null){
      previousNode = currentNode; 
      currentNode = currentNode.next; 
    } if(currentNode === null){
      return;  
    } previousNode.next = currentNode.next;
  }

}


  //create instance of new node
  //if beginning then point head to new node 
  //else point previous node to new node and new node to next
  //else if end node point previous end to new node and new node to null 




  //retrieval
  //removal
  //
}