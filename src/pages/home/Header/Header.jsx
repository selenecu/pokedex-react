import css from './header.module.scss'
import logo from '../../../assets/pokemon.png'
import  * as FaIcons from "react-icons/fa";

export default function Header({obtenerSearch}) {
  return (
    <nav className={css.header}>
    <div className={css.div_header}>
    <div className={css.div_logo}>
        <img src={logo} alt="logo"
        />
    </div>
    <div className={css.div_search}>
      <div>
        <FaIcons.FaSearch />
      </div>
        <input type="text" 
        onChange={(e) => obtenerSearch(e.target.value)}/>
    </div>
    </div>

    </nav>
  )
}
