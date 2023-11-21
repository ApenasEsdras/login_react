import React, { useState } from 'react';
import { Container, Form } from "./style";
import Input from "../../components/input/index";
import Botao from "../../components/botao/index";
import { validarSenha, validarEmail } from "../../utils/validadores";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      alert('Login');
      setLoading(false);
    } catch (err) {
      alert('Algo deu errado', err);
    }
  };

  const handleChange = (event) => {
    console.log('Digitando...', event.target.name, event.target.value);
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log('Form', form);
  };

  const validadorImput = () => {
    return validarEmail(form.email) && validarSenha(form.password);
  };

  console.log('Está válido?', validadorImput());

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Faça seu login.🥸 </h1>
        <Input
          name='email'
          placeholder='Digite o seu e-mail'
          onChange={handleChange}
          type='email'
        />
        <Input
          name='password'
          placeholder='Digite a sua senha'
          onChange={handleChange}
          type='password'
        />
        <Botao
          type='submit'
          text='Entrar!'
          disabled={loading === true || !validadorImput()}
        />
        <div>
          <p> Não possui conta?</p>
          <p>====Cadastrar====</p>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
