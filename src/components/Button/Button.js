import React from 'react';
import styles from './Button.module.scss'

const Button = ({ children, href, secondary, ...props }) => {

    return(
     <>
      {
          href ? (
            <a
              href={href}
              target="_blank"
              className={styles.button}
              rel="noopener noreferrer"
            >
             {children}
            </a>
          ) : (
              <button className={styles.button} {...props}>
                {children}
              </button>
          )
      }
     </>
    )
};

export default Button;