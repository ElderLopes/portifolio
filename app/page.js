'use client'
import { useEffect } from 'react'

import style from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Aos from 'aos'
import'aos/dist/aos.css'

export default function Home() {

useEffect(() => {
  Aos.init();
  Aos.refresh();
},[])

  return (
    <>
      <div className={style.divStart} >
      <h1 className={style.title} >Portifólio <span className={style.span}>{'<'}</span>  Desenvolvedor Full Stack <span  className={style.span}>{'/>'}</span ></h1>
      <h2 className={style.subtitle}>Elder Ferreira Lopes</h2>
      </div>

<div className={style.divsobre}>
<p className={style.text}>Olá, sou um desenvolvedor Full Stack com experiência em tecnologias front-end e back-end. Sou apaixonado por tecnologia e busco sempre soluções inovadoras para atender às necessidades dos meus clientes.</p>

<p className={style.text}>Linguagens e Frameworks em que atuou:</p>

<div data-aos="fade-left" data-aos-duration="2000" className={style.divBagTEc}>
<Image className={style.ImgTec}
        src={`/images/react.png`}
        width="50"
        height="50"
        alt={'React'}
      />
      <Image className={style.ImgTec}
        src={`/images/javascript.png`}
        width="50"
        height="50"
        alt={'JavaScript'}
      />

       <Image className={style.ImgTec}
        src={`/images/typescript.png`}
        width="50"
        height="50"
        alt={'TypeScript'}
      />
        <Image className={style.ImgTec}
        src={`/images/next.png`}
        width="50"
        height="50"
        alt={'Nextjs'}
      />
      <Image className={style.ImgTec}
        src={`/images/flutter.png`}
        width="100"
        height="100"
        alt={'Flutter'}
      />
      </div>

<p className={style.text}>No que diz respeito às minhas habilidades de front-end, tenho experiência em:</p>

<div data-aos="fade-left" data-aos-duration="2000" className={style.divBagTEc}>
      <Image className={style.ImgTec}
        src={`/images/html.png`}
        width="50"
        height="50"
        alt={'HTML'}
      />
        <Image className={style.ImgTec}
        src={`/images/css.png`}
        width="50"
        height="50"
        alt={'CSS'}
      />
        <Image className={style.ImgTec}
        src={`/images/figma.png`}
        width="50"
        height="50"
        alt={'Figma'}
      />
      </div>
<p className={style.text}>No que se refere às minhas habilidades de back-end, tenho experiência em:</p>

<div data-aos="fade-left" data-aos-duration="2000" className={style.divBagTEc}>
<Image className={style.ImgTec}
        src={`/images/postgresql.png`}
        width="50"
        height="50"
        alt={'PostgreSQL'}
      />
      <Image className={style.ImgTec}
        src={`/images/mongodb.png`}
        width="100"
        height="100"
        alt={'MongoDB'}
      />
        <Image className={style.ImgTec}
        src={`/images/node.png`}
        width="100"
        height="100"
        alt={'MongoDB'}
      />
      </div>
</div>
<div className={style.divProject}>
<h1 className={style.title}>Alguns de meus Projetos...</h1>

</div>

      <div  className={style.divCard} >

<div  data-aos="fade-up" data-aos-duration="2000" className={style.Project}>
      <Image
        src={`/images/previsao_do_tempo.png`}
        width="200"
        height="200"
        alt={'Projeto previsão do tempo'}
      />
      <h3 className={style.titleProject}>Previsão do Tempo</h3>
      <p className={style.sobrecard}>Este é um projeto de previsão do tempo que utiliza a API do OpenWeatherMap para fornecer informações sobre o clima em várias cidades ao redor do mundo.</p>
      <Link href={'/projeto'}  className={style.linkProject}>Mais Informações</Link>
      <Link href={'https://previsaotempoelder.netlify.app/'}  className={style.linkProject} target="_blank" rel="noopener noreferrer">Projeto On-line</Link>

    </div>

<div data-aos="fade-up" data-aos-duration="2000" className={style.Project}>
      <Image
        src={`/images/conver.png`}
        width="200"
        height="200"
        alt={'Projeto Conversão de Moedas'}
      />
      <h3 className={style.titleProject}>Conversor de Moedas</h3>
      <p className={style.sobrecard}>Projeto de conversão de moedas que oferece aos usuários a capacidade de converter valores em reais (BRL) para quatro das moedas mais populares. Este projeto utiliza uma API financeira para obter as taxas de câmbio mais atualizadas.</p>
      <Link href={'/projeto'}  className={style.linkProject}>Mais...</Link>
      <Link href={'https://conversaomoedas.netlify.app/'}  className={style.linkProject} target="_blank" rel="noopener noreferrer">Projeto On-line</Link>

    </div>
    <div data-aos="fade-up" data-aos-duration="2000" className={style.Project}>
      <Image
        src={`/images/sorteador.png`}
        width="200"
        height="200"
        alt={'Sorteador de Numeros Aleatorios'}
      />
      <h3 className={style.titleProject}>
Sorteador de Números Aleatórios</h3>
      <p className={style.sobrecard}>
Este é um projeto simples que consiste em um sorteio aleatório de números. O usuário pode definir o intervalo dos números a serem sorteados e obter o resultado.</p>
      <Link href={'/projeto'}  className={style.linkProject}>Mais...</Link>
      <Link href={'https://sorteadornumero.netlify.app/'}  className={style.linkProject} target="_blank" rel="noopener noreferrer">Projeto On-line</Link>

    </div>
    <div data-aos="fade-up" data-aos-duration="2000" className={style.Project}>
      <Image
        src={`/images/pokenext.png`}
        width="200"
        height="200"
        alt={'Projeto Pokenext'}
      />
      <h3 className={style.titleProject}>PokeNext</h3>
      <p className={style.sobrecard}>PokeNext é uma aplicação web que utiliza a API PokeAPI para mostrar informações sobre os Pokémon. Você pode listar todos os Pokémon disponíveis e obter detalhes sobre um Pokémon específico.</p>
      <Link href={'/projeto'}  className={style.linkProject}>Mais...</Link>
    </div>

    <div data-aos="fade-up" data-aos-duration="2000" className={style.Project}>
      <Image
        src={`/images/user1.png`}
        width="200"
        height="200"
        alt={'Projeto Pokenext'}
      />
      <h3 className={style.titleProject}> Registro de Usuários </h3>
      <p className={style.sobrecard}>Sistema de registro de usuários no backend com uma interface de usuário em React no frontend. </p>
      <Link href={'/projeto'}  className={style.linkProject}>Mais...</Link>
    </div>
    

      </div>

    </>
  )
}
