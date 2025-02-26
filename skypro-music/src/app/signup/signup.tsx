import Image from "next/image";
import Link from "next/link";


export default function SignUp(){
    return(
  <div className="wrapper">
    <div className="container-signup">
      <div className="modal__block">
        <form className="modal__form-login">
          <Link href="./img/logo_modal.png">
            <div className="modal__logo">
              <Image src="../img/logo_modal.png" alt="logo" />
            </div>
          </Link>
          <input
            className="modal__input login"
            type="text"
            name="login"
            placeholder="Почта"
          />
          <input
            className="modal__input password-first"
            type="password"
            name="password"
            placeholder="Пароль"
          />
          <input
            className="modal__input password-double"
            type="password"
            name="password"
            placeholder="Повторите пароль"
          />
          <button className="modal__btn-signup-ent">
            <a href="../index.html">Зарегистрироваться</a>
          </button>
        </form>
      </div>
    </div>
  </div>
);
}
