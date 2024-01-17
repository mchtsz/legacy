import styles from '../navbar.module.css'

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/cart">Cart</a>
    </nav>
  )
}
