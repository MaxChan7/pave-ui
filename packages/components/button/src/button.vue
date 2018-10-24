<template>
  <button
    :class="btnCls"
    @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
const COMPONENT_NAME = 'pave-button'
export default {
  name: COMPONENT_NAME,
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnCls() {
      return [
        'pave-btn',
        {
          'pave-btn_disabled': this.disabled
        }
      ]
    }
  },
  methods: {
    handleClick(e) {
      if (this.disabled) {
        return
      }
      console.log('btn click')
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../common/scss/variable';
.pave-btn {
  appearance: none;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 44px;
  line-height: 44px;
  border-radius: 2px;
  text-align: center;
  white-space: nowrap;
  font-size: 16px;
  color: $color-white;
  background: $color-orange;
  &.pave-btn_disabled {
    background: $color-grey;
  }
}
</style>
