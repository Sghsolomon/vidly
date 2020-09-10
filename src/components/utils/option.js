export function handleNumber() {
  for (let i = 1; i <= 100; i++) {
    var element = document.createElement("option");
    element.value = i;
    element.append(i);
    return element;
  }
}
