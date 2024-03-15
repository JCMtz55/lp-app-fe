<script setup>
import { onMounted, reactive } from 'vue'
import { useRecordsStore } from '@/stores/record.store'
import { useAuthStore } from '@/stores/auth.store'
import { useOperationStore } from '@/stores/operations.store'

const records = useRecordsStore()
const auth = useAuthStore()
const operations = useOperationStore()

const state = reactive({
  search: '',
  loading: false
})

const headers = [
  { key: 'operation_id', title: 'Operation', align: 'start' },
  { key: 'amount', title: 'Amount', align: 'end' },
  { key: 'user_balance', title: 'After Balance', align: 'end' },
  { key: 'operation_response', title: 'Response', align: 'end' },
  { key: 'created_at', title: 'Date', align: 'end' },
  { title: 'Actions', key: 'actions', sortable: false, align: 'end' }
]

onMounted(async () => {
  loadItems()
})

const loadItems = async () => {
  state.loading = true
  await records.getRecords(auth.user)
  state.loading = false
}

const deleteRecord = async (record_id) => {
  await records.deleteRecord(auth.user, { record_id: record_id })
  loadItems()
}
</script>

<template>
  <main>
    <v-container>
      <h1>Reports</h1>
      <hr />
      <v-text-field
        v-model="state.search"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
      ></v-text-field>
      <v-data-table
        :headers="headers"
        :items="records.records"
        :loading="state.loading"
        :search="state.search"
        theme="dark"
      >
        <template v-slot:item.operation_id="{ item }">
          {{ operations.operation_list.find((element) => element.id == item.operation_id).name }}
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn class="ma-2" color="red" icon="mdi-delete" @click="deleteRecord(item.id)"></v-btn>
        </template>
      </v-data-table>
    </v-container>
  </main>
</template>

<style scoped>
i {
  color: black;
}
i.v-icon.v-icon {
  color: white;
}
</style>
>
