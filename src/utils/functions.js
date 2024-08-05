export function useFunctions() {
  const alphaRange = (start, end) =>
    new Array(end.charCodeAt(0) - start.charCodeAt(0) + 1)
      .fill()
      .map((d, i) => String.fromCharCode(i + start.charCodeAt(0)))

  const combine = (first, second) =>
    Object.fromEntries(
      first.map((item, index) => [first[index], second[index]])
    )

  const shuffle = (array) =>
    array
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value)

  return {
    alphaRange,
    combine,
    shuffle,
  }
}
