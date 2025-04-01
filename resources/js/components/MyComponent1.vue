<template>
    <div>
        <div class="my-component">{{ msg }}</div>
        <h1>{{ newMsg }}</h1>
        <button @click="updateAge()">Update age</button>
        <button @click="updateAdult()">Update Adult</button>
        <button @click="resetAge()">Reset</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            age: 16,
        };
    },
    methods: {
        updateAge() {
            this.age = 60;
        },
        updateAdult() {
            this.age = 45;
        },
        resetAge() {
            this.age = 16;
        },
    },
    computed: {
        msg() {
            return this.age >= 50
                ? "Senior"
                : this.age > 25 && this.age < 50
                ? "Adult"
                : "Young";
        },
        newMsg() {
            console.log(this.msg);
            return `Hello, ${this.msg}`;
        },
    },
};
</script>

<style lang="scss" scoped>
.my-component {
    color: red;
}
</style>
