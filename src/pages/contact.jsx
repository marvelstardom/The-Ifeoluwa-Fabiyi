import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Head from 'next/head'
import { useState } from 'react';
import { Container } from '@/components/Container';

import Link from 'next/link'
import clsx from 'clsx'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

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
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Lets connect!</h1>
            <p className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">Reach out to me by filling the form, I will respond as soon as I can. Alternatively, you can reach out to me at my email address.</p>
            <SocialLink
                href="mailto:oluwajuwonife@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                oluwajuwonife@gmail.com
              </SocialLink>
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
              className="px-10 mt-4 py-2 bg-[#14b8a6] font-bold rounded-md text-md flex flex-row items-center text-zinc-50 dark:text-black"
            >
              Submit
            </button>
          </div>
        </form>
        </div>
      </Container>
        </>
	)
}

