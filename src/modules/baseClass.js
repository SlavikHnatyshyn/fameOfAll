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
            //console.log(this.list);
            this.list = this.updateList(players);
            //console.log(this.list);
        }
    }
    
    HallOfFameCtor.prototype.sortPlayers = function (players) {
        //this.list = players;
        sortPlayers.call(this,players);
    }

    HallOfFameCtor.prototype.parseList = function (list) {
       // this.list = list;
        parseList.call(this);
    }
    HallOfFameCtor.prototype.printPlayer = function (player) {
        this.list = player;
        
        printPlayer.call(this,player);
    }
    HallOfFameCtor.prototype.printList = function (list) {
        this.list = list;
        printList.call(this,list);
    }
    
    HallOfFameCtor.prototype.updateList = function (oldList) {
         this.list = oldList;
        

        const newList =  updateList.call(this,oldList);
        //console.log(oldList);

        return newList;
        
    }
    
    HallOfFameCtor.prototype.add = function (player) {
        //this.list = player;
        add.call(this,player);
    }
   
    

    return HallOfFameCtor;
})();

export { HallOfFame };



