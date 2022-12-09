import TagBone from '../TagBone/TagBone';
import styles from './Tag.module.css';
import {Snackbar, Alert} from '@mui/material';
import { useState, useEffect } from 'react';
import utilits, {Matrix} from '../../utilits/utilits';
interface TagProps {
    start: boolean,
    complexity: number,
}

interface Pos {
    currentArray: number,
    posInArray: number,
}

const Tag: React.FC<TagProps> = (props) => {
    const {makeRandomArray, checkCombination} = utilits();
    const [hand, setHand] = useState({
        inHand: 0,
        isTook: false,
    });
    const [bonesArray, setBonesArray] = useState<Matrix>([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, null, 15]]);
    const isWin = checkCombination(bonesArray);
    useEffect(() => {
        setBonesArray(makeRandomArray(props.complexity))
    }, [props.complexity])
    
    const takeBone = (boneNumber: number, array: (number | null)[][]) => {
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
        if(boneNumber === 0 || !hand.isTook) {
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
        setHand({...hand, isTook: false})
    }

    const tagBones = bonesArray.flat().map(bone => {
        if(bone === null) {
            return <TagBone  start={props.start} key={Math.random() * (1000 - 10) + 10} takeBone={() => moveBone(hand.inHand, bonesArray.flat())} num={null}/>;
        };

     return <TagBone start={props.start} key={Math.random() * (1000 - 10) + 10} takeBone={() => takeBone(bone, bonesArray)} num={bone}/>
    })
    return (
        <div className={styles['tag-wrap']}>
            {tagBones}
            <Snackbar open={isWin}>
                <Alert>You Win!</Alert>
            </Snackbar>
        </div>
    )
}

export default Tag;