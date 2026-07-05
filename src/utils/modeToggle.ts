type ModeConfig = {
  buttonId: string;
  className: string;
  storageKey: string;
  hotkey: string;
  defaultOn?: () => boolean;
};

export function initModeToggle(config: ModeConfig): void {
  const { buttonId, className, storageKey, hotkey, defaultOn } = config;
  const doc = document.documentElement;

  const syncButton = () => {
    const button = document.getElementById(buttonId);
    button?.classList.toggle('is-active', doc.classList.contains(className));
  };

  const apply = (on: boolean) => {
    doc.classList.toggle(className, on);
    localStorage.setItem(storageKey, on ? 'true' : 'false');
    syncButton();
  };

  const toggle = () => {
    const run = () => apply(!doc.classList.contains(className));
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (!reduceMotion && document.startViewTransition) {
      // A rapid re-toggle skips the in-flight transition; those rejections are expected.
      const transition = document.startViewTransition(run);
      transition.ready.catch(() => {});
      transition.finished.catch(() => {});
      transition.updateCallbackDone.catch(() => {});
    } else {
      run();
    }
  };

  const stored = localStorage.getItem(storageKey);
  apply(stored === null ? Boolean(defaultOn?.()) : stored === 'true');

  // Listeners live on the document so they survive view-transition DOM swaps.
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null;
    if (target?.closest(`#${buttonId}`)) toggle();
  });
  document.addEventListener('keydown', (event) => {
    const target = event.target as HTMLElement | null;
    if (
      target &&
      (target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable)
    ) {
      return;
    }
    if (event.key.toLowerCase() === hotkey) toggle();
  });
  // Swapped-in headers arrive without the is-active state.
  document.addEventListener('astro:after-swap', syncButton);
}
