import React, { useState, useEffect, useRef } from "react";
import { useIntl } from "react-intl";

const styles = {
  input: {
    accentColor: "#4945ff",
  },

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
    
    return <input style={styles.input} type="checkbox" value={value} onChange={onChange}   />
};

export default Checkbox;

