// ContactForm.jsx
"use client";

import { useState } from "react";
import { Field, Label, Switch } from "@headlessui/react";

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="isolate bg-white dark:bg-slate-900 px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[72.8125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-300 to-indigo-300 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[100rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Contact Us
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          We’d love to hear from you! Fill the form and we’ll get back to you.
        </p>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold text-gray-900 dark:text-white"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="w-full rounded-md bg-white dark:bg-slate-800 px-3.5 py-2 text-base text-gray-900 dark:text-white outline outline-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="w-full rounded-md bg-white dark:bg-slate-800 px-3.5 py-2 text-base text-gray-900 dark:text-white outline outline-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900 dark:text-white"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="w-full rounded-md bg-white dark:bg-slate-800 px-3.5 py-2 text-base text-gray-900 dark:text-white outline outline-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-900 dark:text-white"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-md bg-white dark:bg-slate-800 px-3.5 py-2 text-base text-gray-900 dark:text-white outline outline-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={`group flex w-8 cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out ${
                  agreed ? "bg-indigo-600" : "bg-gray-200 dark:bg-gray-600"
                }`}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={`h-4 w-4 transform rounded-full bg-white shadow ring-1 ring-gray-900/5 transition duration-200 ease-in-out ${
                    agreed ? "translate-x-3.5" : ""
                  }`}
                />
              </Switch>
            </div>
            <Label className="text-sm text-gray-600 dark:text-gray-300">
              By selecting this, you agree to our{" "}
              <a href="/privacy-policy" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow hover:bg-indigo-500 
  hover:scale-95 active:scale-90 transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
