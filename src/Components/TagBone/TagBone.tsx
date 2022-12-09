import React from 'react';
import styles from './TagBone.module.css';
import Button from '@mui/material/Button';
import { fontSize } from '@mui/system';
interface TagBoneProps {
    num: number | null
    takeBone?: () => void
    start: boolean
}

const TagBone:React.FC<TagBoneProps> = (props) => {
    return (
        <div 
            onClick={props.num === null ? props.takeBone : () => {return}}
            className={styles['box-dummy']}>
        {props.num !== null 
        && <Button 
            onClick={props.takeBone} 
            disabled={!props.start}
            color='info'
            variant='contained' 
            sx={{
                width: '100%', 
                height: '100%',
                fontSize: '2rem',
                }}>{props.num}</Button>}

        </div>
    )
};

export default TagBone;