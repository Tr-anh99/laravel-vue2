<template>
    <div class="user-dashboard">
        <div class="list-user-comp">
            <h4>List User</h4>
            <ListUser @userSelected="handleEvent"></ListUser>
        </div>
        <hr />
        <div class="user-detail-comp">
            <h4>User Detail</h4>
            <UserDetail :userDetailInfo="userSelectedFromChild"></UserDetail>
        </div>
    </div>
</template>

<script>
import ListUser from "./ListUser.vue";
import UserDetail from "./UserDetail.vue";
export default {
    data: {
        userSelectedFromChild: null,
    },
    components: {
        ListUser,
        UserDetail,
    },
    methods: {
        handleEvent(user) {
            console.log("🚀 ~ handleEvent ~ user:", user);
            this.userSelectedFromChild = user;
        },
    },
};
</script>

<style lang="scss" scoped>
.user-dashboard {
    padding: 1rem;
}
</style>
