import React, { useRef } from 'react';
import Button from './Button';
import classes from './Form.module.css';
// import Input from './Input';

const Form = (props) => {
    //como funcion-componente
    const Title = () => <h1>{props.text2}</h1>
    //como contante se mmuestra de una manera distinta.
    const Parrafo = <p>{props.par}</p>

    const textRef = useRef();

    const info = () => {
        return (
            console.log("info ref", textRef.current.value)
        )
    }

    return (
        <form className={classes.form} onSubmit={info}>
            {/* Las props de estas const se aaplican en el componente pare "form" */}
            {/* muesto las funciones o componentes de esta manera */}
            <Title />
            {/*muestro la constante de esta manera */}
            {Parrafo}
            {/* <Input  /> */}
            <input
                id="input"
                type="text"
                ref={textRef}
                placeholder="REFF"
            />
            <Button type="submit" >Ingresar referencias</Button>

        </form>
    )
}

export default Form;