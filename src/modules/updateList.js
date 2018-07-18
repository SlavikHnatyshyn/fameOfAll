import {sortPlayers} from './sort';
import {printList} from './prints';
//import {printPlayer} from './prints';

const updateList = function (oldList) {
    
    //console.log(oldList);

    const newList = sortPlayers(oldList).slice(0, this.size);
  
    //console.log(printList(newList))
    
    //console.log(newList); 

    return printList(newList);

     
    
    
       
};

export { updateList };