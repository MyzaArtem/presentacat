import React from 'react';
import RectangleIcon from '../img/rectangle-icon.svg';
import TriangleIcon from '../img/triangle-icon.svg';
import CircleIcon from '../img/circle-icon.svg';
import TextIcon from '../img/text-icon.svg';
import ImageIcon from '../img/img-icon.svg';
import { getImageBase64FromDialog } from '../../functionts/getImageBase64';
import AddSlideIcon from '../img/add-slide-icon.svg';
import styles from './createMenuFigures.module.css';
import { store } from '../../index';
import {
    addSlide,
    addFigure,
    addText,
    addImage
} from '../../actions/actionsCreators';
import minusIcon from '../img/minus.svg';
import plusIcon from '../img/plus.svg';



async function putImage(method: (s: string, k: number) => void) {
    const base64 = await getImageBase64FromDialog();
    const img = document.createElement('img');
    img.src = base64;
    img.style.visibility = 'hidden';
    document.body.append(img);
    img.onload = () => {
        const metrics = img.getBoundingClientRect();
        const k = metrics.width / metrics.height;
        method(base64, k);
        img.remove();
    }
}


function addRectangleToSlide() {
    store.dispatch(addFigure('rectangle'));
}

function addTriangleToSlide() {
    store.dispatch(addFigure('triangle'));
}

function addCircleToSlide() {
    store.dispatch(addFigure('circle'));
}

function addTextToSlide() {
    store.dispatch(addText());
}

function addImgToViewport(path: string, k: number) {
    store.dispatch(addImage(path, k));
}

function addSlideToViewport() {
    store.dispatch(addSlide());
}

function CreateMenuFigures() {

    const [areInstrumensVisible, changeInstrumentsVisibility] = React.useState(
        false
    );

    return (
        <div className={styles.instrumentsButtonBlock}>
            <div
                className={styles.openInstrumentsBtn}
                onClick={() => {
                    changeInstrumentsVisibility(!areInstrumensVisible);
                }}
                style={areInstrumensVisible ? {backgroundImage: `url(${minusIcon})`} : {backgroundImage: `url(${plusIcon})`}}
            >
            </div>            
            <div 
                className={styles.instrumentsBlock}
                style={areInstrumensVisible ? {display: 'flex'} : {display: 'none'}}>

                <div onClick={addRectangleToSlide} className={styles.instrumentsButton}>
                    <img className={styles.instrumentsButton__img} src={RectangleIcon} alt='feature icon' />
                </div>
                <div onClick={addTriangleToSlide} className={styles.instrumentsButton}>
                    <img className={styles.instrumentsButton__img} src={TriangleIcon} alt='feature icon' />
                </div>
                <div onClick={addCircleToSlide} className={styles.instrumentsButton}>
                    <img className={styles.instrumentsButton__img} src={CircleIcon} alt='feature icon' />
                </div>
                <div onClick={() => {
                    putImage(addImgToViewport)
                }} className={styles.instrumentsButton}>
                    <img className={styles.instrumentsButton__img} src={ImageIcon} alt='feature icon' />
                </div>
                <div onClick={addTextToSlide} className={styles.instrumentsButton}>
                    <img className={styles.instrumentsButton__img} src={TextIcon} alt='feature icon' />
                </div>
                <div onClick={() => {
                    addSlideToViewport();
                }} className={styles.instrumentsButton}>
                    <img className={styles.instrumentsButton__img} src={AddSlideIcon} alt='feature icon' />
                </div>
            </div>
        </div>
    );
}

export default CreateMenuFigures;
