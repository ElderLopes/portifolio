import style from '../../styles/Curriculo.module.css'



export default function Curriculo() {
    return (
        <>
        <div className={style.divContainer}>
        <h1 className={style.title}>Currículo</h1>
        <div>
            <object className={style.objectCV} data="/images/Desenvolvedor_FullStack_Elder_Ferreira_Lopes.pdf" type="application/pdf" width="100%" height="500">
  <p className={style.paraweb}>Seu navegador não suporta visualização de PDF. Você pode <a href="/images/Desenvolvedor_FullStack_Elder_Ferreira_Lopes.pdf">baixar o PDF</a> em vez disso.</p>
</object>
<p className={style.paragmobile}>Você pode <a className={style.link} href="/images/Desenvolvedor_FullStack_Elder_Ferreira_Lopes.pdf">baixar o PDF</a> </p>

</div>
</div>
</>
    )
}