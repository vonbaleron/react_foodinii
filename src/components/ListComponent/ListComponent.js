import React from 'react';
import ListItem from './ListItem/ListItem';
import styles from './ListComponent.module.scss';
import { breakfastsData } from '../../data/breakfastsData';
import { dinnersData } from '../../data/dinnersData';
import { lunchesData } from '../../data/lunchesData';

export const BreakfastsListComponent = () => (
    <ul className={styles.wrapper}>
        {breakfastsData.map((item) => (
            <ListItem 
                name={item.name}
                description={item.description}
                image={item.image}
            />
        
        ))}
    </ul>
);
export const DinnersListComponent = () => (
    <ul className={styles.wrapper}>
        {dinnersData.map((item) => (
            <ListItem 
                name={item.name}
                description={item.description}
                image={item.image}
            />
        
        ))}
    </ul>
);
export const LunchesListComponent = () => (
    <ul className={styles.wrapper}>
        {lunchesData.map((item) => (
            <ListItem 
                name={item.name}
                description={item.description}
                image={item.image}
            />
        
        ))}
    </ul>
);

