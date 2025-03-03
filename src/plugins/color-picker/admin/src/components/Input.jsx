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
const gradientPattern = {
  test: (color) => {
    return color.startsWith("linear-gradient");
  }
}

const hexToRgba = (hex) => {
  const alphaHex = hex.length === 9 ? hex.slice(7, 9) : 'FF';
  const alpha = parseInt(alphaHex, 16) / 255;
  const rgb = hex.slice(1, 7).match(/.{2}/g)?.map((val) => parseInt(val, 16)) || [0, 0, 0];
  return rgbToHex(`rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha.toFixed(2)})`);
};

const rgbToHex = (rgb) => {
  const rgbaMatch = rgb.match(/\d+/g);
  if (!rgbaMatch) return '#000000';
  return `#${rgbaMatch
    .slice(0, 3)
    .map((val) => Number(val).toString(16).padStart(2, '0'))
    .join('')}`;
};

const defaultValue = "#FFFFFF";


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
  const [color, setColor] = useState(value || defaultValue);
  const [err, setError] = useState("");
  const [pickerColor, setPickerColor] = useState(defaultValue);

  useEffect(()=>{
    if(value == undefined){
      onChange({ target: { name, value: defaultValue, type: attribute.type } });
    }
  }, []);

  

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
    // Convert RGB or RGBA to hex for the native color input
    if (color.startsWith('#') || color.startsWith("linear-gradient")) {
        setError("");
        setPickerColor(color);
    } else if (color.startsWith('rgb')) {
        setError("");
        const hexColor = rgbToHex(color);
        setPickerColor(hexColor);
    }else{
        setError("Invalid color or gradient");
    }
  }, [color]);

  return (
    <div style={{ width: "100%" }}>
      <label htmlFor={name} style={{fontWeight: 600, display: "flex"}}>
        {label} {required && <pre style={{color: "red"}}>*</pre>}
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
             gradientPattern.test(color) ? <div title="The gradients cannot be selected directly through the color picker but can be entered in the text input" style={{...styles.preview(color), position: "absolute"}} /> 
             :  <input
             type="color"
             value={color.length === 9 ? hexToRgba(color) : pickerColor} // Fallback to solid color for picker
             onChange={handleChange}
             style={{ ...styles.colorPicker, position: "absolute" }}
           />
        }
        
      </div>
      {description && <p>{formatMessage(description)}</p>}
      {err && <p style={{ color: "red" }}>{err}</p>}
    </div>
  );
};

export default Input;

