import { ApiPromise } from '@polkadot/api'
import { Extrinsic } from './types'

export const asSystemRemark = (api: ApiPromise, remark: string): Extrinsic => {
  return api.tx.system.remark(remark)
}
