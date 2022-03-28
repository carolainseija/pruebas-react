import React from 'react';
import classes from './Content.module.css';
const Content = (props) => {
    return (
        <div className={classes['content-root']}>
            {props.children}
        </div>
    )
}

export default Content;