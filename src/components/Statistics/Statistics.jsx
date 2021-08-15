import PropTypes from "prop-types";
import "./Statistics.style.css";
export default function Statistics(props) {
  const { stats, title } = props;
  return (
    <section className="statistics">
      <h2 className="Stat-title">{title}</h2>

      <ul className="stat-list">
        {stats.map((item) => (
          <li key={item.id} className="Stat-item">
            <span className="Stat-label">{item.label}</span>
            <span className="Stat-percentage"> {item.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.string,
  title: PropTypes.string,
};
