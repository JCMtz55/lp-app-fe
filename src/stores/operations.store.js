import { defineStore } from 'pinia'
import { get_operations } from '@/utils/operations.utils'

export const useOperationStore = defineStore({
  id: 'operation',
  state: () => {
    return {
      operation_list: localStorage.getItem('operations')
        ? JSON.parse(localStorage.getItem('operations'))
        : []
    }
  },
  actions: {
    async getOperations(user) {
      let operation_list = localStorage.getItem('operations')
        ? JSON.parse(localStorage.getItem('operations'))
        : await get_operations(user)
      this.operation_list = [...operation_list]
      localStorage.setItem('operations', JSON.stringify(operation_list))
    }
  }
})
