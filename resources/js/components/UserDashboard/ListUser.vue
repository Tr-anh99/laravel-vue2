<template>
    <div class="list-user">
        <table class="tbl-list-user">
            <thead>
                <th>Name</th>
                <th>Location</th>
                <th>DOB</th>
            </thead>
            <tbody>
                <tr v-for="user in userData">
                    <!-- This line below -->
                    <td>
                        <a @click="selectUser(user)"
                            >{{ user.name.title }} - {{ user.name.last }}
                            {{ user.name.first }}</a
                        >
                    </td>
                    <td>{{ user.location.city }}</td>
                    <td>{{ user.dob.date }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import userData from "./data.json";
export default {
    data() {
        return {
            userData,
        };
    },
    emits: ["userSelected"],
    methods: {
        selectUser(user) {
            this.$emit("userSelected", user);
        },
    },
};
</script>

<style lang="scss" scoped>
.tbl-list-user {
    width: 100%;
}
</style>
