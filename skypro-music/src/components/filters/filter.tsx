import styles from "./filter.module.css";
import classNames from "classnames";

export default function Filters() {
  return (
    <div className={classNames(styles.centerblockFilter, styles.filter)}>
      <div className={styles.filterTitle}>Искать по:</div>
      <div
        className={classNames(
          styles.filterButton,
          styles.buttonAuthor,
          styles.btnText
        )}
      >
        исполнителю
      </div>
      <div
        className={classNames(
          styles.filterButton,
          styles.buttonYear,
          styles.btnText
        )}
      >
        году выпуска
      </div>
      <div
        className={classNames(
          styles.filterButton,
          styles.buttonGenre,
          styles.btnText
        )}
      >
        жанру
      </div>
    </div>
  );
}
