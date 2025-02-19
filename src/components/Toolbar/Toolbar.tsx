import { ReactNode } from "react";
import styles from "./Toolbar.module.css";
import TextInput from "../TextInput/TextInput";
import MingcuteSearchLine from "../../icons/MingcuteSearchLine";

export default function Toolbar(): ReactNode {
  return (
    <div className={styles.toolbar}>
      <TextInput
        placeholder={"Search note..."}
        suffixIcon={<MingcuteSearchLine />}
      />

      <select name="" id="">
        <option value="all">All</option>
        <option value="good">Good</option>
        <option value="bad">Bad</option>
      </select>
    </div>
  );
}
