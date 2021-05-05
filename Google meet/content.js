chrome.runtime.onMessage.addListener(addData);
function addData(linkData, sender, sendResonse) {
    const maindiv = document.querySelector(".incoming");
    const links = document.createElement("div");
    links.classList.add(".bubble");
    const link = document.createTextNode(linkData.link);
    links.appendChild(link);
    maindiv.appendChild(links);
}
