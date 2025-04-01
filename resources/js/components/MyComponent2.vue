<template>
    <div>
        <h1>{{ count }}</h1>
        <button @click="updateCount">Update Count</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        updateCount() {
            this.count++;
        },
    },
    computed: {
        double() {
            return this.count * 2;
        },
    },
    watch: {
        count: {
            handler: (newVal, oldVal) => {
                console.log("🚀 ~ count ~ newVal, oldVal:", newVal, oldVal);
            },
            deep: true,
            immediate: true,
        },
        double() {
            console.log("🚀 ~ double ~ this.double:", this.double);
        },
    },
};
</script>

<style lang="scss" scoped>
.my-component {
    color: red;
}
</style>
