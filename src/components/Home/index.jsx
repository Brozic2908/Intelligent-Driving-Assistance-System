import Header from "./Header/Header";
import SideBar from "./Sidebar/Sidebar";
import styles from "./DefaultLayout.module.css"
const DefaultLayout = ({children}) => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <div className={styles.container}>{children}</div>
      </div>
    </div>
  )
}

export default DefaultLayout