import { NextApiRequest, NextApiResponse } from 'next'
import { JobParams, JobSet } from '@/class'

const jobs: JobSet[] = [
  new JobSet('Tank', new JobParams('ナイト', 'ナ'), new JobParams('Paladin', 'PLD')),
  new JobSet('Tank', new JobParams('戦士', '戦'), new JobParams('Warrior', 'WAR')),
  new JobSet('Tank', new JobParams('暗黒騎士', '暗'), new JobParams('DarkKnight', 'DRK')),
  new JobSet('Tank', new JobParams('ガンブレイカー', 'ガ'), new JobParams('GunBreaker', 'GNB')),
  new JobSet('Healer', new JobParams('白魔導士', '白'), new JobParams('WhiteMage', 'WHM')),
  new JobSet('Healer', new JobParams('学者', '学'), new JobParams('Scholar', 'SCH')),
  new JobSet('Healer', new JobParams('占星術師', '占'), new JobParams('Astrologian', 'AST')),
  new JobSet('Healer', new JobParams('賢者', '賢'), new JobParams('Sage', 'SGE')),
  new JobSet('DPS', new JobParams('モンク', 'モ'), new JobParams('Monk', 'MNK')),
  new JobSet('DPS', new JobParams('竜騎士', '竜'), new JobParams('Dragoon', 'DRG')),
  new JobSet('DPS', new JobParams('忍者', '忍'), new JobParams('Ninja', 'NIN')),
  new JobSet('DPS', new JobParams('侍', '侍'), new JobParams('Samurai', 'SAM')),
  new JobSet('DPS', new JobParams('リーパー', 'リ'), new JobParams('Reaper', 'RPR')),
  new JobSet('DPS', new JobParams('吟遊詩人', '詩'), new JobParams('Bard', 'BRD')),
  new JobSet('DPS', new JobParams('機工士', '機'), new JobParams('Machinist', 'MCH')),
  new JobSet('DPS', new JobParams('踊り子', '踊'), new JobParams('Dancer', 'DNC')),
  new JobSet('DPS', new JobParams('黒魔導士', '黒'), new JobParams('BlackMage', 'BLM')),
  new JobSet('DPS', new JobParams('召喚士', '召'), new JobParams('Summoner', 'SMN')),
  new JobSet('DPS', new JobParams('赤魔導士', '赤'), new JobParams('RedMage', 'RDM')),
  new JobSet('DPS', new JobParams('青魔導士', '青'), new JobParams('BlueMage', 'BLU')),
]

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(jobs)
}
