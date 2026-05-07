export type Track = { artist: string; title: string };

export function parseTracks(body: string): Track[] {
  return body
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.startsWith('- '))
    .map((l) => {
      const line = l.slice(2).trim();
      const sep = line.indexOf(' - ');
      if (sep === -1) return { artist: '', title: line };
      return { artist: line.slice(0, sep), title: line.slice(sep + 3) };
    });
}
