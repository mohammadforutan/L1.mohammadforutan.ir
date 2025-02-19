import { ReactNode } from "react";
import styles from "./Toolbar.module.css";
import TextInput from "../TextInput/TextInput";
import MingcuteSearchLine from "../../icons/MingcuteSearchLine";
import Select from "../Select/Select";

export default function Toolbar(): ReactNode {
  return (
    <div className={styles.toolbar}>
      <TextInput
        placeholder={"Search note..."}
        suffixIcon={<MingcuteSearchLine />}
        /*  ctlr + space = suggest all props*/
      />

      <Select
        options={[
          { value: "all", label: "All" },
          { value: "good", label: "Good" },
          { value: "bad", label: "Bad" },
        ]}
      />
      <button>..</button>
    </div>
  );
}

// web dev simplyfy channel on youtube custom select component
