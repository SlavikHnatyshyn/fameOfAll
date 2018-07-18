const printPlayer = player => {
    return Number.isNaN(player[1]) ? '' : player.join(': ');
};

const printList = (list) => {
   // console.log(list.map(printPlayer));
    return list.map(printPlayer);
}

export{printPlayer};
export {printList};