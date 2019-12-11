<template>
    <div class="clicker-container">
        <a class="clicker-element" @click.prevent="createMoney"></a>
        <p>{{money}}</p>
    </div>
</template>

<script>
    export default {
        name: "clicker",

        computed:{
            money: function () {
                return this.$store.state.money;
            }
        },

        methods:{
            createMoney: function () {
                this.$store.commit("createMoney")
            }
        }
    }
</script>

<style scoped>
    .clicker-container{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin-top: 150px;
    }

    .clicker-element{
        display: block;
        width: 250px;
        height: 250px;
        background-color: red;
    }
</style>