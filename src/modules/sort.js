
const sortPlayers = (players) => {
    return players.sort((a, b) => {
        if (a.length !== 2 || b.length !== 2) {
            console.log('[sortPlayers:except]', a, b);
            return -1;
        }

        const playerA = a[0];
        const pointsA = a[1];
        const playerB = b[0];
        const pointsB = b[1];

        if (Number.isNaN(pointsA)) {
            return -1;
        }
        if (Number.isNaN(pointsB)) {
            return -1
        }

        if (pointsA > pointsB) {
            return -1;
        } else if (pointsA < pointsB) {
            return 1;
        } else {
            if (playerA > playerB) {
                return 1;
            } else if (playerA < playerB) {
                return -1;
            } else {
                return 0;
            }
        }
    });
}

export {sortPlayers};