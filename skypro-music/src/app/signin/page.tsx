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
            <Link href="../page.tsx">
              <div className={styles.modalLogo}>
                <Image
                  className={styles.modalLogo}
                  src="/./img/logo_modal.png"
                  width={366} height={439}
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
              <Link href="/">Войти</Link>
            </button>
            <button className={styles.modalBtnEnter}>
              <Link href="./signup">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
