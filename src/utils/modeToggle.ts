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
  const button = document.getElementById(buttonId);
  if (!button) return;

  const apply = (on: boolean) => {
    doc.classList.toggle(className, on);
    button.classList.toggle('is-active', on);
    localStorage.setItem(storageKey, on ? 'true' : 'false');
  };

  const stored = localStorage.getItem(storageKey);
  const initial = stored === null ? Boolean(defaultOn?.()) : stored === 'true';
  apply(initial);

  const toggle = () => apply(!doc.classList.contains(className));
  button.addEventListener('click', toggle);
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
}
