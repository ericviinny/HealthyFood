import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { api } from './services';
import useStorage from './utils/useStorage';

export default function Register(){
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCPF] = useState('');
  const [cep, setCEP] = useState('');
  const [city, setCITY] = useState('');

  const [user, setUser] = useStorage('user');
  const [usuario, setUsuario] = useState({
    nome: '',
    data_nascimento: '',
    cpf: '',
    cep: '',
    city: ''
  });

  const [showModal, setShowModal] = useState(false);

  const [textError, setTextError] = useState('');

  async function validaCEP(e) {
    if (!(cep.length > 0 || (e && e.length === 8))) {
      return setTextError('CEP NÃO INFORMADO!');
    }

    try {
      const response = await api.get(`/${ (e && e.length === 8) ? e : cep}/json`);

      const { cep: cCep, localidade, uf } = response.data;

      setCEP(cCep);
      setCITY(`${localidade} - ${uf}`);
    } catch (error) {
      console.log(error)
      setTextError('CEP INFORMADO É INVÁLIDO!');
    }
  }

  async function handleRegisterButton() {
    await validaCEP();

    if (!(nome.length > 0 || dataNascimento || cpf.length > 0)) {
      setTextError('Todos os campos são obrigatórios.');
      return;
    }

    setUser({ nome, data_nascimento: dataNascimento, cpf, cep, city });
    // window.location = '/cadastro';
  }

  async function handleChangeCEP(e) {
    if (e.length === 8) {
      validaCEP(e);
    }
  }

  useEffect(() => {
    if (user) {
      setUsuario(user);
      setShowModal(true);
    }

  }, [user]);

  return (
    <div className='container'>
      <div className='login-container'>
        <div className='login-card'>
          <h1>HealthyFood</h1>
          <p>Cadastre-se para prosseguir.</p>
          <hr />
          <p className={textError.length > 0 ? 'text-danger' : 'd-none'}>{textError}</p>
          <input type={'text'} name="name" placeholder={'Nome'} defaultValue={nome} onChange={(e) => setNome(e.target.value)} />
          <input type={'date'} name="birth" placeholder={'Data de Nascimento'} defaultValue={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
          <input type={'text'} name="cpf" placeholder={'CPF'} defaultValue={cpf} onChange={(e) => setCPF(e.target.value)} />
          <input type={'text'} name="city_cep" placeholder={'CEP'} defaultValue={cep} onChange={(e) => handleChangeCEP(e.target.value)} />
          <input type={'text'} name="city" placeholder={'CIDADE'} disabled defaultValue={city} />
          <button onClick={handleRegisterButton}>Registrar</button>
        </div>
      </div>

      <Modal show={showModal} className='login-modal'>
        <h1>BEM VINDO!</h1>
        <hr />
        <p>Olá, {usuario.nome}. Seja bem vindo ao nosso sistema, sua conta foi cadastrada com sucesso!</p>

        <button className='btn btn-info text-white'>PROSSEGUIR</button>
      </Modal>
    </div>
  );
}