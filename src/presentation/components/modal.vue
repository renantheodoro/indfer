<template>
    <div :id="id" ref="modal" class="modal">
        <a @click="hideModal" class="close-modal">
            <font-awesome-icon icon="fa-solid fa-xmark" />
        </a>
        <div class="modal-content">
            <slot />
        </div>
    </div>
</template>
<script>
import M from 'materialize-css';

export default {
    name: "app-modal",

    props: {
        id: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            materializeInstance: null
        }
    },

    methods: {
        showModal() {
            this.materializeInstance.open();
        },

        hideModal() {
            this.materializeInstance.close();
        },
    },

    mounted() {
        const element = this.$refs.modal;
        this.materializeInstance = M.Modal.init(element);
    },

    beforeUnmount() {
        this.materializeInstance.destroy();
    },

}
</script>
<style lang="">
    
</style>