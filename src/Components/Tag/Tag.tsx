import TagBox from '../TagBox/TagBox';
import styles from './Tag.module.css';
import { useState } from 'react';
import { type } from 'os';

interface Hand {
    inHand: number | null,
    isTook: boolean,
}


const Tag = () => {
    const [hand, setHand] = useState({
        inHand: 0,
        isTook: false,
    });
    const [bonesArray, setBonesArray] = useState([[15, 14, 13, 12], [11, 10, 9, 8], [7, 6, 5, 4], [3, 2, 1, null]]);

    const takeBone = (boneNumber: number) => {

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
        setBonesArray([...arrayC]);
    }

    const tagBones = bonesArray.flat().map(bone => {
        if(bone === null) {
            return <TagBox takeBone={() => moveBone(hand.inHand, bonesArray.flat())} num={null}/>;
        };

     return <TagBox takeBone={() => setHand({inHand: bone, isTook: true})} num={bone}/>
    })
    return (
        <div className={styles['tag-wrap']}>
            {tagBones}
        </div>
    )
}

export default Tag;