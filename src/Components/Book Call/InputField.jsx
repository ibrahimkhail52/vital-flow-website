import React from "react";
import styles from "./style";

function InputField({ label, name, type = "text", register, error, placeholder, rows }) {
  return (
    <div className="flex flex-col gap-5">
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          id={name}
          rows={rows || 3}
          {...register(name)}
          className={styles.input}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          id={name}
          type={type}
          {...register(name)}
          className={styles.input}
          placeholder={placeholder}
        />
      )}

      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  );
}

export default InputField;