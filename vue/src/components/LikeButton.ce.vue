<template>
    <button class="mdc-button foo-button">
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label">Button</span>
    </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    }
  }
};
</script>