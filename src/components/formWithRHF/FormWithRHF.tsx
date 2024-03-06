import { useForm, SubmitHandler } from "react-hook-form";
import { validationSchema, TValidationSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ageOptionsType, ageOptions } from "./constants";

const FormWithRHF = () => {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<TValidationSchema>({
        resolver: zodResolver(validationSchema)
    })

    const onSubmit: SubmitHandler<TValidationSchema> = (data: TValidationSchema) => {
        console.log(data)
    }

    console.log(ageOptions)

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="h-screen w-1/4 flex items-center"
        >
            <div className="min-h-1/3 w-full bg-white px-8 py-6 mb-4 rounded-xl">
                <div className="mb-4 flex justify-between">
                    <div className="mb-4 mr-2">
                        <input
                            className="w-full mt-2 px-3 py-2 text-sm text-gray-600 border rounded appearance-none focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="First Name"
                            {...register("firstName")}
                        />
                        {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName.message}</p>}
                    </div>
                    <div className="ml-2">
                        <input
                            className="w-full mt-2 px-3 py-2 text-sm text-gray-600 border rounded appearance-none focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Last Name"
                            {...register("lastName")}
                        />
                        {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName.message}</p>}
                    </div>
                </div>
                <div className="mb-4 flex flex-wrap gap-10 items-center">
                    {ageOptions.map((ageOption: ageOptionsType, index: number) => {
                        return (
                            <div key={index} className="flex items-center">
                                <input
                                    className="mr-2"
                                    type="radio"
                                    value={ageOption.value}
                                    {...register("age")}
                                />
                                <label className="text-slate-500">{ageOption.label}</label>
                            </div>
                        )
                    }
                    )}
                </div>
                <div className="mb-4">
                    <input
                        className="w-full mt-2 px-3 py-2 text-sm text-gray-600 border rounded appearance-none focus:outline-none focus:shadow-outline"
                        type="email"
                        placeholder="Email"
                        {...register("email")}
                    />
                    {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                </div>
                <div className="mb-4 flex justify-between">
                    <div className="mb-4 mr-2">
                        <input
                            className="w-full mt-2 px-3 py-2 text-sm text-gray-600 border rounded appearance-none focus:outline-none focus:shadow-outline"
                            type="password"
                            placeholder="Password"
                            {...register("password")}
                        />
                        {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                    </div>
                    <div className="ml-2">
                        <input
                            className="w-full mt-2 px-3 py-2 text-sm text-gray-600 border rounded appearance-none focus:outline-none focus:shadow-outline"
                            type="password"
                            placeholder="Confirm password"
                            {...register("confirmPassword")}
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword.message}</p>}
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

export default FormWithRHF;