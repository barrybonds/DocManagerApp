<template>
    <div>
    <v-list-item ripple>
        <v-btn text icon color="red lighten-2">
        <v-icon>delete_forever</v-icon>
        </v-btn>
    <v-list-item-content>
        <v-list-item-title class="text--primary">
        {{ item.name }}
        </v-list-item-title>
        <v-list-item-subtitle>
        {{ item.exp }}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
        Days left...
        </v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action>
        <v-list-item-action-text>
        {{ item.id }}
        </v-list-item-action-text>
        <v-icon color="green lighten-1">done_outline</v-icon>
        <v-icon color="red lighten-1">warning</v-icon>
    </v-list-item-action>
    </v-list-item>
    <v-divider v-if="item.id + 1 < lgth"
                :key="`divider-${item.id}`">
    </v-divider>
    </div>
</template>
<script>
export default {
    naem: "Item",
    props: ["item", "lgth"]
}
</script>

<style scoped>

</style>