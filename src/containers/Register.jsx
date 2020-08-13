import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerRequest } from '../actions/index';
import '../assets/styles/components/Register.scss';

const Register = (props) => {

  const [ form, setValues ] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleInput = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const registerSubmit = (e) => {
    e.preventDefault();
    props.registerRequest(form);

    props.history.push('/');
  }

  return (
    <section className='register'>
      <section className='register__container'>
        <h2 className='register__title'>Regístrate</h2>
        <form className='register__container--form' onSubmit={registerSubmit}>
          <input
            name='name'
            type='text'
            className='input'
            placeholder='Nombre'
            onChange={handleInput}
          />
          <input
            name='email'
            type='text'
            className='input'
            placeholder='Correo Electrónico'
            onChange={handleInput}
          />
          <input
            name='password'
            type='password'
            className='input'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button type='submit' className='button'>Registrarme</button>
        </form>
        <p className='register__container--login'>
          Ya tienes una cuenta.
          <Link to='/login'>Inicia sesión</Link>
        </p>
      </section>
    </section>
  );
}


const mapDispatchToProps = {
  registerRequest
}

export default connect(null, mapDispatchToProps)(Register);