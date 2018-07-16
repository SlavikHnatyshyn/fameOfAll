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

    HallOfFame.prototype.getlist = function () {
        getlist.call(this);
    }
    HallOfFame.prototype.sort = function () {
        sort.call(this);
    }
    HallOfFame.prototype.add = function () {
        add.call(this);
    }

    return HallOfFame;
})();

export { HallOfFame };



