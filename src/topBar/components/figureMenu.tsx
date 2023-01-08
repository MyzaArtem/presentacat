import React from 'react';
import { AppType, choosedObjectType, FigureObject, SlidesObject } from '../../types/types';
import styles from './ObjectsMenu.module.css';
import {
    getSlideNode,
    getCurrentSlide,
} from '../../functionts/supportMethods';
// import Palette from '../../pallete/pallete';
import { strokeResize } from '../../actions/actionsCreators';
import SelectElement from './SelectElement';
import { connect } from 'react-redux';
import Pallete from '../../pallete/pallete';
import StrokeColorIcon from '../img/stroke-color-icon.svg'
import FillColorIcon from '../img/fill-color-icon.svg'
import StrokeResizeIcon from '../img/stroke-resize-icon.svg'

interface FigureMenuProps {
    choosedObject: choosedObjectType;
    slides: SlidesObject;
    strokeResize: (s: number) => void;
}

function FigureMenu(props: FigureMenuProps) {
    if (! props.slides.current) throw new Error();
    const slide = getCurrentSlide(props.slides);
    let node;
    if (slide) {
        node = getSlideNode(slide, props.choosedObject.id);
    } else throw new Error();

    let strokeWidth;
    let figure;

    if (node && node.type === 'figure') {
        strokeWidth = (node as FigureObject).strokeWidth;
        figure = (node as FigureObject).figure;
    } else throw new Error();

    const [
        isFigureBgPaletteVisible,
        changeFigureBgPaletteVisibility,
    ] = React.useState(false);

    const [
        isFigureStrokePaletteVisible,
        changeFigureStrokePaletteVisibility,
    ] = React.useState(false);

    const strokeValues = [0, 1, 2, 3, 4, 5];

    return (
        <>
            <div className={styles.objectsMenu}>
                <div className={styles.changeBtn}
                >
                    <img src={StrokeResizeIcon} className={styles.changeBtnImg}/>
                </div>
                <SelectElement selectedValue={strokeWidth} values={strokeValues} callback={(value) => {
                    props.strokeResize(value)
                }}/>
                <div
                    className={`${styles.changeBtn}`}
                    onClick={() => {
                        if (isFigureStrokePaletteVisible) {
                            changeFigureStrokePaletteVisibility(false);    
                        }
                        else {
                        changeFigureStrokePaletteVisibility(true);
                        }
                    }}
                >
                    <img src={StrokeColorIcon} className={styles.changeBtnImg}/>
                </div>
                <div
                    className={`${styles.changeBtn}`}
                    style={{marginLeft: '15px'}}
                    onClick={() => {
                        if (isFigureBgPaletteVisible) {
                            changeFigureBgPaletteVisibility(false);    
                        }
                        else {
                        changeFigureBgPaletteVisibility(true);
                        }
                    }}
                >
                    <img src={FillColorIcon} className={styles.changeBtnImg}/>
                </div> 
            </div>
            {isFigureBgPaletteVisible && (
            <Pallete
                    visibility={isFigureBgPaletteVisible}
                    changeVisibility={changeFigureBgPaletteVisibility}
                    type={'figureBG'}
                />
            )}
            {isFigureStrokePaletteVisible && (
            <Pallete
                visibility={isFigureStrokePaletteVisible}
                changeVisibility={changeFigureStrokePaletteVisibility}
                type={'strokeColor'}
            />
            )}
        </>
    );
}

interface FigureMenuOwnProps {
    choosedObject: choosedObjectType;
    slides: SlidesObject;
}

const mapStateToProps = (state: AppType): FigureMenuOwnProps => {
    return {
        choosedObject: state.choosedObject,
        slides: state.slides,
    }
}

const mapDispatchToProps = {
    strokeResize
}

export default connect(mapStateToProps, mapDispatchToProps)(FigureMenu);