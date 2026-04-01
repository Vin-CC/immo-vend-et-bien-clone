'use client';

import { useState } from 'react';
import type { AddressSuggestion } from '@/hooks/useAddressAutocomplete';

const COUNTRIES = [
  { code: 'FR', flag: '🇫🇷', dial: '+33' },
  { code: 'BE', flag: '🇧🇪', dial: '+32' },
  { code: 'CH', flag: '🇨🇭', dial: '+41' },
  { code: 'LU', flag: '🇱🇺', dial: '+352' },
  { code: 'DE', flag: '🇩🇪', dial: '+49' },
  { code: 'ES', flag: '🇪🇸', dial: '+34' },
  { code: 'IT', flag: '🇮🇹', dial: '+39' },
  { code: 'GB', flag: '🇬🇧', dial: '+44' },
  { code: 'PT', flag: '🇵🇹', dial: '+351' },
] as const;

const inputBase =
  'w-full font-[effra,Roboto,sans-serif] text-[16px] border border-gray-300 rounded-md py-3 px-4 text-[#525252] placeholder:text-[#8c8c8c] outline-none focus:border-(--color-orange) focus:ring-1 focus:ring-(--color-orange) transition-colors bg-white';

const chevronSvg =
  "bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23525252%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_16px_center]";

const labelBase =
  'font-[effra,Roboto,sans-serif] text-[16px] font-semibold text-(--color-dark) mb-2 block';

interface FormInputProps {
  id?: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

export function FormInput({
  id,
  name,
  label,
  type = 'text',
  required,
  value,
  onChange,
  placeholder,
  className = '',
}: FormInputProps) {
  const fieldId = id || name;
  return (
    <div className={className}>
      <label htmlFor={fieldId} className={labelBase}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={fieldId}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputBase}
      />
    </div>
  );
}

interface FormSelectProps {
  id?: string;
  name: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: readonly string[];
  placeholderOption?: string;
  className?: string;
}

export function FormSelect({
  id,
  name,
  label,
  required,
  value,
  onChange,
  options,
  placeholderOption = 'Sélectionnez...',
  className = '',
}: FormSelectProps) {
  const fieldId = id || name;
  return (
    <div className={className}>
      <label htmlFor={fieldId} className={labelBase}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={fieldId}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`${inputBase} appearance-none ${chevronSvg}`}
      >
        <option value="">{placeholderOption}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

interface FormPhoneInputProps {
  id?: string;
  name: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export function FormPhoneInput({
  id,
  name,
  label,
  required,
  value,
  onChange,
  className = '',
}: FormPhoneInputProps) {
  const fieldId = id || name;
  const [countryIdx, setCountryIdx] = useState(0);
  const [open, setOpen] = useState(false);
  const country = COUNTRIES[countryIdx];

  return (
    <div className={className}>
      <label htmlFor={fieldId} className={labelBase}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className={`${inputBase} relative flex items-center gap-2 !px-3 !focus:border-none !focus:ring-0 focus-within:border-(--color-orange) focus-within:ring-1 focus-within:ring-(--color-orange)`}>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-1 shrink-0 text-[16px] cursor-pointer bg-transparent border-none p-0"
        >
          <span className="text-[20px] leading-none">{country.flag}</span>
          <svg viewBox="0 0 12 12" width="10" height="10" className={`text-[#525252] transition-transform ${open ? 'rotate-180' : ''}`}>
            <path fill="currentColor" d="M6 8L1 3h10z" />
          </svg>
        </button>

        {open && (
          <ul className="absolute left-0 top-full mt-1 z-50 bg-white border border-gray-300 rounded-md shadow-lg py-1 w-30 max-h-60 overflow-y-auto list-none m-0 p-0">
            {COUNTRIES.map((c, i) => (
              <li key={c.code}>
                <button
                  type="button"
                  onClick={() => { setCountryIdx(i); setOpen(false); }}
                  className={`w-full text-left px-3 py-2 flex items-center gap-2 cursor-pointer border-none font-[effra,Roboto,sans-serif] text-[15px] transition-colors ${i === countryIdx ? 'bg-gray-100 text-(--color-dark)' : 'bg-transparent text-[#525252] hover:bg-gray-50'
                    }`}
                >
                  <span className="text-[18px] leading-none">{c.flag}</span>
                  <span className='text-gray-700'>{c.code}</span>
                  <span className="text-gray-400 ml-auto">{c.dial}</span>
                </button>
              </li>
            ))}
          </ul>
        )}

        <input
          id={fieldId}
          name={name}
          type="tel"
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setOpen(false)}
          placeholder={`${country.dial} ...`}
          className="flex-1 border-none outline-none bg-transparent font-[effra,Roboto,sans-serif] text-[16px] text-[#525252] placeholder:text-[#8c8c8c] p-0"
        />
      </div>
    </div>
  );
}

interface FormAddressInputProps {
  id?: string;
  name: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  suggestions: AddressSuggestion[];
  showSuggestions: boolean;
  onSelectSuggestion: (suggestion: AddressSuggestion) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  placeholder?: string;
  className?: string;
}

export function FormAddressInput({
  id,
  name,
  label,
  required,
  value,
  onChange,
  suggestions,
  showSuggestions,
  onSelectSuggestion,
  onBlur,
  onFocus,
  placeholder,
  className = '',
}: FormAddressInputProps) {
  const fieldId = id || name;
  return (
    <div className={`relative ${className}`}>
      <label htmlFor={fieldId} className={labelBase}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={fieldId}
        name={name}
        type="text"
        required={required}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        autoComplete="off"
        className={inputBase}
      />
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              type="button"
              className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0 cursor-pointer"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => onSelectSuggestion(suggestion)}
            >
              <p className="font-medium text-gray-900 font-[effra,Roboto,sans-serif] text-[14px]">{suggestion.label}</p>
              <p className="text-xs text-gray-500 font-[effra,Roboto,sans-serif]">{suggestion.context}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
