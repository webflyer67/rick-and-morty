import type { ApolloError } from '@apollo/client'
import type { ComputedRef, Ref } from 'vue'

export interface IResult<T> {
  item: ComputedRef<T | null>
  loading: Ref<Boolean>
  error: Ref<ApolloError | null>
}
