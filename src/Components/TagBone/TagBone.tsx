import React from 'react';
import styles from './TagBone.module.css';
import Button from '@mui/material/Button';
import { fontSize } from '@mui/system';
interface TagBoxProps {
    num: number | null
    takeBone?: any
}

const TagBone = (props: TagBoxProps) => {
    return (
        <div 
            onClick={props.takeBone} 
            className={props.num !== null 
                ? styles.box 
                : styles['box-dummy']
        }>
        {props.num !== null 
        && <Button 
            color='warning'
            variant='text' 
            sx={{
                width: '100%', 
                height: '100%',
                fontSize: '2rem',
                }}>{props.num}</Button>}

        </div>
    )
};

export default TagBone;