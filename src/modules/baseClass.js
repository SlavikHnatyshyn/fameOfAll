import { getlist } from './getList';
import { sort } from './sort';
import { add } from './add';


const HallOfFame = (() => {
    function HallOfFame(size, players = []) {
        this.size = size || 5;
        this.players = players;
        this.list = this.getlist();
    }

    // HallOfFame.prototype = {
    //     getlist : getlist().call(HallOfFame),
    //     sort : sort().call(HallOfFame),
    //     add : add().call(HallOfFame)
    // }

    HallOfFame.prototype.bind(null,getlist,sort,add);

    return HallOfFame;
})();

export{HallOfFame};



