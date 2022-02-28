<!--Add this line to your web component-->
<svelte:options tag="mc-like-button" />


<script lang="ts">
  import "@material/mwc-button";
  import { get_current_component } from "svelte/internal";

  export let liketext = "Like";
  export let unliketext = "Unlike";
  let liked = false;

  const component = get_current_component();
  const handleClick = () => {
    liked = !liked;
    component?.dispatchEvent(new CustomEvent("change", { detail: liked }));
  };

  $: text = liked ? unliketext : liketext;
</script>

<mwc-button {...$$props} on:click={handleClick}>{text}</mwc-button>
