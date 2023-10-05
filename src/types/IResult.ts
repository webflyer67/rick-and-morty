import type { ApolloError } from '@apollo/client'
import type { ComputedRef, Ref } from 'vue'
import type { IResultInfo } from '@/types/IResultInfo'

export interface IResult<T> {
  info: ComputedRef<IResultInfo>
  results: ComputedRef<Array<T>>
  loading: Ref<Boolean>
  error: Ref<ApolloError | null>
}
