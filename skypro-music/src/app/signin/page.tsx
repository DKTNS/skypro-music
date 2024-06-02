import Image from "next/image";
import Link from "next/link";
import styles from "./signin.module.css"
import classNames from "classnames";

export default function SigninPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerEnter}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormLogin} action="#">
            <Link href="../">
              <div className={styles.modalLogo}>
                <Image
                  className={styles.modalLogo}
                  src="../img/logo_modal.png"
                  alt="logo"
                />
              </div>
            </Link>
            <input
              className={classNames(styles.modalInput, styles.login)}
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              className={classNames(styles.modalInput, styles.password)}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <button className={styles.modalBtnEnter}>
              <Link href="/page.tsx">Войти</Link>
            </button>
            <button className={styles.modalBtnEnter}>
              <Link href="/signup">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
