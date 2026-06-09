import { getCollection } from 'astro:content';

export async function findIndex(id: string) {
  const entries = await getCollection('mixtapes');

  entries.sort((a, b) => a.data.date - b.data.date);

  const i = entries.findIndex((entry) => entry.id === id);
  if (i === -1) {
    console.error(`No entry found with slug/id: ${id}`);
  }

  return i + 1;
}

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
