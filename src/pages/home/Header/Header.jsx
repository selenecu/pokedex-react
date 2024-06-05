import css from './header.module.scss'
import logo from '../../../assets/pokemon.png'

export default function Header() {
  return (
    <nav className={css.header}>
    <div className={css.div_header}>
    <div className={css.div_logo}>
        <img src={logo} alt="logo"
        />
    </div>
    <div className={css.div_search}>
        <input type="text" placeholder="Search"/>
    </div>
    </div>

    </nav>
  )
}
