import React from 'react';
import './HorasPartida.css';
import Logo from '../Logo/Logo';
const HorasPartida = () => {


  

  return (
    <div className="container-master">
      <div className='topo'>
        <div className='topoSeta'>
          <img className='seta' src="./imagens/seta-esquerda.png"/>
        </div>
        <div className='topoTitulo'>
          <label className='topoLabel'>FUT AGENDA</label>
        </div>
        <div className='topoLogo'>
          <Logo/>
        </div>
        
      </div>
            <div className='meio'>
              <div className='meioCima'>

                  <div className='quadrados1'>
                    <div className='parteCima'>
                      <div className='espaco1'><img className='icon' src="./imagens/calendario.png"/></div>
                      <div className='espaco2'><label className=''>30 de fevereiro</label></div>
                    </div>
                    <div className='parteMeio'>
                    <div className='espaco1'><img className='icon' src="./imagens/relogio.png"/></div>
                      <div className='espaco2'><label className=''>09:00</label></div>
                    </div>
                    <div className='parteBaixo'>
                    <div className='espaco1'><img  className='icon' src="./imagens/gps.png"/></div>
                    <div className='espaco2'><label className=''>Rod. joão gualberto suares - 999</label></div>
                    </div>
                    <div className='Divbotao'>
                      <button className='botao'>alugar</button>
                    </div>
                  </div>
                  <div className='quadrados2'>
                    <div className='parteCima'>
                      <div className='espaco1'><img className='icon' src="./imagens/calendario.png"/></div>
                      <div className='espaco2'><label className=''>30 de fevereiro</label></div>
                    </div>
                    <div className='parteMeio'>
                    <div className='espaco1'><img className='icon' src="./imagens/relogio.png"/></div>
                      <div className='espaco2'><label className=''>10:00</label></div>
                    </div>
                    <div className='parteBaixo'>
                    <div className='espaco1'><img  className='icon' src="./imagens/gps.png"/></div>
                    <div className='espaco2'><label className=''>Rod. joão gualberto suares - 999</label></div>
                    </div>
                    <div className='Divbotao'>
                      <button className='botao'>alugar</button>
                    </div>
                  </div>
                  <div className='quadrados3'>
                    <div className='parteCima'>
                      <div className='espaco1'><img className='icon' src="./imagens/calendario.png"/></div>
                      <div className='espaco2'><label className=''>30 de fevereiro</label></div>
                    </div>
                    <div className='parteMeio'>
                    <div className='espaco1'><img className='icon' src="./imagens/relogio.png"/></div>
                      <div className='espaco2'><label className=''>11:00</label></div>
                    </div>
                    <div className='parteBaixo'>
                    <div className='espaco1'><img  className='icon' src="./imagens/gps.png"/></div>
                    <div className='espaco2'><label className=''>Rod. joão gualberto suares - 999</label></div>
                    </div>
                    <div className='Divbotao'>
                      <button className='botao'>alugar</button>
                    </div>
                  </div>
              </div>
              <div className='meioBaixo'>
              <div className='quadrados4'>
                    <div className='parteCima'>
                      <div className='espaco1'><img className='icon' src="./imagens/calendario.png"/></div>
                      <div className='espaco2'><label className=''>30 de fevereiro</label></div>
                    </div>
                    <div className='parteMeio'>
                    <div className='espaco1'><img className='icon' src="./imagens/relogio.png"/></div>
                      <div className='espaco2'><label className=''>21:00</label></div>
                    </div>
                    <div className='parteBaixo'>
                    <div className='espaco1'><img  className='icon' src="./imagens/gps.png"/></div>
                    <div className='espaco2'><label className=''>Rod. joão gualberto suares - 999</label></div>
                    </div>
                    <div className='Divbotao'>
                      <button className='botao'>alugar</button>
                    </div>
                  </div>
                  <div className='quadrados5'>
                    <div className='parteCima'>
                      <div className='espaco1'><img className='icon' src="./imagens/calendario.png"/></div>
                      <div className='espaco2'><label className=''>30 de fevereiro</label></div>
                    </div>
                    <div className='parteMeio'>
                    <div className='espaco1'><img className='icon' src="./imagens/relogio.png"/></div>
                      <div className='espaco2'><label className=''>22:00</label></div>
                    </div>
                    <div className='parteBaixo'>
                    <div className='espaco1'><img  className='icon' src="./imagens/gps.png"/></div>
                    <div className='espaco2'><label className=''>Rod. joão gualberto suares - 999</label></div>
                    </div>
                    <div className='Divbotao'>
                      <button className='botao'>alugar</button>
                    </div>
                  </div>
                  <div className='quadrados6'>
                    <div className='parteCima'>
                      <div className='espaco1'><img className='icon' src="./imagens/calendario.png"/></div>
                      <div className='espaco2'><label className=''>30 de fevereiro</label></div>
                    </div>
                    <div className='parteMeio'>
                    <div className='espaco1'><img className='icon' src="./imagens/relogio.png"/></div>
                      <div className='espaco2'><label className=''>23:00</label></div>
                    </div>
                    <div className='parteBaixo'>
                    <div className='espaco1'><img  className='icon' src="./imagens/gps.png"/></div>
                    <div className='espaco2'><label className=''>Rod. joão gualberto suares - 999</label></div>
                    </div>
                    <div className='Divbotao'>
                      <button className='botao'>alugar</button>
                    </div>
                  </div>
              </div>
            </div>
                  <div className='baixo'>
                  </div>
    </div>
  );
  
};

export default HorasPartida;
