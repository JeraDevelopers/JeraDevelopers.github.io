const CopyToClipboard = (text, button) => {
    let copyText = document.getElementById(text);
    let copyButton = document.getElementById(button);

    copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(copyText.innerHTML);
        alert("Successfully copied to the clipboard.");
    })

}

export default CopyToClipboard