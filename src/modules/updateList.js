import {sortPlayers} from './sort';
import {printList} from './prints';

const updateList = function (oldList) {

    const newList = sortPlayers(oldList).slice(0, this.size);
        return printList(newList);

};

export { updateList };