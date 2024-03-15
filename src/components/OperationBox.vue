<script setup>
const model = defineModel()

const iconDictionary = {
  addition: 'plus',
  subtraction: 'minus',
  multiplication: 'xmark',
  division: 'divide',
  square_root: 'square-root-variable',
  random_string: 'font'
}
</script>

<template>
  <div class="container">
    <font-awesome-icon :icon="['fas', iconDictionary[model.type] ?? 'calculator']" size="3x" />
    {{ model.name }} <br />
    ${{ model.cost }}
  </div>
</template>

<style scoped>
.container {
  background-color: #ea4c89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: grid;
  font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
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

.container:hover,
.container:focus,
.container.active {
  background-color: #00703c;
  -webkit-transition: background-color 500ms linear;
  -ms-transition: background-color 250ms linear;
  transition: background-color 250ms linear;
}

.container svg {
  text-align: center;
  margin: auto;
}
</style>
