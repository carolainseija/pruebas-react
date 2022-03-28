import React from 'react';
import classes from './Form.module.css';
import Input from './Input';
const Form = (props) => {


    //como funcion-componente
    const Title = () => <h1>{props.text2}</h1>
    //como contante
    const Parrafo = <p>{props.par}</p>

    return (
        <form className={classes.form}>
            {/* Las props de estas const se aaplican en el componente pare "form" */}
            {/* muesto las funciones o componentes de esta manera */}
            <Title />
            {/*muestro la constante de esta manera */}
            {Parrafo}
            <input id='input-text' name='input1' type="text" placeholder="textos." />
            <input />
            {props.children}
        </form>
    )
}

export default Form;