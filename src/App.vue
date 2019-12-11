<template>
  <div class="game-container">
    <div class="game-container__click click-zone">
      <clicker></clicker>
    </div>
    <div class="game-container__content">
      <nav>
        <router-link to="/"><a href="">Home</a></router-link>
        <router-link to="/settings"><a href="">Settings</a></router-link>
      </nav>
      <router-view />
    </div>
    <div class="game-container__shop shop">
      <ul class="upgrade-list">
        <li>
          <upgrade
            upgrade-name="Big bullets"
            upgrade-id="bigBullets"
            :prize="10"
            illustration="#"
          ></upgrade>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Clicker from "./components/clicker";
import Upgrade from "./components/upgrade";
export default {
  components: { Upgrade, Clicker },
  computed: {
    money: function() {
      return this.$store.state.money;
    }
  }
};
</script>

<style lang="scss">
.game-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;

  min-width: 100vw;
  min-height: 100vh;
  &__click {
    flex: 1;
  }
  &__content {
    flex: 1;
  }
  &__shop {
    flex: 1;
  }
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
