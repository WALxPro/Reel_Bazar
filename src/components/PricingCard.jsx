import { Link } from "react-router-dom";

export default function PricingCard({ plan, accent, service }) {
  const planQuery = encodeURIComponent(`${service} – ${plan.name}`);
  return <article className={`rb-price-card ${plan.featured ? "is-featured" : ""}`} style={{ "--accent": accent }}>
    {plan.featured && <span className="rb-popular">Most popular</span>}
    <p className="rb-mono">{plan.name}</p>
    <div className="rb-price"><sup>$</sup>{plan.price}<small>{plan.suffix}</small></div>
    <h3>{plan.subtitle}</h3>
    <ul>{plan.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
    {plan.delivery && <p className="rb-delivery">Delivery: ~{plan.delivery}</p>}
    <Link className="rb-button rb-price-button" to={`/contact?plan=${planQuery}`}>Choose {plan.name} ↗</Link>
  </article>;
}
