import { HallOfFame } from 'baseClass';


HallOfFame.prototype.getlist = function () {

           
    let res = [];
    this.sort();

    // здесь в новый массив res мы скопируем 'свойство:значение' из массива players
    res = [].concat(this.players).map(a => `${a[0]}: ${a[1]}`);
    console.log(res);

    // если длина массива больше допустимого количества значения (this.size), то мы возвращаем массив, где скопируем элементы до допустимого значения     
    if (res.length >= this.size) {
        return res.slice(0, this.size);


    }

    // вычисляем сколько значений мы еще можем заполнить, и отправляем на их место пустую строку
    else {

        res.push.apply(res, Array.from(new Array(this.size - res.length), () => ''))
    }

    return res;

};

export {getlist};