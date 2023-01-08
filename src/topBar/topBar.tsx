import React from 'react';
import { AppType, choosedObjectType } from '../types/types';
import styles from './topBar.module.css';
import exportIcon from './img/export-icon.svg';
import Palette from '../pallete/pallete';
import FigureMenu from './components/figureMenu';
import TextMenu from './components/textMenu';
import DeleteObject from './components/deleteObject';
import { connect } from 'react-redux';
import useChangePresentationName from './components/useChangePresentationName';
import { importApp } from '../functionts/jsonMethods';
import { store } from '../index';
import { changePresentationName, 
    exportPDF,
    exportApp,
    setSlideBg,
    deleteSlide
    } from '../actions/actionsCreators';
import { getImageBase64FromDialog } from '../functionts/getImageBase64';
import CloudIcon from './img/cloud-icon.svg';
import CatsIcon from './img/cats-icon.svg';




interface TopbarProps {
    name: string;
    choosedObject: choosedObjectType;
    changePresentationName: (s: string) => void;
    exportPDF: () => void;
}

function Topbar(props: TopbarProps) {
    const input = React.useRef<HTMLInputElement>(null);
    useChangePresentationName(input, props.name, props.changePresentationName);
    
    const [isPaletteVisible, changePaletteVisibility] = React.useState(false);

    const [areFileSettingsVisible, changeFileSettingsVisible] = React.useState(
        false
    );
    
    const [areEditSettingsVisible, changeEditSettingsVisible] = React.useState(
        false
    );

    function exportJson() {
        store.dispatch(exportApp());
    }

    async function setImageToSlide () {
        let base64 = await getImageBase64FromDialog();
        store.dispatch(setSlideBg(base64));
    }

    function deleteCurrentSlide() {
        store.dispatch(deleteSlide());
    }

    let menu;
    if (props.choosedObject.type === 'figure')
        menu = <FigureMenu />;
    else if (props.choosedObject.type === 'text')
        menu = <TextMenu />;
    else if (props.choosedObject.type === 'img') menu = true;
    else menu = null;

    return (
        <>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div
                style={{backgroundImage: `url(${CloudIcon})`}}
                className={styles.topbar_cloud}>
                    <input ref={input} className={styles.topbar__input} />
                </div>
                <div className={`${styles.topBar}`}>
                    {!menu && (
                        <div className={styles.mainMenu}>
                            <div>
                                <p
                                    onClick={() => {
                                        if (areEditSettingsVisible) {
                                            changeFileSettingsVisible(!areFileSettingsVisible);
                                            changeEditSettingsVisible(!areEditSettingsVisible);
                                        }
                                        else {
                                            changeFileSettingsVisible(!areFileSettingsVisible);
                                        }                                }}
                                    className={styles.mainMenu_block}>
                                    Файл
                                </p>
                                <div className={styles.mainMenu_file_settings_block}
                                    style={areFileSettingsVisible ? {display: 'flex'} : {display: 'none'}}>
                                    <p
                                    onClick={importApp}
                                    className={styles.mainMenu_file_settings_block_button}
                                    >Импорт</p>
                                    <p
                                    onClick={exportJson}
                                    className={styles.mainMenu_file_settings_block_button}
                                    >Сохранить json</p>
                                </div>
                            </div>
                            <div>
                                <p
                                    onClick={() => {
                                        if (areFileSettingsVisible) {
                                            changeFileSettingsVisible(!areFileSettingsVisible);
                                            changeEditSettingsVisible(!areEditSettingsVisible);
                                        }
                                        else {
                                            changeEditSettingsVisible(!areEditSettingsVisible);
                                        }
                                    }}
                                    className={styles.mainMenu_block}>
                                    Правка
                                </p>
                                <div className={styles.mainMenu_correction_settings_block}
                                    style={areEditSettingsVisible ? {display: 'flex'} : {display: 'none'}}>
                                    <p
                                    onClick={deleteCurrentSlide}
                                    className={styles.mainMenu_correction_settings_block_button}
                                    >Удалить текущий слайд</p>
                                    <p
                                    onClick={setImageToSlide}
                                    className={styles.mainMenu_correction_settings_block_button}>
                                    Поставить фоновую картинку</p>
                                </div>
                            </div>
                            <div>
                                    <p
                                    className={styles.mainMenu_block}
                                    onClick={() => {
                                        if (isPaletteVisible) {
                                            changePaletteVisibility(false);
                                        }
                                        else {
                                            changePaletteVisibility(true);
                                        }
                                        
                                    }}
                                    >Фон</p>
                            </div>
                            <div className={styles.exportBtn} onClick={props.exportPDF}>
                                <img src={exportIcon} alt="export" />
                            </div>
                        </div>
                    )
                    }
                    {menu && (
                        <div style={{ display: 'flex' }}>
                            {menu}
                            {props.choosedObject.id && (
                                <DeleteObject />
                            )}
                        </div>
                    )
                    }
                    <div>
                        <img src={CatsIcon} alt="cats_icon" className={styles.cats_icon} />
                    </div>
                    {/* <div></div> */}
                </div>
            </div>
            {isPaletteVisible && (
                <Palette
                    visibility={isPaletteVisible}
                    changeVisibility={changePaletteVisibility}
                    type={'slide'}
                />
            )}
        </>
    );
}

interface TopbarOwnProps {
    name: string;
    choosedObject: choosedObjectType;
}

const mapStateToProps = (state: AppType): TopbarOwnProps => {
    return {
        name: state.name,
        choosedObject: state.choosedObject
    }
}

const mapDispatchToProps = {
    changePresentationName,
    exportPDF
}

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
