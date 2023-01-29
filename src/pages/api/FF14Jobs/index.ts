import { NextApiRequest, NextApiResponse } from 'next'
import { FF14Job } from '@/class/FF14JobJSON'

const T = 'Tank'
const H = 'Healer'
const D = 'DPS'
const Melee = 'Melee'
const Ranged = 'Ranged'
const Magic = 'Magic'

const Jobs: FF14Job[] = [
  new FF14Job(1, T, { jp: 'ナイト', en: 'Paladin' }, { jp: 'ナ', en: 'PLD' }),
  new FF14Job(2, T, { jp: '戦士', en: 'Warrior' }, { jp: '戦', en: 'WAR' }),
  new FF14Job(3, T, { jp: '暗黒騎士', en: 'Dark Knight' }, { jp: '暗', en: 'DRK' }),
  new FF14Job(4, T, { jp: 'ガンブレイカー', en: 'Gun Breaker' }, { jp: 'ガ', en: 'GNB' }),
  new FF14Job(5, H, { jp: '白魔導士', en: 'White Mage' }, { jp: '白', en: 'WHM' }),
  new FF14Job(6, H, { jp: '学者', en: 'Scholar' }, { jp: '学', en: 'SCH' }),
  new FF14Job(7, H, { jp: '占星術師', en: 'Astrologian' }, { jp: '占', en: 'AST' }),
  new FF14Job(8, H, { jp: '賢者', en: 'Sage' }, { jp: '賢', en: 'SGE' }),
  new FF14Job(9, D, { jp: 'モンク', en: 'Monk' }, { jp: 'モ', en: 'MNK' }, Melee),
  new FF14Job(10, D, { jp: '竜騎士', en: 'Dragoon' }, { jp: '竜', en: 'DRG' }, Melee),
  new FF14Job(11, D, { jp: '忍者', en: 'Ninja' }, { jp: '忍', en: 'NIN' }, Melee),
  new FF14Job(12, D, { jp: '侍', en: 'Samurai' }, { jp: '侍', en: 'SAM' }, Melee),
  new FF14Job(13, D, { jp: 'リーパー', en: 'Reaper' }, { jp: 'リ', en: 'RPR' }, Melee),
  new FF14Job(14, D, { jp: '吟遊詩人', en: 'Bard' }, { jp: '詩', en: 'BRD' }, Ranged),
  new FF14Job(15, D, { jp: '機工士', en: 'Machininst' }, { jp: '機', en: 'MCH' }, Ranged),
  new FF14Job(16, D, { jp: '踊り子', en: 'Dancer' }, { jp: '踊', en: 'DNC' }, Ranged),
  new FF14Job(17, D, { jp: '黒魔導士', en: 'Black Mage' }, { jp: '黒', en: 'BLM' }, Magic),
  new FF14Job(18, D, { jp: '召喚士', en: 'Summoner' }, { jp: '召', en: 'SMN' }, Magic),
  new FF14Job(19, D, { jp: '赤魔導士', en: 'Red Mage' }, { jp: '赤', en: 'RDM' }, Magic),
  new FF14Job(20, D, { jp: '青魔導士', en: 'Blue Mage' }, { jp: '青', en: 'BLU' }, Magic),
]

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(Jobs)
}
