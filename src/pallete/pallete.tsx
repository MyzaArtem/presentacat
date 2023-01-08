import React from 'react';
import styles from './pallete.module.css';
import { paletteSampleColors } from '../App';
import ColorBlock from './colorBlock';
import { connect } from 'react-redux';
import { AppType } from '../types/types';


interface palleteProps {
    visibility: boolean;
    changeVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    type: 'slide' | 'textColor' | 'strokeColor' | 'figureBG';
}

function Pallete(props: palleteProps) {
    return (
        <>
            {props.visibility && (
            <div
            className={styles.pallete}>
                <div
                className={styles.pallete_header}>
                    Выберите цвет
                </div>
                <div
                className={styles.pallete_color_blocks}>
                            {paletteSampleColors.map((item, index) => {
                                if (item)
                                    return (
                                        <ColorBlock
                                        key={index}
                                        type={props.type}
                                        changeVisibility={
                                            props.changeVisibility
                                        }
                                        color={item}
                                    />
                                    );
                            })}
                </div>
            </div>
            )}
        </>
    );
}

interface PaletteOwnProps {
    visibility: boolean;
    changeVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    type: 'slide' | 'textColor' | 'strokeColor' | 'figureBG';
}

const mapStateToProps = (state: AppType, ownProps: PaletteOwnProps) => ({
    ...ownProps,
});

export default connect(mapStateToProps)(Pallete);