<!--Add this line to your web component-->
<svelte:options tag="mc-like-button" />

<script lang="ts">
  import "@material/mwc-button";
  import { get_current_component } from "svelte/internal";

  let liked = false;
  const likeText = $$props["liketext"] ?? "Like";
  const unlikeText = $$props["unliketext"] ?? "Unlike";

  const component = get_current_component();
  const handleClick = () => {
    liked = !liked;
    component?.dispatchEvent(new CustomEvent("liked", { detail: liked }));
  };

  $: text = liked ? unlikeText : likeText;
</script>

<mwc-button on:click={handleClick}>{text}</mwc-button>
