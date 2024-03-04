import { useState } from "react"
import { TError, TState } from "./types"

const FormWithoutRHF = () => {
  const [state, setState] = useState<TState>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const [errors, setErrors] = useState<TError>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // reset errors from previous submission
    setErrors(prev => ({}))

    if (state.password !== state.confirmPassword) {
      setErrors(prev => {
        return {
          ...prev,
          "confirmPassword": "Passwords must match!"
        }
      })
    }

    // Check if any of the values are empty
    Object.entries(state).map(([key, value]) => {
      if (value === "" && key !== "password") {
        setErrors(prev => {
          return {
            ...prev,
            [key]: `Please fill ${key}`
          }
        })
      }

      if (key === "password" && state[key].length < 6) {
        setErrors(prev => {
          return {
            ...prev,
            "password": "Password must be at least 6 characters!"
          }
        })
      }
    })

    // make a request to a backend
    console.log(errors, state)
  }

  return (
    <form
      className="h-screen w-1/4 flex items-center"
      onSubmit={handleSubmit}
    >
      <div className="min-h-1/3 w-full bg-white px-8 py-6 mb-4 rounded-xl">
        <div className="mb-4 flex justify-between">
          <div className="mb-4 mr-2">
            <label
              className="block mb-2 text-sm font-bold text-gray-600"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className={`w-full px-3 py-2 text-sm text-gray-600 border ${errors.firstName && "border-red-500"
                } rounded appearance-none focus:outline-none focus:shadow-outline`}
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              value={state?.firstName}
            />
            {errors.firstName && (
              <p className="text-xs text-red-600 mt-2">
                {errors.firstName}
              </p>
            )}
          </div>
          <div className="ml-2">
            <label
              className="block mb-2 text-sm font-bold text-gray-600"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className={`w-full px-3 py-2 text-sm text-gray-600 border ${errors.lastName && "border-red-500"
                } rounded appearance-none focus:outline-none focus:shadow-outline`}
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={state?.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="text-xs text-red-600 mt-2">
                {errors.lastName}
              </p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-600"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={`w-full px-3 py-2 text-sm text-gray-600 border ${errors.email && "border-red-500"
              } rounded appearance-none focus:outline-none focus:shadow-outline`}
            name="email"
            type="email"
            placeholder="Email"
            value={state?.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-2">
              {errors.email}
            </p>
          )}
        </div>
        <div className="mb-4 flex justify-between">
          <div className="mb-4 mr-2">
            <label
              className="block mb-2 text-sm font-bold text-gray-600"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`w-full px-3 py-2 text-sm text-gray-600 border ${errors.password && "border-red-500"
                } rounded appearance-none focus:outline-none focus:shadow-outline`}
              name="password"
              type="password"
              value={state?.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-xs text-red-600 mt-2">
                {errors.password}
              </p>
            )}
          </div>
          <div className="ml-2">
            <label
              className="block whitespace-nowrap mb-2 text-sm font-bold text-gray-600"
              htmlFor="c_password"
            >
              Confirm Password
            </label>
            <input
              className={`w-full px-3 py-2 text-sm text-gray-600 border ${errors.confirmPassword && "border-red-500"
                } rounded appearance-none focus:outline-none focus:shadow-outline`}
              name="confirmPassword"
              type="password"
              value={state?.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-xs text-red-600 mt-2">
                {errors.confirmPassword}
              </p>
            )}
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