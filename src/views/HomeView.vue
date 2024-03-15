<script setup>
import { useOperationStore } from '@/stores/operations.store'
import { onBeforeMount } from 'vue'
import { useAuthStore } from '@/stores/auth.store'
import { reactive } from 'vue'
import { create_record } from '@/utils/records.utils'
import OperationBox from '@/components/OperationBox.vue'
import Swal from 'sweetalert2'

const operations = useOperationStore()
const auth = useAuthStore()

onBeforeMount(() => {
  operations.getOperations(auth.user)
})

const setOperation = (operation_type) => {
  state.active_operator = operation_type
  reset()
}

const reset = () => {
  state.num1 = 0
  state.num2 = 0
  state.result = ''
}

const createRecord = async () => {
  console.log(state)
  let recordRequest = {
    type: state.active_operator
  }

  recordRequest['num1'] = state.num1
  recordRequest['num2'] = state.num2

  try {
    let res = await create_record(auth.user, recordRequest)
    state.result = res
  } catch (error) {
    Swal.fire({
      title: 'Error!',
      text: `There was an error!: ${error}`,
      icon: 'error',
      confirmButtonText: 'Okay'
    })
    reset()
  }
}

const state = reactive({
  active_operator: '',
  num1: 0,
  num2: 0,
  result: ''
})
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col" v-for="(operator, index) in operations.operation_list" :key="operator.id">
          <OperationBox
            :class="state.active_operator == operator.type ? 'active' : ''"
            v-model="operations.operation_list[index]"
            @click="setOperation(operator.type)"
          ></OperationBox>
        </div>
      </div>
      <div v-if="state.active_operator != ''" class="row mt-5">
        <div v-if="state.active_operator != 'random_string'" class="col">
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">First Number</span>
            <input
              type="number"
              class="form-control"
              v-model="state.num1"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </div>
        <div
          v-if="state.active_operator != 'square_root' && state.active_operator != 'random_string'"
          class="col-5"
        >
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Second Number</span>
            <input
              type="number"
              class="form-control"
              v-model="state.num2"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </div>
        <div class="col">
          <button type="button" class="btn w-100 math-button" @click="createRecord()">Go!</button>
        </div>
      </div>

      <div v-if="state.result != ''" class="row mt-5">
        <div class="col">
          <div class="result-container">Result: {{ state.result.operation_response }}</div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.math-button {
  background-color: #00703c !important;
  color: white;
}
.math-button:hover,
.math-button:focus {
  background-color: #3eb87f !important;
  -webkit-transition: background-color 500ms linear;
  -ms-transition: background-color 250ms linear;
  transition: background-color 250ms linear;
}

.result-container {
  background-color: #00703c;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  display: grid;
  font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 30px;
  font-weight: 500;
  height: 100px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  align-content: center;
  justify-content: center;
}
</style>
