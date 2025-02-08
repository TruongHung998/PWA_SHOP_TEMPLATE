export function getBasePath() {
  const urlParams = new URLSearchParams(window.location.search);
  const appEnv = urlParams.get("env");
  console.log("appEnv", appEnv);
  return window.BASE_PATH || "";
}
