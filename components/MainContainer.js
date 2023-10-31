import NavBar from "@/components/NavBar";
import Footer from "./Footer";
import style from "@/styles/MainContainer.module.css";

export default function MainContainer({children}) {
return(
    <>
    <NavBar/>
    <div className={style.container} >{children}</div>
    <Footer/>
    </>
)
}