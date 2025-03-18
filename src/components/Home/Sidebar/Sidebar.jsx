import styles from "./Sidebar.module.css"
import { Link } from "react-router-dom"

const SideBar = () => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li onClick={() => window.location.href = '/'}>Logout</li>
      </ul>
    </nav>
  )
}

export default SideBar