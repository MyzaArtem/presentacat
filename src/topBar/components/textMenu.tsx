import React from 'react';
import { AppType, choosedObjectType, SlidesObject, TextObject } from '../../types/types';
import styles from './textMenu.module.css';
import fontSizeIcon from '../img/font-size-icon.svg';
import fontFamilyIcon from '../img/font-family-icon.svg'
import {
    getSlideNode,
    getCurrentSlide,
} from '../../functionts/supportMethods';
import boldIcon from '../img/bold-icon.svg';
import italicIcon from '../img/italic-icon.svg';
import underlinedIcon from '../img/underline-icon.svg';
import {
    changeTextFontSize,
    toggleBoldText,
    toggleItalicText,
    toggleUnderlinedText,
    changeTextFontFamily
} from '../../actions/actionsCreators';
import Palette from '../../pallete/pallete';
import SelectElement from './SelectElement';
import { fonts } from '../../App';
import { connect } from 'react-redux';
import fillColorTextIcon from '../img/fill-color-icon.svg'

interface TextMenuProps {
    slides: SlidesObject;
    choosedObject: choosedObjectType;
    changeTextFontSize: (s: number) => void;
    toggleBoldText: () => void;
    toggleItalicText: () => void;
    toggleUnderlinedText: () => void;
    changeTextFontFamily: (f: string) => void;
}

function TextMenu(props: TextMenuProps) {
    const slide = getCurrentSlide(props.slides);

    let node;
    if (slide) {
        node = getSlideNode(slide, props.choosedObject.id);
    } else throw new Error();

    let fontSize;
    let isBold;
    let isItalic;
    let isUnderlined;
    let fontFamily;
    if (node && node.type === 'text') {
        fontSize = (node as TextObject).fontSize;
        fontFamily = (node as TextObject).fontFamily;
        isBold = (node as TextObject).fontWeight === 700;
        isItalic = (node as TextObject).fontStyle === 'italic';
        isUnderlined = (node as TextObject).fontDecoration === 'underline';
    } else throw new Error();

    const fontSizeValues = [
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19,
        21,
        23,
        25,
        27,
        30,
        35,
        40,
        45,
        50,
        55,
        60,
        70,
        80,
        90
    ];

    const [
        isTextColorPaletteVisible,
        changeTextColorPaletteVisibility,
    ] = React.useState(false);

    const [
        isFontSelectVisible,
        changeFontSelectVisibility,
    ] = React.useState(false);

    return (
        <div className={styles.textMenu}>
            <img src={fontFamilyIcon} alt="" className={styles.textMenu_icons}/>
            {/* <FontSelect selected={fontFamily} fonts={fonts} /> */}
            <div 
                    className={styles.changeFontBtnStyle}
                    onClick={() => {
                        changeFontSelectVisibility(true);
                    }}>
                <span
                className={styles.fontFamily_button}>{fontFamily}</span>
            </div>
            {isFontSelectVisible && (
                <div
                className={styles.FontSelect_block}
            >
                {fonts.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={styles.FontSelect_block_item}
                            onClick={() => {
                                props.changeTextFontFamily(item);
                                changeFontSelectVisibility(false);
                            }}
                        >
                            <p className={styles.FontSelect_block_item} style={{fontFamily: item}}>{item}</p>
                        </div>
                    );
                })}
            </div>
            )}
            <img src={fontSizeIcon} alt="font-size" className={styles.textMenu_icons} 
                style={{marginLeft: '30px'}}/>
            <SelectElement
                selectedValue={fontSize}
                values={fontSizeValues}
                callback={(value) => {
                    props.changeTextFontSize(value);
                }}
            />
            <div
                onClick={() => {
                    props.toggleBoldText();
                }}
                className={styles.button_settings_text}
            >
                <img src={boldIcon} alt="toggle text bold" className={styles.textMenu_icons} />
            </div>
            <div
                onClick={() => {
                    props.toggleItalicText();
                }}
                className={styles.button_settings_text}
                
            >
                <img src={italicIcon} alt="toggle text italic" className={styles.textMenu_icons} />
            </div>
            <div
                onClick={() => {
                    props.toggleUnderlinedText();
                }}
                className={styles.button_settings_text}
                style={{marginLeft: '15px'}}
            >
                <img src={underlinedIcon} alt="toggle text underlined" />
            </div>
            <div
                onClick={() => {
                    changeTextColorPaletteVisibility(true);
                }}
                className={styles.button_settings_text}
                style={{marginLeft: '30px'}}

            >
                <img src={fillColorTextIcon} className={styles.textMenu_icons}/>
            </div>
            <Palette
                visibility={isTextColorPaletteVisible}
                changeVisibility={changeTextColorPaletteVisibility}
                type={'textColor'}
            />
        </div>
    );
}

interface TextMenuOwnProps {
    slides: SlidesObject;
    choosedObject: choosedObjectType;
}

const mapStateToProps = (state: AppType): TextMenuOwnProps => {
    return {
        choosedObject: state.choosedObject,
        slides: state.slides,
    }
}

const mapDispatchToProps = {
    changeTextFontSize,
    toggleBoldText,
    toggleItalicText,
    toggleUnderlinedText,
    changeTextFontFamily

}

export default connect(mapStateToProps, mapDispatchToProps)(TextMenu);