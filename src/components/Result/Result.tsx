import { ReactNode } from "react";
import styles from "./Result.module.css";
import { Dream } from "../../type/dream";
import Button from "../Button/Button";
import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line";

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
    <ul className={styles.result}>
      {dreams.map((dream) => (
        <li key={dream.id}>
          <div className={styles.title}>{dream.title}</div>
          <div className={styles.actions}>
            <Button color="primary" variant="ghost" size="small" shape="square">
              <MingcuteEdit2Line />
            </Button>
            <Button color="danger" variant="ghost" size="small" shape="square">
              <MingcuteDelete2Line />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
