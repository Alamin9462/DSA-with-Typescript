// class ListNode {
//   value: number | string;
//   next: ListNode | null;

//   constructor(value: number | string) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   head: ListNode | null;

//   constructor() {
//     this.head = null;
//   }

//   appends(value: number | string) {
//     const newListNode = new ListNode(value);

//     if (this.head === null) {
//       this.head = newListNode;
//       return;
//     }

//     let current = this.head;
//     while (current.next !== null) {
//       current = current.next;
//     }

//     current.next = newListNode;
//   }

//   delete(value: number | string){
//     if(!this.head){
//         return ;
//     }
//     else if (this.head.value === value){
//         this.head = this.head.next;
//         //console.log(this.head)
//         return;
//     }

//     let current = this.head;
//     while(current.next !== null){
//         if(current.next.value === value){
//             current.next = current.next.next;
//             return;
//         }
//         current = current.next;
//     }
//     console.log("value is not here ")
//   }

//   print() {
//     let current = this.head;
//     let listValues = "";

//     while (current !== null) {
//       listValues += current.value + " -> ";
//       current = current.next;
//     }

//     console.log(listValues + "null");
//   }
// }

// const list = new LinkedList();
// list.appends(10);
// list.appends(20);
// list.appends(30);

// list.delete(20);
// list.print(); 

// list.delete(10);
// list.print(); 

// list.delete(100); 
// list.print(); 

/// Linked list implemantaion with typescript 

// 1st create Node class 

class ClassNode {
   data : number | string;
   next: ClassNode | null;

   // define constractor 
   constructor(data: number) {
    this.data = data;
    this.next = null;
   }
}


// create LinkedList class 

class linkedList {
   head : ClassNode | null;

   constructor(){
    this.head = null;
   }

// create insert and added Node before null 
insert(data: number){
  const newNode = new ClassNode(data);
  if(this.head === null){
    this.head = newNode;
    return;
  }
  // define current Node 
  let currentNode = this.head;
  while(currentNode.next !== null){
    currentNode = currentNode.next;
  }
  currentNode.next = newNode;
}

// create delete node 
delete(data: number){
   if(this.head === null) return;
   console.log(this.head.data);
   if(this.head.data === data){
    this.head = this.head.next;
    return;
   }

   let current = this.head;
   while(current.next !== null){
    if(current.next.data === data){
      current.next = current.next.next;
      return;
    }
    current = current.next;
   }
}



// print function 
print(){
  let currentNode = this.head;
  let result = "";
  while(currentNode !== null){
       result += currentNode.data + "->";
       currentNode = currentNode.next;
  }

  result = result + "null"
  console.log(result);
}

}

const list = new linkedList();
list.insert(30)
list.insert(600)
list.insert(9000)
list.delete(30)
list.insert(12000)

list.print();