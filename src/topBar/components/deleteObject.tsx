import React from 'react';
import icon from '../img/trash-icon.svg';
import { deleteSlideObject } from '../../actions/actionsCreators';
import { connect } from 'react-redux';
import styles from './deleteObject.module.css';

interface DeleteObjectProps {
    deleteSlideObject: () => void;
}

function DeleteObject(props: DeleteObjectProps) {
    return (
        <div className={styles.btnStyle} onClick={() => {
            props.deleteSlideObject();
        }}><img src={icon} alt="delete icon" className={styles.iconStyle} />
        </div>
    )
}

const mapDispatchToProps = {
    deleteSlideObject
}


export default connect(null, mapDispatchToProps)(DeleteObject)