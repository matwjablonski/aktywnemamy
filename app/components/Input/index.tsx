import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

type Input = {
  label: string;
  register: any;
  errorMsg?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input: FC<Input> = ({ label, type, name, placeholder, required, register, errorMsg }) => (
  <>
    <label>
      <span>{label}</span>
      <input 
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-main"
        {...register(name)}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </label>
    {errorMsg && <span>{errorMsg}</span>}
  </>
);
