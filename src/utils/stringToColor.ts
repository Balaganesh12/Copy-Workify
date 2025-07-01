export function stringToColor(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  const hue = Math.abs(hash) % 360;

  // Richer color: higher saturation, lower lightness for deeper tone
  return { backgroundColor: `hsl(${hue}, 85%, 45%)`, color: 'white' };
}
