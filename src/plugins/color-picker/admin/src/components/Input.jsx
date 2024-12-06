
import React, { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';

const Input = ({
  name,
  onChange,
  value,
  intlLabel,
  required,
  attribute,
  description,
}) => {
  const { formatMessage } = useIntl();
  const [color, setColor] = useState(value || '#000000');
  const [err, setError] = useState('');

  const isValidColor = (color) => {
    const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/;
    const rgbPattern = /^rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)$/;
    const rgbaPattern = /^rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*(0|0?\.\d+|1)\s*\)$/;
    return hexPattern.test(color) || rgbPattern.test(color) || rgbaPattern.test(color);
  };

  const handleChange = (event) => {
    const newColor = event.target.value;
    setColor(newColor);
    if (isValidColor(newColor)) {
      setError('');
      onChange({ target: { name, value: newColor, type: attribute.type } });
    } else {
      setError('Invalid color');
    }
  };

  useEffect(() => {
    setColor(value || '#000000');
  }, [value]);

  return (
    <div>
      <label htmlFor={name}>{formatMessage(intlLabel || { id: 'color-plugin.input.label', defaultMessage: 'Color' })}</label>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          id={name}
          name={name}
          value={color}
          onChange={handleChange}
          style={{ marginRight: '10px' }}
        />
        <input
          type="color"
          value={color}
          onChange={handleChange}
        />
      </div>
      {description && <p>{formatMessage(description)}</p>}
      {err && <p style={{ color: 'red' }}>{err}</p>}
    </div>
  );
};

export default Input;