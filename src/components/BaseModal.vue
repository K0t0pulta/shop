<template>
    <Teleport v-if="open" to="#teleport-target">
        <div class="teleport-blackout"></div>
        <div class="teleport-modal" @click.prevent="outsideClick" @keydown="outsideClick">
          <div ref="content" class="teleport-modal__content">
            <button class="teleport-modal__close" @click.prevent="doClose">X</button>
            <slot></slot>
          </div>
        </div>
    </Teleport>
</template>

<script>
let openedCount = 0;
let alteastOneOpen = false;

export default {
  props: {
    open: { type: Boolean }
  },
  emits: ['update:open'],
  methods: {
    doClose() {
      this.$emit('update:open', false);
    },
    outsideClick($event) {
      if ($event.target !== this.$refs.content && $event.target.contains(this.$refs.content)) {
        this.doClose();
      }
    },
    checkBlackoutState() {
      if (!openedCount) {
        alteastOneOpen = false;
        document.body.style.overflow = null;
        document.body.style.paddingRight = null;
      } else if (!alteastOneOpen && openedCount === 1) {
        alteastOneOpen = true;
        document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
        document.body.style.overflow = 'hidden';
      }
    }
  },
  watch: {
    open: {
      handler(isOpen) {
        if (isOpen) {
          openedCount += 1;
        } else {
          openedCount -= 1;
        }
        this.checkBlackoutState();
      }
    }
  },
  created() {
    if (this.open) {
      openedCount += 1;
      this.checkBlackoutState();
    }
  }
};
</script>

<style scoped>
.teleport-blackout {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.75;
  background-color: #000;
}
.teleport-modal {
  z-index: 100;
  overflow: auto;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
}
.teleport-modal__content {
  position: relative;
  max-width: 100vw;
  margin-top: auto;
  margin-bottom: auto;
  padding: 40px;
  background: #fff;
}
.teleport-modal__close {
  position: absolute;
  top: -1.25em;
  right: -1.25em;
  padding: 10px;
  line-height: 1;
}
</style>
