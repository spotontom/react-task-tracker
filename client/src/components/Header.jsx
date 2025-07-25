import styles from "./Header.module.css"

export default function Header({ username, onLogout }) {
    return (
        <header className={styles.header}>
        <div className={styles.appName}>Tom's Task Tracker</div>
        <div className={styles.userSection}>
          <span className={styles.greeting}>Welcome back, {username}!</span>
          <button className={styles.logout} onClick={onLogout}>Logout</button>
        </div>
        </header>
    )
}