const linkedIn = document.getElementById("linkedInIconButton");
const github = document.getElementById("gitIconButton");

linkedIn.addEventListener("click", function() {
    openPage("link");
});

github.addEventListener("click", function() {
    openPage("git");
})

function openPage(pageName) {
    switch(pageName) {
        case "git":
            return window.open("https://github.com/W1CD", "_blank");
        case "link":
            return window.open("https://www.linkedin.com/in/randythai/", "_blank");
        default:
            return "No page found";
    }
}

const webMock = document.getElementById("websiteMock");

webMock.addEventListener("click", function() {
    changePage("mock");
})

function changePage(pageName) {
    switch(pageName) {
        case "git":
            location.href = "#";
        case "mock":
            location.href = "pages/websiteMockUp.html"
            break;
        
    }
}