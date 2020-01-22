import React from "react";
import PropTypes from "prop-types";

function Statistics({ statistic, title }) {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}

      <ul class="stat-list">
        {statistic.map(({ id, label, percentage }) => (
          <li key={id} class="item">
            <span class="label">{label}</span>
            <span class="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

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
