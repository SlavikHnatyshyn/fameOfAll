import { HallOfFame } from './baseClass';


HallOfFame.prototype.getlist = function () {

    let res = [];
    this.sort();


    res = [].concat(this.players).map(a => `${a[0]}: ${a[1]}`);
    console.log(res);

    if (res.length >= this.size) {
        return res.slice(0, this.size);
    }


    else {

        res.push.apply(res, Array.from(new Array(this.size - res.length), () => ''))
    }

    return res;

};

export { getlist };