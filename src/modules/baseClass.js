import { sortPlayers } from './sort';
import { parseList } from './parseList';
import { printPlayer } from './prints';
import { printList } from './prints';
import {updateList} from './updateList';
import { add } from './add';




const HallOfFame = (() => {
    function HallOfFameCtor(size, players = []) {
        this.list = [];
        this.size = Number.isNaN(size) ? 5 : size;

        if (Array.isArray(players) && players.length === 0) {
            this.list = Array.from(new Array(this.size), () => '');
        } else {
            this.list = this.updateList(players);
        }
    }
    
    HallOfFameCtor.prototype.sortPlayers = function () {
        sortPlayers.apply(this,[this.list]);
    }

    HallOfFameCtor.prototype.parseList = function () {
        parseList.call(this);
    }
    HallOfFameCtor.prototype.printPlayer = function () {
        printPlayer.call(this);
    }
    HallOfFameCtor.prototype.printList = function () {
        printList.call(this);
    }
    
    HallOfFameCtor.prototype.updateList = function () {
        updateList.apply(this,[this.list]);
    }
    
    HallOfFameCtor.prototype.add = function () {
        add.call(this);
    }
   
    

    return HallOfFameCtor;
})();

export { HallOfFame };



