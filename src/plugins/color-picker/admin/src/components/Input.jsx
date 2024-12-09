import React, { useState, useEffect, useRef } from "react";
import { useIntl } from "react-intl";

const styles = {
  input: {
    border: "1px solid #dcdce4",
    borderRadius: "4px",
    color: "#32324d",
    fontWeight: 400,
    fontSize: "1.4rem",
    lineHeight: "2.2rem",
    display: "block",
    width: "100%",
    background: "inherit",
    paddingInlineStart: "16px",
    paddingInlineEnd: "16px",
    padding: "8px",
    paddingRight: "50px",
  },
  colorPicker: {
    height: "30px",
    width: "30px",
    right: "10px",
    borderRadius: "50%",
    border: "none",
  },
  preview: (background) => ({
    background,
    borderRadius: "4px",
    height: "20px",
    width: "25px",
    right: "10px",
  }),
};

const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/;
const rgbPattern = /^rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)$/;
const rgbaPattern = /^rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*(0|0?\.\d+|1)\s*\)$/;
const gradientPattern = /^linear-gradient\((.+)\)$/i;

const Input = ({
  name,
  onChange,
  value,
  label,
  intlLabel,
  required,
  attribute,
  description,
  ...props
}) => {
  const { formatMessage } = useIntl();
  const [color, setColor] = useState(value || "#000000");
  const [err, setError] = useState("");
  

  const isValidColor = (color) => {
   
    return (
      hexPattern.test(color) ||
      rgbPattern.test(color) ||
      rgbaPattern.test(color) ||
      gradientPattern.test(color)
    );
  };

  const handleChange = (event) => {
    const newColor = event.target.value;
    setColor(newColor);
    if (isValidColor(newColor)) {
      setError("");
      onChange({ target: { name, value: newColor, type: attribute.type } });
    } else {
      setError("Invalid color or gradient");
    }
  };

  useEffect(() => {
    setColor(value || "#000000");
  }, [value]);

  return (
    <div style={{ width: "100%" }}>
      <label htmlFor={name} style={{fontWeight: 600}}>
        {label}
      </label>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          width: "100%",
        }}
      >
        {/* Input for color or gradient */}
        <input
          id={name}
          name={name}
          value={color}
          onChange={handleChange}
          placeholder="Enter a color or gradient"
          style={styles.input}
        />
        
        {/* Color Picker for solid colors */}
        {
             gradientPattern.test(color) ? <div title="The gradients cannot be selected directly through the color picker but can be entered in the text input" style={{...styles.preview(color), position: "absolute"}} /> :  <input
             type="color"
             value={color.startsWith("#") ? color : "#000000"} // Fallback to solid color for picker
             onChange={handleChange}
             style={{ ...styles.colorPicker, position: "absolute" }}
           />
        }
       

        {/* Preview of the color or gradient */}
        
      </div>
      {description && <p>{formatMessage(description)}</p>}
      {err && <p style={{ color: "red" }}>{err}</p>}
    </div>
  );
};

export default Input;

