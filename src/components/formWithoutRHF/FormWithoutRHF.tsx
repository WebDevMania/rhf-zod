import { useState } from "react"
import { TState, TError } from "./types"

const FormWithoutRHF = () => {

  const [state, setState] = useState<TState>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState<TError>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors({})

    if(state.password !== state.confirmPassword) {
      setErrors(prev => ({
        ...prev,
        confirmPassword: 'Passwords do not match'
      }))
    }

    Object.entries(state).forEach(([key, value]) => {
      if(value === '') {
        setErrors(prev => ({
          ...prev,
          [key]: `This field is required: ${key}`
        }))
      }

      if(key === "password" && value.length < 6) {
        setErrors(prev => ({
          ...prev,
          [key]: 'Password must be at least 6 characters'
        }))
      }
    })

    // backend request
  }
  
  return (
    <form
      onSubmit={handleSubmit}
      className="h-screen w-1/4 flex items-center"
    >
      <div className="min-h-1/3 w-full bg-white px-8 py-6 mb-4 rounded-xl">
        <div className="mb-4 flex justify-between">
          <div className="mb-4 mr-2">
            <input
              className="w-full mt-2 px-3 py-2 text-sm text-gray-600 border rounded appearance-none focus:outline-none focus:shadow-outline"
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              value={state.firstName}
            />
            {errors?.firstName && <p className="text-red-500 text-xs italic">{errors.firstName}</p>}
          </div>
          <div className="ml-2">
            <input
              className="w-full mt-2 px-3 py-2 text-sm text-gray-600 border rounded appearance-none focus:outline-none focus:shadow-outline"
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              value={state.lastName}
            />
            {errors?.lastName && <p className="text-red-500 text-xs italic">{errors.lastName}</p>}
          </div>
        </div>
        <div className="mb-4">
          <input
            className="w-full mt-2 px-3 py-2 text-sm text-gray-600 border rounded appearance-none focus:outline-none focus:shadow-outline"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={state.email}
          />
          {errors?.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>
        <div className="mb-4 flex justify-between">
          <div className="mb-4 mr-2">
            <input
              className="w-full mt-2 px-3 py-2 text-sm text-gray-600 border rounded appearance-none focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={state.password}
            />
            {errors?.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
          </div>
          <div className="ml-2">
            <input
              className="w-full mt-2 px-3 py-2 text-sm text-gray-600 border rounded appearance-none focus:outline-none focus:shadow-outline"
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              onChange={handleChange}
              value={state.confirmPassword}
            />
            {errors?.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword}</p>}
          </div>
        </div>
        <div className="mt-10 text-center">
          <button
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register Account
          </button>
        </div>
      </div>
    </form>
  )
}

export default FormWithoutRHF