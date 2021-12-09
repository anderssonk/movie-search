export default function forceDelay(miliseconds) {
  return new Promise((resolve) => setTimeout(resolve, miliseconds));
}
