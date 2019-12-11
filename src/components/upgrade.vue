<template>
    <div class="">
        <a class="upgrade" v-bind:class="{ 'upgrade--disabled': !canUpgrade, 'upgrade--enabled': canUpgrade }"
           @click.prevent="buyUpgrade">
            <img class="upgrade__illu" :src="illustration" alt="upgrade-illu">
            <h2>{{upgradeName}}</h2>
            <p>{{prize}}</p>
            <p>{{upgradeNumber}}</p>
        </a>
    </div>
</template>

<script>
    export default {
        name: "upgrade",

        props:{
            prize:{type: Number},
            upgradeName:{type: String},
            upgradeId:{type: String},
            illustration:{type: String}
        },

        methods:{
            buyUpgrade: function () {
                if (this.canUpgrade){
                    this.$store.commit("buyUpgrade", {value: this.prize, name: this.upgradeId});
                }
            }
        },

        computed:{
            canUpgrade:function(){
                return this.$store.state.money >= this.prize;
            },

            upgradeNumber: function(){
                return this.$store.state.upgrades[this.upgradeId];
            }
        }
    }
</script>

<style scoped>
    .upgrade{
        display: block;
        width: 100%;
    }

.upgrade--disabled{
    color: black;
    pointer-events: none;
}

.upgrade--enabled{
    color: red;
}
</style>