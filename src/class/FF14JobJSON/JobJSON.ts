type NameProps = {
  jp: string
  en: string
}
type FF14Role = 'Tank' | 'Healer' | 'DPS'
type DPSType = 'Melee' | 'Ranged' | 'Magic'

export class FF14Job {
  id: number
  name: NameProps
  abb: NameProps
  role: FF14Role
  type?: DPSType
  icon?: string
  constructor(
    id: number,
    role: FF14Role,
    name: NameProps,
    abb: NameProps,
    type: DPSType | false = false,
    icon: string | false = false,
  ) {
    this.id = id
    this.role = role
    this.name = name
    this.abb = abb
    if (type) this.type = type
    if (icon) this.icon = icon
  }
}
