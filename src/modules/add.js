import { HallOfFame } from './baseClass';

HallOfFame.prototype.add = function (player) {
    let isSameName = false;
    // если игрок был добавлен
    if (player && this.players) {

        // перебираем массив игроков которые уже есть
        this.players.forEach((thePlayer, i) => {
            //Проверяем одинаковые ли имена у того игрока что мы добавили и тех которые уже есть  
            if (thePlayer[0] == player[0]) {

                isSameName = true;

                //Если добавленный игрок с таким же именем как и уже существующий имеет больше очков чем он, 
                //то ми заменяем очки уже существующего игрока на очки добавленного игрока 
                if (thePlayer[1] < player[1]) {

                    this.players[i][1] = player[1];
                }
            }
        });
        //добавляем нового игрока в массив и вызываем сортировку
        if (!isSameName) {

            this.players.push(player);
            this.sort();
        }
    }
    // инициализируем this.getlist() 
    this.list = this.getlist();
    return this;
}

export {add};