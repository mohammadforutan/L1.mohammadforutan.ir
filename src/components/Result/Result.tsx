import { ReactNode } from "react";
import styles from "./Result.module.css";
import { Dream } from "../../type/dream";

const dreams: Dream[] = [
  {
    id: "1",
    title: "school",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    data: new Date(2025, 1, 14),
    vibe: "good",
  },
  {
    id: "2",
    title: "park",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    data: new Date(2025, 1, 14),
    vibe: "bad",
  },
];

export default function Result(): ReactNode {
  return (
    <div className={styles.result}>
      <ul className="result">
        {dreams.map((dream) => (
          <li key={dream.id}>{dream.title}</li>
        ))}
      </ul>
    </div>
  );
}
