
class RandomHongbao {
    constructor(num) {
        this.num = this.getNum(num);
        try {
            //得到数值小数的长度
            this.multiple = this.num.toString().split('.')[1].length;
        } catch (e) {
            this.multiple = 0;
        }
        this.calcNum = this.num * Math.pow(10, this.multiple);//将小数放大指数倍成整数 
    }

    getNum(num, defalutNum = 0) {
        return this.isNumber(num) ? num : defalutNum;
    }

    isNumber(num) {
        let number = +num;// number化
        if ((number - num) !== 0) {
            return false;
        }
        if ((number - num) == 0) {
            return true;
        }
        // console.log(number); //number       
        if (typeof num === 'string') {
            return false;
        }
        return true;
    }


    split(n, precision) {
        //偷偷先等分
        let arr = this.average(n, precision);
        // console.log(arr);
        // 随机性 三人同行为一单位,产生几次随机,把钱分给左右的人
        let arrResult = arr;
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            let num = Math.floor(Math.random() * item);
            let numLeft = Math.floor(Math.random() * num);
            let numRight = num - numLeft;
            let iLeft = i === 0 ? (arr.length - 1) : i - 1;
            let iRight = (i === arr.length - 1) ? 0 : i + 1;
            arrResult[i] -= num;
            arrResult[iLeft] += numLeft;
            arrResult[iRight] += numRight;
        }
        return arrResult;
    }
    average(n, precision) {
        //整除
        let avg = Math.floor(this.calcNum / n);
        //余数
        let rest = this.calcNum % n;
        // console.log(rest);

        let result = Array(n).fill(avg); //返回有n个元素的数组
        let gap = Math.round((n - rest) / rest) + 1;// 多余的钱填充问题 多少个人发一次1
        let index = 0;
        while (rest > 0) {
            index = (--rest) * gap;
            result[index >= n ? (n - 1) : index]++;
        }
        return result.map((item) => {
            return (item / Math.pow(10, this.multiple));
        })
    }
}

const Hongbao = new RandomHongbao(200);
console.log(Hongbao.split(10, 0));
// Hongbao.split(10, 0); //分给26人 红包精确度为2
