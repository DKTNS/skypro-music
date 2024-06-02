import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "./nav.module.css";

export default function Nav() {
    return(
      <nav className={classNames(styles.mainNav, styles.nav)}>
        <div className={styles.navLogo}>
          <Image
          alt="Логотип skypro music" 
          className={styles.logoImage} 
          src="/img/logo.png" 
          width={113}
          height={170}/>
        </div>
        <div className={styles.navBurger}>
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </div>
        <div className={styles.navMenu}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link href="#" className={styles.menuLink}>
                Главное
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="#" className={styles.menuLink}>
                Мой плейлист
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="../signin.html" className={styles.menuLink}>
                Войти
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}