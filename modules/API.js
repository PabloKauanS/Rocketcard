export default async function API(value) {
  const result = await (
    await fetch(`https://api.github.com/users/${value}`)
  ).json();
  if (result.message) return false;
  return result;
}
