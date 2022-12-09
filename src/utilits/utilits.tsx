export type Matrix = (number | null)[][]


const utilits = () => {
    
    const makeRandomArray = (value: number):Matrix => {
        let array2:(number | null)[][] = [
            [1, 2, 3, 4], 
            [5, 6, 7, 8], 
            [9, 10, 11, 12], 
            [13, 14, 15, null]];

        const move = () => {
            const randomAction = Math.round(Math.random() * (4 - 1) + 1);
            const action: boolean | 'moveLeft' | 'moveRight' | 'moveUp' | 'moveDown' = 
            (randomAction === 1 && 'moveLeft')
            || (randomAction === 2 && 'moveRight')
            || (randomAction === 3 && 'moveUp')
            || (randomAction === 4 && 'moveDown')
            let pos = {
                arrIndex: 0,
                indexNull: 0,
            }
            array2.forEach((arr, i) => {
                if(arr.find(elem => elem === null) !== undefined) {
                   pos = {arrIndex: i, indexNull: arr.indexOf(null)}
                    
                }
            });

            if(action === 'moveLeft') {
                if(array2[pos.arrIndex][pos.indexNull - 1] === undefined) {
                    array2[pos.arrIndex][pos.indexNull] = array2[pos.arrIndex][pos.indexNull + 1];
                    array2[pos.arrIndex][pos.indexNull + 1] = null;
                } else {
                    array2[pos.arrIndex][pos.indexNull] = array2[pos.arrIndex][pos.indexNull - 1];
                    array2[pos.arrIndex][pos.indexNull - 1] = null;
                }
                
            }
            if(action === 'moveRight') {
                if(array2[pos.arrIndex][pos.indexNull + 1] === undefined) {
                    array2[pos.arrIndex][pos.indexNull] = array2[pos.arrIndex][pos.indexNull - 1];
                    array2[pos.arrIndex][pos.indexNull - 1] = null;
                } else {
                    array2[pos.arrIndex][pos.indexNull] = array2[pos.arrIndex][pos.indexNull + 1];
                    array2[pos.arrIndex][pos.indexNull + 1] = null;
                }
                
            }

            try {
                if(action === 'moveDown') {
                        array2[pos.arrIndex][pos.indexNull] = array2[pos.arrIndex + 1][pos.indexNull];
                        array2[pos.arrIndex + 1][pos.indexNull] = null;
                }
            } catch {
                array2[pos.arrIndex][pos.indexNull] = array2[pos.arrIndex - 1][pos.indexNull];
                array2[pos.arrIndex - 1][pos.indexNull] = null;
            }

            try {
                if(action === 'moveUp') {
                        array2[pos.arrIndex][pos.indexNull] = array2[pos.arrIndex - 1][pos.indexNull];
                        array2[pos.arrIndex - 1][pos.indexNull] = null;
                }
            } catch {
                array2[pos.arrIndex][pos.indexNull] = array2[pos.arrIndex + 1][pos.indexNull];
                array2[pos.arrIndex + 1][pos.indexNull] = null;
            }

        }
        for(let i = 0; i < value; i++) {
            move();
        }

        return array2

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