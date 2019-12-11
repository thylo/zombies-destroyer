<template>
  <div class="game">
    this is the default area
  </div>
</template>

<script>
export default {
  name: "game"
};
</script>

<style scoped>
.game-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;

  min-width: 100vw;
  min-height: 100vh;
}
.click-zone {
  width: 50vw;
  background-color: fuchsia;
}

.shop {
  width: 50vw;
  background-color: aqua;
}
</style>
