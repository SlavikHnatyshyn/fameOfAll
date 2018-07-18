import {parseList} from './parseList';

const add = function (player) {
    const list = parseList(this.list);
    const playerName = player[0];
    const playerScore = player[1];
    const lastPlayerScore = list[this.list.length - 1][1];
    const existingPlayerIndex = list.findIndex(_player => _player[0] === playerName);

    if (existingPlayerIndex > -1) {
        const updatedList = Array.prototype.slice.call(list);
        updatedList[existingPlayerIndex][1] = playerScore;
        this.list = this.updateList(updatedList);
    } else {
        const unshiftedList = [player].concat(list);
        this.list = this.updateList(unshiftedList);
    }

    if (playerScore < lastPlayerScore) {
        return this;
    }

    return this;
}

export {add};