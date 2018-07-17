const printPlayer = player => {
    return Number.isNaN(player[1]) ? '' : player.join(': ');
};

const printList = (list) => {
    return list.map(printPlayer);
}

export{printPlayer};
export {printList};