export function buildDisplayId(
  date: number,
  title: string,
  index: number
): string {
  const words = title.trim().split(/\s+/);
  let formattedTitle: string;

  if (words.length === 1) {
    formattedTitle = words[0].substring(0, 2).toUpperCase();
  } else {
    formattedTitle = words.map((w) => w.charAt(0).toUpperCase()).join('');
  }

  const formattedIndex = String(index).padStart(3, '0');

  return `${date}-${formattedTitle}-${formattedIndex}`;
}
