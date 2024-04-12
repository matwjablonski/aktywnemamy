import { DetailedHTMLProps, FC, InputHTMLAttributes, SelectHTMLAttributes } from 'react';

type Select = {
  label: string;
  register: any;
  errorMsg?: string;
  options: string[];
} & DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

export const Select: FC<Select> = ({ label, name, placeholder, required, register, errorMsg, options }) => (
  <>
    <label>
      <span>{label}</span>
      <select 
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-main"
        {...register(name)}
  
        placeholder={placeholder}
        required={required}
      >
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </label>
    {errorMsg && <span>{errorMsg}</span>}
  </>
);
