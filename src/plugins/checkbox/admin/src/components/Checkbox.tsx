import React, { useState, useEffect, useRef } from "react";
import { useIntl } from "react-intl";

const styles = {
  input: {
    accentColor: "#4945ff",
    height: 38,
    width: 38
  },
  div:{
    display: "flex",
    alignItems: 'flex-start',
    gap: 4
  }

};

interface CheckboxProps {
    [key: string]: any;
}

const Checkbox = ({
  name,
  onChange,
  value,
  label,
  intlLabel,
  required,
  attribute,
  description,
  ...props
}: CheckboxProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.checked;
        onChange({ target: { name, value, type: attribute.type } });
    }
    
    return <div style={{...styles.div, flexDirection: "column"}}>
        <label htmlFor={name} style={{fontWeight: 600}}>
          {label}
        </label>
        <input style={styles.input} type="checkbox" checked={value === undefined ? attribute?.options?.default : value} onChange={handleChange}   />
      </div>
};

export default Checkbox;

