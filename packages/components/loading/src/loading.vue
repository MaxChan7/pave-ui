<template>
  <div class="pave-loading">
    <span class="pave-loading-spinners" :style="style">
      <i v-for="item in pieces" :key="item"></i>
    </span>
  </div>
</template>

<script>
const COMPONENT_NAME = 'pave-loading'
export default {
  name: COMPONENT_NAME,
  props: {
    size: {
      type: String
    }
  },
  data() {
    return {
      pieces: 12
    }
  },
  computed: {
    style() {
      if (!this.size) {
        return
      }
      const value = `${this.size}px`
      return {
        width: value,
        height: value
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../common/scss/variable';
.pave-loading {
  font-size: $fontsize-large-xxx;
  .pave-loading-spinners {
    position: relative;
    display: block;
    width: 1em;
    height: 1em;
    i {
      position: absolute;
      top: 37%;
      left: 44.5%;
      width: 2px;
      height: 25%;
      border-radius: 50%/20%;
      opacity: .25;
      background-color: currentColor;
      animation: spinner-fade 1s linear infinite;
      @for $i from 1 through 12
      {
        &:nth-child(#{$i}) {
          animation-delay: #{($i - 1) / 12}s;
          transform: rotate(#{30 * ($i - 6)}deg) translateY(-150%);
        }
      }
    }
  }
}
@keyframes spinner-fade {
  0% {
    opacity: .85;
  }
  50% {
    opacity: .25;
  }
  100% {
    opacity: .25;
  }
}
</style>
