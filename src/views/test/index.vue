<template>
  <div class="father" @click="father">
    <div class="son" on:click.self.prevent="son">123</div>
  </div>
</template>

<script>
export default {
  name: 'test',
  methods: {
    son () {
      console.log('son')
    },
    father () {
      console.log('father')
    }
  }
}
</script>

<style>
.father {
  width: 200px;
  height: 200px;
  background-color: pink;
}
.son {
  width: 100px;
  height: 100px;
  background-color: green;
}
</style>
