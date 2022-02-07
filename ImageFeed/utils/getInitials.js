export default function getInitials(fullName) {
  const match = fullName.match(/(\w)?\w*\s*(\w)?/);
  return match ? match.slice(1).join('') : '';
}
