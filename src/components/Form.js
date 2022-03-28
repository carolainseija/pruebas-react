import React from 'react';
import classes from './Form.module.css';
const Form = (props) => {

    const Title = () => <h1>{props.text2}</h1>
    const Parrafo = () => <p>{props.par}</p>

    return (
        <form className={classes.form}>
            {/* Las props de estas const se aaplican en el componente pare "form" */}
            <Title />
            <Parrafo />
            <input id='input-text' name='input1' type="text" placeholder="textos." />
            <input />
            {props.children}
        </form>
    )
}

export default Form;