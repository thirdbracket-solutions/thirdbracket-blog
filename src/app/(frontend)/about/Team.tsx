// src/app/(frontend)/about/Team.tsx
'use client'

import { Bracket } from '@thirdbracket/bracketui'
import Image from 'next/image'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const team = [
  {
    name: 'John Smith',
    role: 'Founder & Lead Developer',
    bio: 'Full-stack developer with 10+ years of experience in web technologies.',
    image: '/ui.svg',
    social: {
      linkedin: 'https://linkedin.com/',
      github: 'https://github.com/',
      twitter: 'https://twitter.com/',
    },
  },
  {
    name: 'Sarah Johnson',
    role: 'UI/UX Designer',
    bio: 'Creative designer focused on creating intuitive and engaging user experiences.',
    image: '/ui.svg',
    social: {
      linkedin: 'https://linkedin.com/',
      github: 'https://github.com/',
    },
  },
  {
    name: 'Michael Brown',
    role: 'Backend Developer',
    bio: 'Specialized in building robust and scalable backend systems.',
    image: '/ui.svg',
    social: {
      linkedin: 'https://linkedin.com/',
      github: 'https://github.com/',
    },
  },
  {
    name: 'Emily Davis',
    role: 'Digital Marketing Specialist',
    bio: 'Expert in SEO and content strategy with a focus on growth.',
    image: '/ui.svg',
    social: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/',
    },
  },
]

export default function Team() {
  return (
    <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
      <Bracket fluid centered padding="medium">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4">
            Our Team
          </h2>
          <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
            Meet the talented individuals behind Third Bracket&apos;s success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="border border-primary-200 dark:border-primary-800 rounded-lg overflow-hidden bg-white dark:bg-black"
            >
              <div className="aspect-square relative">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary-500 dark:text-primary-400 mb-3">{member.role}</p>
                <p className="text-primary-600 dark:text-primary-400 text-sm mb-4">{member.bio}</p>
                <div className="flex gap-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 hover:text-accent-500 dark:hover:text-accent-400"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 hover:text-accent-500 dark:hover:text-accent-400"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 hover:text-accent-500 dark:hover:text-accent-400"
                    >
                      <FaTwitter size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Bracket>
    </section>
  )
}
