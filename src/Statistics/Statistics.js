import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";
import randomColor from "./randomColor";

function Statistics({ statistic, title }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {statistic &&
          statistic.map(({ id, label, percentage }) => (
            <li
              style={{ backgroundColor: randomColor() }}
              key={id}
              className={styles.item}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          ))}
      </ul>
    </section>
  );
}

console.log(randomColor());
Statistics.defaultProps = {
  title: "",
  percentage: 0,
  label: "",
  id: ""
};
Statistics.propTypes = {
  title: PropTypes.string,
  statistic: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number.isRequired
    })
  )
};

export default Statistics;
