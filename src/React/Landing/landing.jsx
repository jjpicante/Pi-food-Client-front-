import style from './Landing.module.css'
import { NavLink } from 'react-router-dom'


export default function Landing () {
    return(
        <div className={style.all}>
            <div className={style.text}>
                 
                 <NavLink to="/home" className={style.nav}>
                 <button className={style.boton}>Ingresar</button>
                 </NavLink>
                 
            </div>
        </div>
    )
}



