import style from '../../styles/Curriculo.module.css'



export default function Curriculo() {
    return (
        <>
        <h1 className={style.title}>Currículo</h1>
        <div>
            <object data="/Desenvolvedor_FullStack_Elder_Ferreira_Lopes.pdf" type="application/pdf" width="100%" height="500">
  <p>Seu navegador não suporta visualização de PDF. Você pode <a href="/Desenvolvedor_FullStack_Elder_Ferreira_Lopes.pdf">baixar o PDF</a> em vez disso.</p>
</object>
</div>

</>
    )
}