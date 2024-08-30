/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, Theme } from '@emotion/react';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import { darkTheme, lightTheme } from '@/theme';

const formFieldStyle = (theme: Theme) => css`
  margin-bottom: 16px;

  label {
    display: block;
    margin-bottom: 4px;
    font-weight: bold;
    color: ${theme.colors.text};
  }

  input,
  select,
  textarea {
    width: 90%;
    padding: 12px;
    font-size: 16px;
    border-radius: ${theme.radii.small};
    border: 1px solid #4ffaff;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};

    @media (max-width: 600px) {
      font-size: 14px;
      padding: 10px;
    }
  }

  textarea {
    resize: vertical;
  }
`;

interface FormFieldProps {
  label: string;
  name: string;
  value: string | number;
  type?: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
  options?: string[]; // for select input
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  value,
  type = 'text',
  onChange,
  options,
}) => {
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <div css={formFieldStyle(theme)}>
      <label htmlFor={name}>{label}</label>
      {type === 'select' && options ? (
        <select name={name} value={value} onChange={onChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea name={name} value={value} onChange={onChange} />
      ) : (
        <input type={type} name={name} value={value} onChange={onChange} />
      )}
    </div>
  );
};

export default FormField;
