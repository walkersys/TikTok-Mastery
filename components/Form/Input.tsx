'use client'

import { useState } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  validateFn?: (value: string) => string | undefined
}

export default function Input({
  label,
  error,
  validateFn,
  ...props
}: InputProps) {
  const [localError, setLocalError] = useState<string>()

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (validateFn) {
      const validationError = validateFn(e.target.value)
      setLocalError(validationError)
    }
  }

  return (
    <div className="space-y-2">
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        {...props}
        onBlur={handleBlur}
        className={`w-full p-4 border rounded-lg transition-colors ${
          (error || localError) ? 'border-red-500' : 'border-gray-300'
        }`}
        aria-invalid={!!(error || localError)}
        aria-describedby={props.id ? `${props.id}-error` : undefined}
      />
      {(error || localError) && (
        <p 
          id={props.id ? `${props.id}-error` : undefined}
          className="text-sm text-red-500"
        >
          {error || localError}
        </p>
      )}
    </div>
  )
}