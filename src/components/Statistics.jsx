export default function Statistics(props) {
  const { stats, title } = props;
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map((item) => (
          <li key={item.id} className="item">
            <span className="label">{item.label}</span>
            <span className="percentage"> {item.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
