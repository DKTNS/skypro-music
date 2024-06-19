import classNames from "classnames";
import styles from "./filterItem.module.css";
import { FilteItemType } from "@/types";


export default function FilterItem({handleFilterClick, title, list}:FilteItemType) {

  return (
<>    <div onClick={() => handleFilterClick(title)}
    className={classNames(
      styles.filterButton,
      styles.buttonAuthor,
      styles.btnText
    )}
  >
    {title} {/* исполнителю */}
  </div>
  {/* подтягиваем список(мапим) и передаем его в li строку как item
  это будет выпадающий спсиок. */}
    <ul>{list.map((item) => <li key={item}>{item}</li>)}</ul>
  </>
  );
}