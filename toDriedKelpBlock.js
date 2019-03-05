const links = document.getElementsByTagName("link");

Array.prototype.forEach.bind(links, function(link){
    if(link.rel == "shortcut icon"){
        document.head.removeChild(link);
    }
})();

const link = document.createElement("link");
link.rel = "shortcut icon";
link.type = "image/x-icon";
link.href = chrome.extension.getURL("/favicon.ico");

document.head.appendChild(link);
