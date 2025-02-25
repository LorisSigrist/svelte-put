/// <reference types="svelte" />

declare namespace svelteHTML {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface HTMLAttributes<T> {
    'on:tocinit'?: (event: CustomEvent<import('@svelte-put/toc').TocInitEventDetail>) => void;
    'on:tocchange'?: (event: CustomEvent<import('@svelte-put/toc').TocChangeEventDetail>) => void;
  }
}
