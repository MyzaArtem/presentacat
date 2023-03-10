import React from 'react';
import styles from './pallete.module.css';
import {
    setSlideBg,
    changeTextColor,
    figureBackgroundSet,
    strokeColorSet,
} from '../actions/actionsCreators';
import { connect } from 'react-redux';
import { AppType } from '../types/types';

interface ColorBlockProps {
    color: string;
    setSlideBg: (bg: string) => void;
    changeTextColor: (c: string) => void;
    figureBackgroundSet: (c: string) => void;
    strokeColorSet: (c: string) => void;
    type: 'slide' | 'textColor' | 'strokeColor' | 'figureBG';
    changeVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

function ColorBlock(props: ColorBlockProps) {

    
    return (
        <div
            onClick={() => {
                if (props.type === 'slide') {
                    props.setSlideBg(props.color);
                } else if (props.type === 'textColor') {
                    props.changeTextColor(props.color);
                } else if (props.type === 'figureBG') {
                    props.figureBackgroundSet(props.color);
                } else if (props.type === 'strokeColor') {
                    props.strokeColorSet(props.color);
                }
                props.changeVisibility(false);
            }}
            className={styles.colorBlock}
            style={{ backgroundColor: props.color }}
        ></div>
    );
}

interface ColorBlockOwnProps {
    color: string;
    changeVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    type: 'slide' | 'textColor' | 'strokeColor' | 'figureBG';
}

const mapStateToProps = (state: AppType, ownProps: ColorBlockOwnProps) => ownProps;
const mapDispatchToProps = {
    setSlideBg,
    changeTextColor,
    figureBackgroundSet,
    strokeColorSet
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorBlock);

