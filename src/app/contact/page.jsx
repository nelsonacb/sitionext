"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const NewPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    router.push("/");
  };

  return (
    <>
      <h3 className="text-3xl font-bold my-8 text-sky-500 text-center container mx-auto">
        Contact Us
      </h3>
      <div className="h-screen flex justify-center items-center -mt-28 p-10">
        <form
          className="bg-slate-800 p-10 lg:w-1/4 md:w-1/2 rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="email" className="font-bold text-sm text-white">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="border border-gray-400 p-2 mb-4 w-full text-black"
            placeholder="Email"
            {...register("email", {
              required: "The email is required",
              maxLength: 40,
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Write a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-400 font-bold">{errors.email.message}</p>
          )}
          <label htmlFor="password" className="font-bold text-sm text-white">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="border border-gray-400 p-2 mb-4 w-full text-black"
            placeholder="Password"
            {...register("password", {
              required: "The password is required",
              maxLength: 20,
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/,
                message: "Write a valid password",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-400 font-bold">{errors.password.message}</p>
          )}

          <div className="flex justify-between">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
              type="submit"
            >
              Send
            </button>

            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={() => {
                Swal.fire({
                  title: "Are you sure?",
                  text: "Come back!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes!",
                  cancelButtonText: "No!",
                }).then(async (result) => {
                  if (result.isConfirmed) {
                    router.push("/");
                    Swal.fire("¡Home!", "Welcome to the Home.", "success");
                  }
                });
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default NewPage;
