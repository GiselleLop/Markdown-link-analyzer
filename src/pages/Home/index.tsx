import style from "./Home.module.css"
import fileIcon from "../../assets/images/fileIcon.png"
import directoryIcon from "../../assets/images/directoryIcon.png"

export const HomePage = () => {
  return (
    <section id="home" data-route="/" className={style.home_main}>
       <h1 className={style.text_home}>Discover, manage, scan, and analyze all the links in your Markdown files quickly, easily, and with just one click.</h1>
       <div className={style.selectors_container}>
        
        <div className={style.directory}>
            <img className={style.icon_select} src={directoryIcon}/>
            <h1 className={style.select_text}>Choose a directory</h1>
        </div>

        <div className={style.file}>
            <img className={style.icon_select} src={fileIcon}/>
            <h1 className={style.select_text}>Choose a MD file</h1>

        </div>
       
       </div>
       <button className={style.button_main}>Analyze</button>
    </section>
  )}