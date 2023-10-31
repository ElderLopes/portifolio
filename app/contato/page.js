import style from '../../styles/Contato.module.css'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareWhatsapp, faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'; // Observe que usamos 'free-brands-svg-icons' para ícones de marcas.



export default function Projeto() {
    return (
        <>
            <h1 className={style.title}>Fale Comigo</h1>
            <h3 className={style.info}>Se você gostou do meu trabalho ou deseja colaborar em um projeto, estou sempre aberto a novas oportunidades e conversas. Sinta-se à vontade para entrar em contato comigo através dos seguintes canais:</h3>
            <div>
                <p className={style.p}>E-mail:</p>
                <a href="mailto:elderfl85@gmail.com">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className={style.icon}
                    />
                </a>
            </div>
            <div>
                <p className={style.p}>WhatsApp:</p>
                <a href="https://api.whatsapp.com/send?phone=47988642462" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                        icon={faSquareWhatsapp}
                        className={style.icon} // Adicione uma classe CSS ao ícone
                    /></a>

            </div>   <div>
                <p className={style.p}>LinkedIn:</p>
                <a href="https://www.linkedin.com/in/elder-ferreira-lopes/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className={style.icon} // Adicione uma classe CSS ao ícone
                    /></a>
            </div><div>
                <p className={style.p}>GitHub:</p>
                <a href="https://github.com/ElderLopes" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                        icon={faSquareGithub}
                        className={style.icon} // Adicione uma classe CSS ao ícone
                    /></a>
            </div>
          
        </>
    )
}