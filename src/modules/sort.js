import { HallOfFame } from './baseClass';

HallOfFame.prototype.sort = function () {
    this.players.sort((a, b) => {
        if (b[1] == a[1]) {
            return a[0] > b[0];
        }
        return b[1] - a[1];
    });
    return this;
};

export {sort};