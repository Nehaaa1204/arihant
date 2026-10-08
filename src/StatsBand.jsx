import React from "react";
import StatCounter from "./StatCounter";
import { STATS } from "./data";

export default function StatsBand() {
  return (
    <div className="stats">
      <div className="wrap">
        {STATS.map((s) => (
          <StatCounter key={s.label} count={s.count} suffix={s.suffix} label={s.label} />
        ))}
      </div>
    </div>
  );
}
