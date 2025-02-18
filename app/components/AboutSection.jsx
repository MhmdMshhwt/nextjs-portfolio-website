'use client';

import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TabData = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>Html</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Nextjs</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: 'certifications',
    content: (
      <ul className='list-disc pl-2'>
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
  ]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    })
  }

  return (
    <section className='text-white'>
          <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
              <Image
                  src={'/images/about-image.png'}
                  alt='about image'
                  width={500}
                  height={500}
              />
              <div className='mt-6 md:mt-0 text-left flex flex-col h-full'>
                  <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                  <p className='text-base lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sint dolores, nostrum recusandae adipisci similique illo provident deserunt expedita ducimus perferendis minima, omnis dolore laudantium veniam iste quod corporis placeat quos beatae. Atque error beatae, exercitationem cupiditate voluptatibus dolores facere mollitia aspernatur, recusandae inventore tenetur soluta rem. Accusamus, officia ad!</p>
                  <div className='flex flex-row mt-8'>
            <TabButton
              selectTab={() => handleTabChange("skills")} 
              active={tab === "skills"}
            >
              {""}
              skills{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")} 
              active={tab === "education"}
            >
              {""}
              Education{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")} 
              active={tab === "certifications"}
            >
              {""}
              Certifications{""}
            </TabButton>
          </div>
          <div className='mt-8'>{ TabData.find((t)=> t.id === tab).content}</div>
              </div>              
      </div>
    </section>
  )
}

export default AboutSection
