import { JobParams } from './JobParams'
export class JobSet {
  role: string
  jp: JobParams
  en: JobParams
  constructor(role: string, jp: JobParams, en: JobParams) {
    this.role = role
    this.jp = jp
    this.en = en
  }
}
