function levenshteinDistance(s: string, t: string): number {
  const m = s.length;
  const n = t.length;
  const d: number[][] = [];

  for (let i = 0; i <= m; i++) {
    d[i] = [i];
    for (let j = 1; j <= n; j++) {
      if (i === 0) {
        d[i][j] = j;
      } else {
        const cost = s.charAt(i - 1) === t.charAt(j - 1) ? 0 : 1;
        d[i][j] = Math.min(
          d[i - 1][j] + 1, // deletion
          d[i][j - 1] + 1, // insertion
          d[i - 1][j - 1] + cost // substitution
        );
      }
    }
  }

  return d[m][n];
}
