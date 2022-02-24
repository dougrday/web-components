<!--Add this line to your web component-->
<svelte:options tag="mwc-like-button" />

<script lang="ts">
  import "@material/mwc-button";

  let liked = false;
  let text = "Like";
  const handleClick = () => {
    liked = !liked;
    text = liked ? "Unlike" : "Like";
  }
</script>

<mwc-button on:click={handleClick}>{text}</mwc-button>
