import styles from './Header.module.css'
import Robotimg from '../../../../assets/robot.svg'
import Setting from '../../../../assets/Setting.png'
import Notification from '../../../../assets/Notification.png'
import Ava from '../../../../assets/Avatar.png'
const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={Robotimg} alt="Robot"></img>
          <div className={styles.SDA}>SDA</div>
        </div>
        <div className={styles.action}>
          <img src={Setting} alt ="Setting" ></img>
          <img src ={Notification} alt="Notification"></img>
          <img src ={Ava} alt="Avatar"></img>
        </div>
      </div>
    </header>
  )
}

export default Header