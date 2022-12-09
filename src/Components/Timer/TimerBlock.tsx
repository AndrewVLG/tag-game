import React from 'react';
import styles from './TimerBlock.module.css';

interface TimerBlockProps {
    value: number
}

const TimerBlock: React.FC<TimerBlockProps> = (props) => {
    const makeValue = (value: number): number[] => {
        if(value < 10) {
            return [0, value]
        } else {
            return [+value.toString().split('')[0], +value.toString().split('')[1]]

        }
    }
    const [value1, value2] = makeValue(props.value)
    return (
        <React.Fragment>
            <div className={styles.block}>{value1}</div>
            <div className={styles.block}>{value2}</div>
        </React.Fragment>

        
    )
}
export default TimerBlock;