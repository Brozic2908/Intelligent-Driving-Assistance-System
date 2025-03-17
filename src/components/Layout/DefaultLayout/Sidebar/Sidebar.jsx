import styles from "./Sidebar.module.css"

const SideBar = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li>Home</li>
        <li>Services</li>
        <li>Profile</li>
        <li>Logout</li>
      </ul>
    </div>
  )
}

export default SideBar