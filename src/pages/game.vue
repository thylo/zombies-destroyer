<template>
    <div class="game-container">
        <div class="click-zone">
            <clicker></clicker>
        </div>
        <div class="shop">
            <ul class="upgrade-list">
                <li><upgrade
                        upgrade-name="Big bullets"
                        upgrade-id="bigBullets"
                        :prize="10"
                        illustration="#"
                ></upgrade></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Clicker from "../components/clicker";
    import Upgrade from "../components/upgrade";
    export default {
        name: "game",
        components: {Upgrade, Clicker},

        computed:{
            money: function () {
                return this.$store.state.money;
            }
        }
    }
</script>

<style scoped>
    .game-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;

        min-width: 100vw;
        min-height: 100vh;
    }
    .click-zone{
        width: 50vw;
        background-color: fuchsia;
    }

    .shop{
        width: 50vw;
        background-color: aqua;
    }
</style>