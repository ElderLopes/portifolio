'use client'
import { useEffect } from 'react'

import style from '../../styles/Projects.module.css'
import Image from 'next/image'
import Aos from 'aos'
import'aos/dist/aos.css'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInternetExplorer } from '@fortawesome/free-brands-svg-icons'; // Observe que usamos 'free-brands-svg-icons' para ícones de marcas.


export default function Projeto() {

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  },[])

  return (
    <>
      <div className={style.divTitle}>

        <h1>Projetos Realizados </h1>
        <h3 className={style.textDecor}>{'</>'}</h3>
      </div>

      <div
       data-aos="fade-down-right"
       data-aos-duration="2000"
        className={style.divProject}>
        <Image className={style.ImageProject}
          src={`/images/previsao do tempo.png`}
          width="500"
          height="300"
          alt={'Projeto previsão do tempo'}
        />
        <div className={style.divText}>
          <h1 className={style.title}><span className={style.span}>{'<'}</span>Previsão do Tempo<span className={style.span}>{'/>'}</span></h1>
          <p className={style.parag}>Este é um projeto de previsão do tempo que utiliza a API do OpenWeatherMap para fornecer informações sobre o clima em várias cidades ao redor do mundo.</p>
          <h2 className={style.subTitle}>Funcionamento:</h2>
          <p className={style.parag}>O usuário pode digitar o nome de uma cidade no campo de pesquisa e clicar em {"Procurar"} para obter informações sobre o clima naquela cidade. As informações incluem a temperatura atual, a sensação térmica, a umidade, a velocidade do vento e a previsão do tempo para os próximos dias.</p>
          <h2 className={style.subTitle}>{"Skill's"} Utilizadas</h2>
          <div className={style.divBagTEc}>
            <div className={style.bagTec}>
              <Image className={style.ImgTec}
                src={`/images/javascript.png`}
                width="50"
                height="50"
                alt={'JavaScript'}
              />
              <p className={style.ling}>JavaScript</p>
            </div> <div className={style.bagTec}>
              <Image className={style.ImgTec}
                src={`/images/html.png`}
                width="50"
                height="50"
                alt={'HTML'}
              />
              <p className={style.ling}>HTML</p>
            </div> <div className={style.bagTec}>
              <Image className={style.ImgTec}
                src={`/images/css.png`}
                width="50"
                height="50"
                alt={'CSS'}
              />
              <p className={style.ling}>CSS</p>
            </div>
          </div>
          <p className={style.p}>Projeto On-line</p>
                <a href='https://previsaotempoelder.netlify.app/' target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                        icon={faInternetExplorer}
                        className={style.icon}
                    /></a>
          <h3 className={style.textDecor}>{'</>'}</h3>
        </div>
      </div>

      <div
    
    data-aos="fade-down-right"
    data-aos-duration="2000"
      className={style.divProject}>
        <Image className={style.ImageProject}
          src={`/images/conver.png`}
          width="500"
          height="500"
          alt={'Projeto de Conversao'}
        />
        <div className={style.divText}>
          <h1 className={style.title}><span className={style.span}>{'<'}</span>Conversor de Moedas<span className={style.span}>{'/>'}</span></h1>
          <p className={style.parag}>projeto de conversão de moedas que oferece aos usuários a capacidade de converter valores em reais (BRL) para quatro das moedas mais populares: Dólar Americano (USD), Euro (EUR), Bitcoin (BTC) e Libra Esterlina (GBP). Este projeto utiliza uma API financeira para obter as taxas de câmbio mais atualizadas.</p>
          <h2 className={style.subTitle}>Funcionamento:</h2>
          <p className={style.parag}>Funcionalidades Principais:

            Os usuários podem inserir um valor em reais (BRL).
            Eles têm a opção de selecionar para qual moeda desejam converter o valor, incluindo Dólar Americano, Euro, Bitcoin e Libra Esterlina.
            Ao clicar no botão {"Converter"}, o projeto busca as taxas de câmbio mais recentes usando a API e exibe o valor convertido em tempo real.
            A interface do projeto é amigável e fornece informações detalhadas sobre a conversão, incluindo o nome da moeda selecionada e uma imagem representativa.</p>
          <h2 className={style.subTitle}>{"Skill's"} Utilizadas</h2>
          <div className={style.divBagTEc}>
            <div className={style.bagTec}>
              <Image className={style.ImgTec}
                src={`/images/javascript.png`}
                width="50"
                height="50"
                alt={'JavaScript'}
              />
              <p className={style.ling}>JavaScript</p>
            </div> <div className={style.bagTec}>
              <Image className={style.ImgTec}
                src={`/images/html.png`}
                width="50"
                height="50"
                alt={'HTML'}
              />
              <p className={style.ling}>HTML</p>
            </div> <div className={style.bagTec}>
              <Image className={style.ImgTec}
                src={`/images/css.png`}
                width="50"
                height="50"
                alt={'CSS'}
              />
              <p className={style.ling}>CSS</p>
            </div>
          </div>
          <p className={style.p}>Projeto On-line</p>
                <a href='https://conversaomoedas.netlify.app/' target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                        icon={faInternetExplorer}
                        className={style.icon}
                    /></a>
          <h3 className={style.textDecor}>{'</>'}</h3>

        </div>
      </div>

<div
data-aos="fade-down-right"
data-aos-duration="2000"
className={style.divProject}>
  <Image className={style.ImageProject}
    src={`/images/sorteador.png`}
    width="500"
    height="500"
    alt={'Projeto de Conversao'}
  />
  <div className={style.divText}>
    <h1 className={style.title}><span className={style.span}>{'<'}</span>Sorteador de Números Aleatórios<span className={style.span}>{'/>'}</span></h1>
    <p className={style.parag}>Este é um projeto simples que consiste em um sorteio aleatório de números. O usuário pode definir o intervalo dos números a serem sorteados e obter o resultado.</p>
    <h2 className={style.subTitle}>Funcionamento:</h2>
    <p className={style.parag}>Funcionalidades Principais:<br></br>
Permite ao usuário definir um intervalo de números para realizar o sorteio.<br></br>
Gera um número aleatório dentro do intervalo fornecido.<br></br>
Exibe o número sorteado em um alerta.<br></br>
Insira o número mínimo desejado no primeiro campo de entrada.<br></br>
Insira o número máximo desejado no segundo campo de entrada.<br></br>
Clique no botão{ "Sortear"}.<br></br>
O número sorteado será exibido em um alerta.<br></br>
</p>
    <h2 className={style.subTitle}>{"Skill's"} Utilizadas</h2>
    <div className={style.divBagTEc}>
      <div className={style.bagTec}>
        <Image className={style.ImgTec}
          src={`/images/javascript.png`}
          width="50"
          height="50"
          alt={'JavaScript'}
        />
        <p className={style.ling}>JavaScript</p>
      </div> <div className={style.bagTec}>
        <Image className={style.ImgTec}
          src={`/images/html.png`}
          width="50"
          height="50"
          alt={'HTML'}
        />
        <p className={style.ling}>HTML</p>
      </div> <div className={style.bagTec}>
        <Image className={style.ImgTec}
          src={`/images/css.png`}
          width="50"
          height="50"
          alt={'CSS'}
        />
        <p className={style.ling}>CSS</p>
      </div>
    </div>
    <p className={style.p}>Projeto On-line</p>
                <a href='https://sorteadornumero.netlify.app/' target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                        icon={faInternetExplorer}
                        className={style.icon}
                    /></a>
    <h3 className={style.textDecor}>{'</>'}</h3>
  </div>
</div>   

    </>
  )
}