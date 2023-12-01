export default function addInfo({
  login,
  name,
  avatar_url,
  followers,
  following,
  location,
  public_repos,
}) {
  document.querySelector("[data-avatar]").src = avatar_url;
  document.querySelector("[data-user-name]").innerText = name;
  document.querySelector("[data-followers]").innerText = followers;
  document.querySelector("[data-following]").innerText = following;
  document.querySelector("[data-repository]").innerText = public_repos;
  document.querySelector("[data-company]").innerText = "@" + login;
  document.querySelector("[data-location]").innerText = location.split(' ')[0];
}
