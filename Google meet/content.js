chrome.runtime.onMessage.addListener(

function (request, sender, sendResponse) {
    console.log(linkData);
    let maindiv = document.querySelector(".incoming");
    console.log(maindiv)
    let links = document.createElement("div");
    links.classList.add(".bubble");
    let link = document.createTextNode(request.link);
    links.appendChild(link);
    maindiv.appendChild(links);
});