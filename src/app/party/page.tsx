import { JobDropDown } from '@/Components'
import React from 'react'
import './party.css'

// パーティのデータを保存する仕組みを作成したい。
// パーティ構成は固定。MT,ST,H1,H2,D1,D2,D3,D4
//

export default async function PartyPage() {
  const partyList = [
    { name: 'MT', role: 'Tank' },
    { name: 'ST', role: 'Tank' },
    { name: 'H1', role: 'Healer' },
    { name: 'H2', role: 'Healer' },
    { name: 'D1', role: 'DPS' },
    { name: 'D2', role: 'DPS' },
    { name: 'D3', role: 'DPS' },
    { name: 'D4', role: 'DPS' },
  ]

  const saveData = () => {
    const partyData = []
    // 値を取って来たい。

    partyList.forEach(member => {
      partyData.push({})
    })
  }
  return (
    <>
      <h1>パーティを設定しよう。</h1>
      {partyList.map(jobset => {
        return (
          <div key={jobset.name + jobset.role}>
            <span className={'party-set'} id={jobset.name + ' role'}>
              {jobset.name + ' : '}
            </span>
            <JobDropDown role={jobset.role} />
            <span className={'character'}>名前 : </span>
            <input className='' type='text' id={jobset.name + ' name'} />
          </div>
        )
      })}
    </>
  )
}
