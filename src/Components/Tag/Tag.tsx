import TagBox from '../TagBox/TagBox';
import styles from './Tag.module.css';
import { useState } from 'react';
import { type } from 'os';

interface Hand {
    inHand: number | null,
    isTook: boolean,
}

interface Pos {
    currentArray: number,
    posInArray: number,
}

const Tag = () => {
    const [hand, setHand] = useState({
        inHand: 0,
        isTook: false,
    });
    const [bonesArray, setBonesArray] = useState([[15, 14, 13, 12], [11, 10, 9, 8], [7, 6, 5, 4], [3, 2, 1, null]]);

    const takeBone = (boneNumber: number, array: (number | null)[][]) => {
        console.log(boneNumber)
        const position: Pos = {
            currentArray: 0,
            posInArray: 0,

        };
        
        array.forEach((item, i) => {
            if(item.includes(boneNumber)) {
                position.currentArray = i;
                position.posInArray = item.indexOf(boneNumber);
            }
        } );
        try {
            if(array[position.currentArray][position.posInArray + 1] === null || array[position.currentArray][position.posInArray - 1] === null) {
                setHand({inHand: boneNumber, isTook: true});
            } else if(array[position.currentArray - 1][position.posInArray] === null) {
                setHand({inHand: boneNumber, isTook: true});
            } else if(array[position.currentArray + 1][position.posInArray] === null) {
                setHand({inHand: boneNumber, isTook: true});
            }
        } catch {
            if(array[position.currentArray + 1][position.posInArray] === null) {
                setHand({inHand: boneNumber, isTook: true});
            }
        }




    }

    const moveBone = (boneNumber: number, array: any) => {
        if(boneNumber === 0) {
            return;
        }
        const index = array.indexOf(boneNumber);
        const arrayA = [...array.slice(0, index), null, ...array.slice(index + 1)];
        const arrayC = [];
        for(let i = 0; i < arrayA.length; i++) {
            if(array[i] === arrayA[i] && array[i] !== null) {
                arrayC[i] = array[i]
            } else if(array[i] !== null) {
                arrayC[i] = null;
            } else {
                arrayC[i] = boneNumber;
            }
        }
        setBonesArray([
            [arrayC[0], arrayC[1], arrayC[2], arrayC[3]], 
            [arrayC[4], arrayC[5], arrayC[6], arrayC[7]], 
            [arrayC[8], arrayC[9], arrayC[10], arrayC[11]], 
            [arrayC[12], arrayC[13], arrayC[14], arrayC[15]]
        ]);
    }

    const tagBones = bonesArray.flat().map(bone => {
        if(bone === null) {
            return <TagBox takeBone={() => moveBone(hand.inHand, bonesArray.flat())} num={null}/>;
        };

     return <TagBox takeBone={() => takeBone(bone, bonesArray)} num={bone}/>
    })
    return (
        <div className={styles['tag-wrap']}>
            {tagBones}
        </div>
    )
}

export default Tag;