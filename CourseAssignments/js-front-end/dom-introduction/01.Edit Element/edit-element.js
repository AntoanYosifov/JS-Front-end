function editElement(element, match, replacer) {
    let textContent = element.textContent;
    element.textContent = textContent.replaceAll(match, replacer);
}