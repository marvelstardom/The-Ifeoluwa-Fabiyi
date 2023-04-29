import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Head from 'next/head'
import { useState } from 'react';
import { Container } from '@/components/Container';
// import Link from 'next/link'
// import clsx from 'clsx'

export default function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kk6lwhe', 'template_1r3ewsb', form.current, 'pHgNWn0Ra-fUghkVV')
    .then((result) => {
    console.log(result.text);
    }, (error) => {
    console.log(error.text);
    });
    };

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

    return (
		<>
        <Head>
        <title>Contact - The Ifeoluwa Fabiyi</title>
        <meta
          name="description"
          content="All of my long-form thoughts on faith, lifestyle, leadership, fashion, drugs and more, collected in chronological order."
        />
      </Head>
      <Container className="mt-20 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Lets talk about your projects!</h1>
            <p className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">Reach out to me by filling the form, I will respond as soon as I can. Alternatively, you can reach out to me at my email address.</p>
        </div>
        <form
          onSubmit={sendEmail}
          className="lg:pl-20 grid"
        >
          <h1 className="font-base tracking-tight text-zinc-600 dark:text-zinc-50 sm:text-2xl mb-4">
            Send a message
          </h1>

          <input
            type="text"
            placeholder='Full Name*'
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname"
            className="form-input min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white mb-4 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
          />

          <input
            type="email"
            name="email"
            placeholder='Email Address*'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-input min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white mb-4 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
          />
{/* 
          <input
            type="text"
            name="subject"
            placeholder='Subject*'
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            className="form-input min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white mb-4 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
          />
          */}
          
          <textarea
            name="message"
            placeholder='Message*'
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="form-textarea min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
          ></textarea>
          
          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="px-10 mt-4 py-2 bg-[#14b8a6] font-bold rounded-md text-lg flex flex-row items-center text-zinc-50 dark:text-black"
            >
              Submit
              {/* <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-cyan-500 ml-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                  fill="currentColor"
                />
              </svg> */}
            </button>
          </div>
        </form>
        </div>
      </Container>
        </>
	)
}

