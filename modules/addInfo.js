export default function addInfo({
  login,
  avatar_url,
  followers,
  following,
  location,
  public_repos,
}) {
  document.querySelector("[data-avatar]").src = avatar_url;
  document.querySelector("[data-followers]").innerText = followers;
  document.querySelector("[data-following]").innerText = following;
  document.querySelector("[data-repository]").innerText = public_repos;
  document.querySelector("[data-company]").innerText = "@" + login;
  document.querySelector("[data-location]").innerText = location;
}
