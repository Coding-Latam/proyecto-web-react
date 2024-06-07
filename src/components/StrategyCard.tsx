import { IStrategyCard } from "../types/strategyCard";

export function StrategyCard({ id, title, description }: IStrategyCard) {
  return (
    <div className="strategy-card">
      <div className="order">{`0${id}`}</div>
      <div className="info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
