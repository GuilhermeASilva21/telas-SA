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
                <button className='botaoAddParticipante' >Buscar Participante</button>
            </div>
            <div className='meioBaixo'>
              
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
