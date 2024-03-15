import { defineStore } from 'pinia'
import { get_user_records, delete_user_record } from '@/utils/records.utils'

export const useRecordsStore = defineStore({
  id: 'records',
  state: () => {
    return {
      records: []
    }
  },
  actions: {
    async getRecords(user) {
      let user_records = await get_user_records(user)
      this.records = [...user_records]
    },
    async deleteRecord(user, record_id) {
      let result = await delete_user_record(user, record_id)
      return result
    }
  }
})
