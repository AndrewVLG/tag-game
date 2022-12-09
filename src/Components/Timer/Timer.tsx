import React, {useState, useEffect} from 'react';
import styles from './Timer.module.css';
import TimerBlock from './TimerBlock';
interface TimerProps {
    start: boolean;
    complexity: number;
};

interface TimerValue {
    hours: number;
    minutes: number;
    seconds: number;
}
const Timer: React.FC<TimerProps> = (props) => {
    const [timer, setTimer] = useState(0);
    let tim: any;
    if(props.start) {
        tim = setTimeout(() => setTimer(prev => prev + 1000), 1000)
    }
    useEffect(() => {
        clearTimeout(tim);
        setTimer(0)
    }, [props.complexity]);

    const counter = (timer: number): TimerValue => {
        const seconds = timer / 1000 % 60;
        const minutes = Math.floor(timer / 1000 / 60 % 60);
        const hours = Math.floor(timer / 1000 / 60 / 60 % 60);;
        return {
            seconds,
            minutes,
            hours
        }
    }
    const timerValue = counter(timer);

    return (
        <div className={styles.timer}>
            <TimerBlock value={timerValue.hours} />
            <div className={styles.dummy}>:</div>
            <TimerBlock value={timerValue.minutes}/>
            <div className={styles.dummy}>:</div>
            <TimerBlock value={timerValue.seconds}/>


        </div>
    )
}

export default Timer;