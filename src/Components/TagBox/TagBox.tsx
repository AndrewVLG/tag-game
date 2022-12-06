import styles from './TagBox.module.css';

interface TagBoxProps {
    num: number | null
    takeBone?: any
}

const TagBox = (props: TagBoxProps) => {

    const clickMe = (): void => {
        console.log(props.num);
    }

    return (
        <div onClick={props.takeBone} className={props.num === null ? styles['box-dummy'] : styles.box}>
            <h2>{props.num}</h2>
        </div>
    )
};

export default TagBox;