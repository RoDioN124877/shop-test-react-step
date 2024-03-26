import { Link } from "react-router-dom";
import style from "./Nav.module.css";
import Logo from "../assets/Logo.svg";
export const Nav = () => {
  return (
    <div className={style.wrapper}>
      <nav>
        <ul className={style.listWrapper}>
          <li>
            {" "}
            <Link to={"/catalog/woman"}>Для Женщин</Link>
          </li>

          <li>
            <Link to={"/catalog/men"}>Для Мужчин</Link>
          </li>
          <li>
            {" "}
            <Link to={"/catalog/kid"}>Для Детей</Link>
          </li>
        </ul>
      </nav>
      <h1 className={style.logo}>
        <img src={Logo} alt="" />
        the loop{" "}
      </h1>
      <nav className={style.rightWrapper}>
        <ul className={style.listWrapper}>
          <li>Оплата</li>
          <li>Доставка</li>
        </ul>
        <div className="basket">basket</div>
      </nav>
    </div>
  );
};
