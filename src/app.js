import { HallOfFame } from './modules/baseClass';

const instance = new HallOfFame(4,[["Zoe",1],["Yvo",5],["Xin",3],["Wil",7]]);
console.log(instance);

const add = instance.add(["Bob",9]);
