import type { ApolloError } from '@apollo/client'
import type { ComputedRef, Ref } from 'vue'
import type { IResultInfo } from '@/types/IResultInfo'

export interface IResults<T> {
  info: ComputedRef<IResultInfo>
  items: ComputedRef<Array<T>>
  loading: Ref<Boolean>
  error: Ref<ApolloError | null>
}
