const parseList = (list) => {
    return list.map(item => {
        const parsedItem = item.split(': ');
        return [
            parsedItem[0].trim(),
            Number(parsedItem[1])
        ];
    });
}

export{parseList};