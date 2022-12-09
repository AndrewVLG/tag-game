import {Button, Slider} from '@mui/material';
import React from 'react';
import Timer from '../Timer/Timer';
import styles from './ControlPanel.module.css';

interface ControlPanelProps {
    start: boolean;
    complexity: number;
    onStartHandler: () => void;
    onComplexityHandler: (e: number) => void;
}

const ControlPanel:React.FC<ControlPanelProps> = (props) => {
    const marks = [
        {
            value: 20,
            label: 'Easy'
        },
        {
            value: 85,
            label: 'Medium'            
        },
        {
            value: 150,
            label: 'Hard'            
        },
    ]

    return (
        <div className={styles.panel}>
            <div className={styles['upper-panel']}>
                <Slider disabled={props.start} onChange={(e:any) => props.onComplexityHandler(e.target.value)} step={null} min={20} max={150} marks={marks} aria-label='Always visible'  sx={{width: '90%'}}/>
                <Button 
                    onClick={props.onStartHandler}
                    sx={{margin: '0.5vw', height: '30%', width: '90%', fontSize: '2rem'}}
                    variant='contained'>{props.start ? 'Pause' : 'Start'}
                </Button>
                <Timer complexity={props.complexity} start={props.start}/>
            </div>
            <div className={styles['bottom-panel']}>
                <p></p>
            </div>
        </div>
    )
}

export default ControlPanel;