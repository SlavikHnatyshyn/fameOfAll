import { getlist } from './getList';
import { sort } from './sort';
import { add } from './add';


const HallOfFame = (() => {
    function HallOfFame(size, players = []) {
        this.size = size || 5;
        this.players = players;
        this.list = this.getlist();
    }

    HallOfFame.prototype = {
        getlist : getlist().call(this,HallOfFame),
        sort : sort().call(this,HallOfFame),
        add : add().call(this,HallOfFame)
    }

    return HallOfFame;
})();

export{HallOfFame};



