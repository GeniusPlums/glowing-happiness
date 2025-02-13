import type React from "react"

interface InputFieldProps {
  label: string
  id: string
  type: string
}

const InputField: React.FC<InputFieldProps> = ({ label, id, type }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      required
    />
  </div>
)

export default InputField

