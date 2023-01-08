import React from 'react';
import styles from './ObjectsMenu.module.css';

interface SelectElementProps {
    selectedValue: number;
    values: Array<number>;
    callback: (value: number) => void;
}

export default function SelectElement(props: SelectElementProps) {
    const changeElement = React.useRef<HTMLSelectElement>(null);

    return (
        <select className={`${styles.objectsMenuNode} ${styles.selectElement}`} value={props.selectedValue} ref={changeElement} onChange={() => {
            if (changeElement.current) {
                props.callback(parseInt(changeElement.current.value));
            }
        }}>
            {props.values.map((item) => {
                return <option key={item} value={item}>{item}</option>
            })}
        </select>
    )
}
