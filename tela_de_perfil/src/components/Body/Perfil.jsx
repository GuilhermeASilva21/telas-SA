import React from 'react';
import './Login.css';
import Logo from '../Logo/Logo';
const Perfil = () => {


  

  return (
    <div className='PerfilContainer'>
      <div className='topo'>

      </div>
      <div className='meio'>
        <div className='LadoEsquerdo'>
            <div className='NomeUsuario'>
               <h1 className='nome'>#fulano</h1>
            </div>
            <div className='IdUsuario'>
                <h1 className='nome'>#id</h1>
            </div>
            <div className='DivLogo'>
               <Logo/>
            </div>
            <div className='DataPerfil'>
                <h1 className='nome'>dia talksksksk</h1>
            </div>
        </div>
        <div className='LadoDireito'>
            <div className='cimaMeio'>
            <div className='titulo'>
              <h1 className='EditarPerfil'>Editar Perfil</h1>
            </div>
              <div className='infoUsuario'>
                <h1 className='EditarPerfil2'>Informações de usuário</h1>
              </div>
            </div>
              <div className='dadosPerfilCima'>
                  <div className='inptS'>
                    <label className='nomes'>Nome Completo</label>
                    <input className='inpt'/>
                  </div>
                  <div className='inptS'>
                    <label className='nomes'>Senha</label>
                    <input className='inpt'
                     type='password'/>
                  </div>
              </div>
              <div className='dadosPerfilBaixo'>
                  <div className='inptS'>
                    <label className='nomes'>E-mail</label>
                    <input className='inpt'/>
                  </div>
                  <div className='inptS'>
                    <label className='nomes'>Telefone</label>
                    <input className='inpt'/>
                  </div>
              </div>
              <div className='DivBotao'>

              <div className='botao'>
                <button className="botaoSalvar">
                  SALVAR
                </button>
              </div>
              </div>
        </div>  
      </div>
      <div className='baixo'>

      </div>
    </div>
  );
};

export default Perfil;
