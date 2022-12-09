import React, {useState} from 'react';
import ControlPanel from "../ControlPanel/ControlPanel";
import Tag from "../Tag/Tag";
import styles from './TagApp.module.css';
const TagApp = () => {
    const [start, setStart] = useState(false);
    const [complexity, setComplexity] = useState(20);


    return (
        <div className={styles['app-wrap']}>
            <Tag complexity={complexity} start={start}/>
            <ControlPanel complexity={complexity} start={start} onComplexityHandler={setComplexity} onStartHandler={() => setStart(prev => !prev)}/>
        </div>

    )
}

export default TagApp;