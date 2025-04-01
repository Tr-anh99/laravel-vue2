<template>
    <div>
        <button @click="toggleMessage">Toggle Message</button>
        <template v-if="isVisible">
            <h1>Title</h1>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isVisible: true,
        };
    },
    methods: {
        toggleMessage() {
            this.isVisible = !this.isVisible;
        },
    },
};
</script>

<style lang="scss" scoped>
.my-component {
    color: red;
}
</style>
