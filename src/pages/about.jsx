import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/Ife.jpg'

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

export default function About() {
  return (
    <>
      <Head>
        <title>About - The Ifeoluwa Fabiyi</title>
        <meta
          name="description"
          content="All of my long-form thoughts on faith, lifestyle, leadership, fashion, drugs and more, collected in chronological order."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              About Me.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>Ifeoluwa Fabiyi is a Polymath. He is an African of Nigeria origin, a Transformational Speaker of International Repute, an Author, Social Entrepreneur and an advocate of Drug Free Society.</p>

              <p>Ifective as he is fondly called by his friends and proteges is passionately committed to what he tagged: SSDS a (safe, secure & drug free society) where citizens can achieve optimum productivity and maximization of potentials without fear or threat to life.</p>

              <p>He is pursuing these objectives through his speaking engagement in Schools, Conferences, Workshops, Seminars, Mentorship programs, and Social Impact efforts where he awards scholarships to indigent students.</p>
                
              <p>He is an individual that can best be described as having one purpose finding expressions in Multiple Ways. He is an author with several published works.
              He has been a featured guest on popular radio Stations in Nigeria such as Royal FM, Ilorin, Fresh FM Ado-Ekiti etc. 
              He writes on Faith, Relationship, Leadership, and most importantly on Anti-drug Advocacy.</p>
              
              
              <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <h3><b>EDUCATION</b></h3>
              <p>Ifeoluwa Fabiyi started his educational journey in his home town at St Luke Primary School, Obbo-Ile, Ekiti LGA of  Kwara State and completed it at St. Michael African Primary School, Ibadan (1998 -2004) and graduated to Baptist Grammar School, Ibadan (2004-2010). He obtained his Bachelor of Education Degree in Guidance and Counseling with English Language, from the prestigious University of Ilorin, Ilorin, Kwara State, Nigeria. 
              </p>
              </div>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/Ifeoluwa_Fabiyi?t=H9t9D0ogp6EPqArljbZhRw&s=09" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://www.instagram.com/invites/contact/?i=pzjor41230jg&utm_content=44r1i04" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://www.facebook.com/ifeoluwa.fabiyi.90" icon={FacebookIcon} className="mt-4">
                Follow on Facebook
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/ifeoluwa-fabiyi-6107ab185/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:oluwajuwonife@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                oluwajuwonife@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

