function extract(content) {

    const regex = /\((.*?)\)/g;
    const contentToExtract = document.getElementById(content).textContent;

    return  Array.from(contentToExtract.matchAll(regex)).map(match => match[1]).join('; ');

}