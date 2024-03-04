import { ValidationSchema, validationSchema } from "./schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormWithRHF = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema)
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    console.log(data)
  };

  return (
    <form
      className="h-screen w-1/4 flex items-center"
      onSubmit={handleSubmit(onSubmit)}
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
              id="firstName"
              type="text"
              placeholder="First Name"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="text-xs text-red-600 mt-2">
                {errors.firstName?.message}
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
              id="lastName"
              type="text"
              placeholder="Last Name"
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="text-xs text-red-600 mt-2">
                {errors.lastName?.message}
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
            id="email"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-2">
              {errors.email?.message}
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
              id="password"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-xs text-red-600 mt-2">
                {errors.password?.message}
              </p>
            )}
          </div>
          <div className="ml-2">
            <label
              className="block mb-2 text-sm font-bold text-gray-600"
              htmlFor="c_password"
            >
              Confirm Password
            </label>
            <input
              className={`w-full px-3 py-2 text-sm text-gray-600 border ${errors.confirmPassword && "border-red-500"
                } rounded appearance-none focus:outline-none focus:shadow-outline`}
              id="c_password"
              type="password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-xs text-red-600 mt-2">
                {errors.confirmPassword?.message}
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
  );
};

export default FormWithRHF;