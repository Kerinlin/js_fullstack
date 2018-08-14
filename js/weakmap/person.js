const privateData=new WeakMap();
// class Person{
//   constructor(name,age){
//       this.name=name;
//       this.age=age;
//   }
// }
class Person{
  constructor(name,age){
    privateData.set(this,{name,age})
  }
  getName(){
    return privateData.get(this).name
  }
  getAge() {
    return privateData.get(this).age
  }
}
const zk=new Person('zk',18);
// console.log(zk.name);
// zk.name='曾凯';
console.log(zk.getName());




