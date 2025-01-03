import React from 'react';
import './landing_Page.css';
import Logo from '../Logo/Logo';
const LandingPage = () => {


  

  return (
    <div className="container-Landing">
      <div className='topo-Landing'>
        <label className='LblTopo-Landing'>Conheça o Fut Agenda</label>
      </div>
      <div className='meio-Landing'>
        <div className='divLogoLanding'><Logo/></div>
        <div className='divTituloLanding'>
          <label className='LblTitulo-Landing'>Fut Agenda</label>
        </div>
        <div className='divBotaoLading'>
          <button className='botaoVisiteLading'> Visite nosso página</button>
        </div>
        <div className='divInfoLanding'>
          <div className='lblPosicaolanding'>
            <label className='LblinfoLanding'>Informações</label>
          </div>
        </div>
        <div className='divPrimeiraFotoLanding'>
          <div className='quadradoFotoLanding'>  
            <div className='foto1Landing'>
              {/* foto */}
            </div>
          </div>
          <div className='quadradoEscritaLanding'>
            <div className='tituloEscrita1'>   <label >Sobre nós</label>  </div>
            <div className='escrita1Landing'>   
         
            <label className='escritaLblLanding'>Fut Agenda é um aplicativo inovador para a gestão de campos de futebol. Ele facilita o aluguel de horários, a gestão de calendários e o controle financeiro para donos de campos. Os jogadores também se beneficiam ao visualizar horários, alugar campos e convidar amigos para jogos. Simplifique sua rotina esportiva com o Fut Agenda!</label>
            </div>
          </div>
        </div>
        <div className='divPrimeiraFotoLanding'>
          <div className='quadradoEscritaLanding'>
          <div className='tituloEscrita1'>   <label >Gerencia seu campo</label>  </div>
            <div className='escrita1Landing'>     
            <label className='escritaLblLanding'>Nossa plataforma facilita a gestão de campos de futebol, permitindo controle de horários, tarifas, usuários e finanças em tempo real, além de otimizar a ocupação e criar estratégias de marketing.</label>
            </div>
          </div>
          <div className='quadradoFotoLanding'>  
            <div className='foto1Landing'>
              {/* foto */}
            </div>
          </div>
        </div>
        <div className='divPrimeiraFotoLanding'>
          <div className='quadradoFotoLanding'>  
            <div className='foto1Landing'>
              {/* foto */}
            </div>
          </div>
          <div className='quadradoEscritaLanding'>
          <div className='tituloEscrita1'>   <label >Agende e jogue</label>  </div>
            <div className='escrita1Landing'>     
            <label className='escritaLblLanding'>Nosso app permite alugar campos de futebol de forma simples, com reservas em tempo real e opções de jogos privados ou abertos.Entre no jogo com praticidade e diversão – o campo é seu, a vitória é nossa! Entre no jogo com praticidade e diversão – o campo é seu, a vitória é nossa! </label>
            </div>
          </div>
        </div>
      </div>
      <div className='baixo-Landing'>
        <img className='Logo' src="./imagens/instagram(1).png"/>
        {/* nao consegui por a imagem do insta */}
        <label >Copyright © 2024 Fut Agenda – Todos os direitos reservados.</label>
        <div className='linhaLanding'></div>
        <label >Desenvolvido por futagenda@gmail.com</label>
      </div>
    </div>
  );
  
};

export default LandingPage;
