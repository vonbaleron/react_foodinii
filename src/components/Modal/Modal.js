import React from 'react';
import styles from './Modal.module.scss';

const Modal = ({closeModalFn}) => (
    <div className={styles.wrapper}>
        <button className={styles.closeButton} onClick={closeModalFn}></button>
    </div>
);

export default Modal;