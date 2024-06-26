"use client";
import { providerMap } from "@/auth";
import imageFile from "@/app/assets/login_pattern.svg";
import { useFormState } from "react-dom";
import { Authenticate } from "@/app/actions/users/Authenticate";
import Link from "next/link";
import Image from "next/image";
import { validate } from "@/app/lib/utills/validator";

export default function SignInPage() {
  const initialState = { message: null, errors: {} };
  const initialState2 = { message: null, errors: {} };
  const [state, dispatch] = useFormState(Authenticate, initialState);
  const [states, dispatch2] = useFormState(validate, initialState2);

  return (
    <div className="flex overflow-hidden relative w-screen h-screen">
      {/* <Image
        src={imageFile}
        width={60}
        height={60}
        alt="Pattern Background"
        className="object-cover fixed top-0 left-0 w-screen h-screen bg-white -z-10"
      /> */}
      {/* <div
        aria-label="Slate cover background"
        className="absolute left-0 top-0 z-10 flex h-[275%] w-[150%] translate-x-[-70%] translate-y-[-28%] rotate-[22deg] items-center bg-[#6A0DAD] md:translate-y-[-15%] md:rotate-[11deg]"
      ></div> */}
      <div className="h-dvh z-20 flex w-full items-center justify-center md:ml-[15%] md:w-[22rem]">
        <div className="flex flex-col justify-center items-center w-80 text-xl">
          <h2 className="flex items-center mb-4 space-x-2 text-3xl font-light text-zinc-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="p-2 text-white rounded-full size-12 bg-[#6A0DAD]"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="text-4xl font-medium text-black">Mymart</span>
          </h2>
          <div className="flex flex-col gap-2 p-6 m-8 w-full bg-white rounded shadow-lg relative">
            {Object.values(providerMap).map(({ id, name }) => (
              <form
                className="[&>div]:last-of-type:hidden"
                key={id}
                action={dispatch}
              >
                {id === "credentials" && (
                  <>
                    <span
                      id="customer-error"
                      aria-live="polite"
                      className=" mx-auto"
                      aria-atomic="true"
                    >
                      {state?.message && (
                        <p className="text-sm text-red-500">{state?.message}</p>
                      )}
                    </span>
                    <label className="text-base font-light text-neutral-800 ">
                      Email
                      <input
                        className="block flex-1 p-3 w-full font-normal rounded-md border border-gray-200 transition sm:text-sm placeholder:font-light placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-zinc-500"
                        required
                        data-1p-ignore
                        placeholder="Email"
                        name="email"
                        type="email"
                        onBlur={dispatch2}
                      />
                      <span
                        id="customer-error"
                        aria-live="polite"
                        className=" mx-auto text-left"
                        aria-atomic="true"
                      >
                        {state?.errors.name === "email" ? (
                          <p className="text-sm text-red-500">
                            {state?.errors.error}
                          </p>
                        ) : states?.errors.name === "email" ? (
                          <p className="text-sm text-red-500">
                            {states?.errors.error}
                          </p>
                        ) : (
                          ""
                        )}
                      </span>
                    </label>
                    <label className="text-base font-light text-neutral-800">
                      Password
                      <input
                        className="block flex-1 p-3 w-full font-normal rounded-md border border-gray-200 transition sm:text-sm placeholder:font-light placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-zinc-500"
                        required
                        data-1p-ignore
                        placeholder="password"
                        name="password"
                        type="password"
                        onBlur={dispatch2}
                      />
                      <span
                        id="customer-error"
                        aria-live="polite"
                        className=" mx-auto text-left"
                        aria-atomic="true"
                      >
                        {state?.errors.name === "password" ? (
                          <p className="text-sm text-red-500">
                            {state?.errors?.error}
                          </p>
                        ) : states?.errors?.name === "password" ? (
                          <p className="text-sm text-red-500">
                            {states?.errors?.error}
                          </p>
                        ) : (
                          ""
                        )}
                      </span>
                    </label>
                  </>
                )}
                <button
                  type="submit"
                  className="flex justify-center items-center px-4 mt-4 space-x-2 w-full h-12 text-base font-light text-white rounded transition focus:ring-2 focus:ring-offset-2 focus:outline-none bg-[#6A0DAD] hover:bg-zinc-900 focus:ring-zinc-800 disabled:opacity-75"
                  value={id}
                  name={name}
                  disabled={
                    (name === "Credentials" &&
                      states?.errors?.error !== undefined) ||
                    state?.errors?.error !== undefined
                  }
                >
                  <span>Sign in with {name}</span>
                </button>
                <div className="flex gap-2 items-center my-4">
                  <div className="flex-1 bg-[#6A0DAD] h-[1px]" />
                  <span className="text-xs leading-4 uppercase text-neutral-500">
                    or
                  </span>
                  <div className="flex-1 bg-[#6A0DAD] h-[1px]" />
                </div>
              </form>
            ))}
            <p className="px-8 text-center text-sm text-gray-700">
              <Link
                href="/register"
                className="hover:text-brand underline underline-offset-4"
              >
                Don&apos;t have an account? Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
