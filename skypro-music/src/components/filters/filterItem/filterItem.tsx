import classNames from "classnames";
import styles from "./filterItem.module.css";
import { FilteItemType } from "@/types";

export default function FilterItem({
  handleFilterClick,
  title,
  list,
  isOpened
}: FilteItemType) {
  return (
    <>
<div className={styles.wrapper}>
      <div
        onClick={() => handleFilterClick(title)}
        className={classNames(
          styles.filterButton,
          styles.btnText,
          {[styles.active]: isOpened}
        )}
      >
        {title} {/* исполнителю */}
      </div>
      {/* подтягиваем список(мапим) и передаем его в li строку как item
  это будет выпадающий спсиок. */}
      {isOpened && (<ul className={styles.filterList}>
        <div className={styles.filterListDiv}>
        {list.map((item) => (
          <li className={styles.filterItem}
          key={item}>{item}</li>
        ))}
        </div>
      </ul>)}
      </div>
    </>
  );
}
