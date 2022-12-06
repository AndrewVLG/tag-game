

const utilits = () => {
    
    const makeRandomArray = () => {
        let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        let newArr: number[] = [];
        for(let i = 0; i < 500; i++) {
            const randomIndex = Math.floor(Math.random() * array.length);
           if(newArr.find(item => item === array[randomIndex]) === undefined)
            newArr = [...newArr, array[randomIndex]]
        };

        return  [[newArr[0], newArr[1], newArr[2], newArr[3]], 
                [newArr[4], newArr[5], newArr[6], newArr[7]], 
                [newArr[8], newArr[9], newArr[10], newArr[11]], 
                [newArr[12], newArr[13], newArr[14], null]]
    }

    const winningCombination = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null]

    const checkCombination = (combination: (number | null)[][]):boolean => {
        let flag = true;
        const array = combination.flat();
        for(let i = 0; i <= winningCombination.length; i++) {
            if(array[i] !== winningCombination[i]) {
                flag = false;
            }
        }
        return flag;
    }

    return {makeRandomArray, checkCombination};
}

export default utilits;