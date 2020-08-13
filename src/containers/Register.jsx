import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register = () => {

  const handleInput = (e) => {
    console.log(e.target)
  }

  return (
    <section className='register'>
      <section className='register__container'>
        <h2 className='register__title'>Regístrate</h2>
        <form className='register__container--form'>
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

export default Register;