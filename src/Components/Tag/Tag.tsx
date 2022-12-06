import TagBox from '../TagBox/TagBox';
import styles from './Tag.module.css';
import { useState } from 'react';

interface Hand {
    inHand: number | null,
    isTook: boolean,
}


const Tag = () => {
    const [hand, setHand] = useState({
        inHand: 0,
        isTook: false,
    });
    console.log(hand);
    const [bonesArray, setBonesArray] = useState([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, null]);

    const moveBone = (boneNumber: number, tag: (number | null)[]) => {
        if(boneNumber === 0) {
            return;
        }

    }

    const tagBones = bonesArray.map(bone => {
        if(bone === null) {
            return <TagBox num={null}/>;
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