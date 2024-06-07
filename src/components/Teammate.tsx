import { ITeammate } from "../types/teammate";

export function Teammate({ image, name, area, slogan }: ITeammate) {
  return (
    <div className="team-item">
      <img src={image} />
      <h3>{name}</h3>
      <p>{area}</p>
      <p>{slogan}</p>
    </div>
  );
}
