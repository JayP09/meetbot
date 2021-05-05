chrome.runtime.onMessage.addListener(addData)

function addData(linkData) {
    console.log(linkData);
    let maindiv = document.querySelector(".incoming");
    console.log(maindiv)
    let links = document.createElement("div");
    links.classList.add(".bubble");
    let link = document.createTextNode(linkData.link);
    links.appendChild(link);
    maindiv.appendChild(links);
}