import React from 'react';
import './Login.css';
import { FiArrowLeft} from 'react-icons/fi';
import Logo from '../Logo/Logo';
const ListaJogo = () => {


  

  return (
    <div className="container-master">
      <div className='topo'>
        
      </div>
      <div className='meio'>
          <div className='meioEsquerdo'>
          </div>
              <div className='meioCentral'>
                    <div className='topoMeio'>
                    <div className='topoCentralMeioEsquerdo'>
                    <div className="icon-button">
                    <FiArrowLeft className="icon" />
                    </div>
                    </div>
                    <div className='topoCentralMeioLOGO'>
                    <Logo/>
                    </div>
                    <div className='topoCentralMeioDireito'>
                    <button className='botaoAddParticipante'>Adicionar Participante</button>
                    </div>
                    </div>
                              <div className='meioMeio'>

                              <button className='botaoPesquisaParticipante' >Buscar Participante</button>
                              <img className='lupa' src="./imagens/lupa.png"/>
                              </div>
                                      <div className='meioBaixo'>
                                        <div className='divDados'>
                                          <label  className='labeldoJogador1'>Nome</label>
                                          <label  className='labeldoJogador2'>Função</label>
                                          <label  className='labeldoJogador3'>Comprovante</label>
                                          <label  className='labeldoJogador4'>Hierarquia</label>
                                          <label  className='labeldoJogador5'></label>
                                        </div>
                                        <div className='Dados'>
                                          <div className='lacunas1'>
                                            <label >fulano</label>
                                          </div>
                                          <div className='lacunas2'>
                                          <label >goleiro</label>
                                          </div>
                                          <div className='lacunas3'>
                                          <label >comprovante</label>
                                          </div>
                                          <div className='lacunas4'>
                                          <label >Organizador</label>

                                          </div>
                                          <div className='lacunas5'>
                                            <button className='botaoEditar'>
                                              <img className='lapis' src="./imagens/ferramenta-lapis.png"/>
                                            </button>
                                            <button className='botaoExcluir'>
                                            <img className='lapis' src="./imagens/lixeira.png"/>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
               </div>
                        <div className='meioDireita'>
                        </div>
        </div>
      <div className='baixo'>

      </div>
    </div>
  );
  
};

export default ListaJogo;
