import styles from './Header.module.css'
import Robot from '../../../assets/robot.svg'
import Setting from '../../../assets/images/Setting.png'
import Notification from '../../../assets/images/Notification.png'
import Ava from '../../../assets/images/Avatar.png'
const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={Robot} alt="Robot"></img>
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