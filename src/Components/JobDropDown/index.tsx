import React from 'react'
import FF14Jobs, { JobDetail } from '@/../.env'
import './App.css'

type CheckLanguage = 'jp' | 'en'

export const JobDropDown = ({ role, lang }: { role?: string; lang?: CheckLanguage }) => {
  const language: CheckLanguage = (lang ??= 'jp')
  if (role === 'Tank') return <TankDropDown lang={language} />
  if (role === 'Healer') return <HealerDropDown lang={language} />
  if (role === 'DPS') return <AllDPSDropDown lang={language} />
  if (role === 'Melee') return <MeleeDropDown lang={language} />
  if (role === 'Ranged') return <RangedDropDown lang={language} />
  if (role === 'Magic') return <MagicDropDown lang={language} />

  return (
    <select className='job-dd'>
      <option value='0'>-----</option>
      {FF14Jobs.ALL.map((job: JobDetail) => (
        <option value={job.value} key={job.value}>
          {job.name[language]}
        </option>
      ))}
    </select>
  )
}

const TankDropDown = ({ lang }: { lang: CheckLanguage }) => {
  return (
    <select className='job-dd'>
      <option value='0'>-----</option>
      {FF14Jobs.Tank.map((job: JobDetail) => (
        <option value={job.value} key={job.value}>
          {job.name[lang]}
        </option>
      ))}
    </select>
  )
}

const HealerDropDown = ({ lang }: { lang: CheckLanguage }) => {
  return (
    <select className='job-dd'>
      <option value='0'>-----</option>
      {FF14Jobs.Healer.map((job: JobDetail) => (
        <option value={job.value} key={job.value}>
          {job.name[lang]}
        </option>
      ))}
    </select>
  )
}

const AllDPSDropDown = ({ lang }: { lang: CheckLanguage }) => {
  return (
    <select className='job-dd'>
      <option value='0'>-----</option>
      {FF14Jobs.DPS.ALL.map((job: JobDetail) => (
        <option value={job.value} key={job.value}>
          {job.name[lang]}
        </option>
      ))}
    </select>
  )
}

const MeleeDropDown = ({ lang }: { lang: CheckLanguage }) => {
  return (
    <select className='job-dd'>
      <option value='0'>-----</option>
      {FF14Jobs.DPS.Melee.map((job: JobDetail) => (
        <option value={job.value} key={job.value}>
          {job.name[lang]}
        </option>
      ))}
    </select>
  )
}

const RangedDropDown = ({ lang }: { lang: CheckLanguage }) => {
  return (
    <select className='job-dd'>
      <option value='0'>-----</option>
      {FF14Jobs.DPS.Ranged.map((job: JobDetail) => (
        <option value={job.value} key={job.value}>
          {job.name[lang]}
        </option>
      ))}
    </select>
  )
}

const MagicDropDown = ({ lang }: { lang: CheckLanguage }) => {
  return (
    <select className='job-dd'>
      <option value='0'>-----</option>
      {FF14Jobs.DPS.Magic.map((job: JobDetail) => (
        <option value={job.value} key={job.value}>
          {job.name[lang]}
        </option>
      ))}
    </select>
  )
}

export default JobDropDown
