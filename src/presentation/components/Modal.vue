<script setup>
import { ref, onMounted, onBeforeUnmount, defineExpose } from "vue";
import M from "materialize-css";

defineProps({
  id: { type: String, required: true },
  isContactForm: { type: Boolean, default: false },
});

const modalRef = ref(null);
const isOpened = ref(false);
let modalInstance = null;

function showModal() {
  if (modalInstance) {
    modalInstance.open();
    return;
  }
  if (modalRef.value) {
    modalInstance = M.Modal.init(modalRef.value, {
      onOpenStart() {
        isOpened.value = true;
      },
      onCloseEnd() {
        isOpened.value = false;
      },
      dismissible: true,
    });
    modalInstance.open();
  }
}

function hideModal() {
  if (modalInstance) {
    try {
      modalInstance.close();
    } catch (e) {
      /* ignore */
    }
  } else if (modalRef.value) {
    modalRef.value.classList.remove("open");
    isOpened.value = false;
  }
}

defineExpose({ showModal, hideModal });

onMounted(() => {
  if (modalRef.value) {
    modalInstance = M.Modal.init(modalRef.value, {
      onOpenStart() {
        isOpened.value = true;
      },
      onCloseEnd() {
        isOpened.value = false;
      },
      dismissible: true,
    });
  }
});

onBeforeUnmount(() => {
  if (modalInstance) {
    try {
      modalInstance.destroy();
    } catch (e) {
      /* ignore */
    }
    modalInstance = null;
  }
});
</script>

<script>
export default {
  name: "AppModal",
};
</script>

<template>
  <a
    v-if="isOpened"
    @click="hideModal"
    class="close-modal"
    :class="{ 'close-modal--contact-form': isContactForm }"
    aria-label="Fechar modal"
  >
    <font-awesome-icon icon="fa-solid fa-xmark" />
  </a>

  <div :id="id" ref="modalRef" class="modal" role="dialog" :aria-modal="true">
    <div class="modal-content" role="document">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.modal {
  max-width: 900px;
  margin: 0 auto;
}
.modal .modal-content {
  padding: 24px;
  border-radius: 8px;
}
</style>
