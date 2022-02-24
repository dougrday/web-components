<!--Add this line to your web component-->
<svelte:options tag="mc-like-button" />

<script lang="ts">
  import "@material/mwc-button";
  import { BehaviorSubject } from "rxjs";
  import { map } from "rxjs/operators";
  import { get_current_component, onDestroy } from "svelte/internal";

  const liked$ = new BehaviorSubject(false);
  const likeText = $$props["liketext"] ?? "Like";
  const unlikeText = $$props["unliketext"] ?? "Unlike";
  const text$ = liked$.pipe(map((liked) => (liked ? unlikeText : likeText)));

  const handleClick = () => {
    liked$.next(!$liked$);
  };

  const component = get_current_component();
  liked$.subscribe((liked) => {
    component?.dispatchEvent(new CustomEvent("liked", { detail: liked }));
  });

  onDestroy(() => {
    liked$.complete();
  });
</script>

<mwc-button on:click={handleClick}>{$text$}</mwc-button>
