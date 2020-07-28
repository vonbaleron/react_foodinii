import React from 'react';
import styles from './ListItem.module.scss';
import Button from '../../Button/Button';




const ListItem = (props) => (
    
    <li className={styles.wrapper}>
        <img
            src={props.image} className={styles.image}
            alt={props.name}
        />
        <div>
            <h2 className={styles.name}>
                {props.name}
            </h2>
            <p className={styles.description}>
                {props.description}
            </p>
            <Button>View Recipe</Button>
        </div>
        
    </li>
);

export default ListItem;