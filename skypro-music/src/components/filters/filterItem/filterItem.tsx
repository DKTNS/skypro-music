import { FilterItemType, trackType } from "@/types/types";
import styles from "./filterItem.module.css";
import classNames from "classnames";



export default function FilterItem({
  handleFilterClic,
  title,
  isOpened,
  list,
}: FilterItemType) {


  return (
    <>
      <div className={styles.filterblock}>
        <div
          onClick={() => handleFilterClic(title)}
          className={classNames(styles.filterButton, styles.btnText, {
            [styles.active]: isOpened,
          })}
        >
          {title}
        </div>
        {isOpened && (
          <ul className={styles.filterList}>
            {list.map((item) => (
              <li
                className={styles.filterListText}
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
