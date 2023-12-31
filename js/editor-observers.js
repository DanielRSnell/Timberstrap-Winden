document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM Loaded Timberstrap Editor Observers");
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            const editorWindow = document.getElementById("lc-html-editor-window");
            const previewIframe = document.getElementById("previewiframe-wrap");
            const previewWindow = document.getElementById("previewiframe");

            handleClassMutation(mutation, editorWindow, previewIframe, previewWindow);
            handleStyleMutation(mutation, previewWindow, previewIframe);
        });
    });

    setupObservers(observer);
});

function handleClassMutation(mutation, editorWindow, previewIframe, previewWindow) {
    if (mutation.attributeName === "class" && editorWindow) {
        if (editorWindow.classList.contains("lc-editor-window-sided")) {
            const mobilePreview = document.querySelector(".smartphone");

            if (!mobilePreview) {
                console.log('Editor Window Class Changed')
                console.log("Slider Active State");
                editorWindow.style.cssText = "max-height: 100vh; display: block; height: calc(100% - var(--maintoolbar-height) - 0px) !important; width: 40% !important;";
                previewIframe.style.marginLeft = "auto";
                previewIframe.style.marginRight = "0";
                previewIframe.style.width = "60%";
            } else {
                editorWindow.style.cssText = "max-height: 100vh; display: block; height: calc(100% - var(--maintoolbar-height) - 0px) !important; width: 40% !important;";
                // If it's a mobile preview, adjust margins based on previewWidth
                const previewWidth = parseFloat(previewWindow.style.width);
                handlePreviewWindowChanges(previewWidth);
            }
        } else {
            console.log('Editor Window Class Changed')
            console.log("Slider Closed State");
            editorWindow.style.cssText = "max-height: 100vh; display: block;";
            previewIframe.style.marginLeft = "";
            previewIframe.style.marginRight = "";
            previewIframe.style.marginTop = "";
            previewIframe.style.width = "";
        }
    }
}

function handleStyleMutation(mutation, previewWindow, previewIframe) {
        if (mutation.attributeName === "style") {
            const slider = document.querySelector(".lc-editor-window-sided");
            if (slider) {
            console.log("Preview Window Style Changed");

            const mobilePreview = document.querySelector(".smartphone");
            if (!mobilePreview) {
                console.log("Mobile Preview Not Active");
                previewIframe.style.width = "60%";
                previewIframe.style.marginRight = "0";
            } else {
                console.log("Mobile Preview Active");
                const previewWidth = parseFloat(previewWindow.style.width);
                previewIframe.style.removeProperty("width");
                console.log("Preview Width: ", previewWidth);

                const mobilePreview = document.querySelector(".smartphone");

                handlePreviewWindowChanges(previewWidth); // Adjust margins based on previewWidth

            }
        } else {
            console.log("Slider Closed State");
            slider.style.cssText = "max-height: 100vh; display: block;";
            previewIframe.style.marginLeft = "";
            previewIframe.style.marginRight = "";
            previewIframe.style.width = "";
        }
    }
}

function handlePreviewWindowChanges(previewWidth) {
    const previewIframe = document.getElementById("previewiframe-wrap");
    console.log("Preview Width: ", previewWidth);
    if (previewWidth <= 375.5) { // xs
        console.log("Mobile Preview Active - xs");
        previewIframe.style.marginLeft = "auto";
        previewIframe.style.marginRight = "18%";
        previewIframe.style.marginTop  = "1.5%";
    } else if (previewWidth <= 576.5) { // sm
        console.log("Mobile Preview Active - sm");
        previewIframe.style.marginLeft = "auto";
        previewIframe.style.marginRight = "12%";
                previewIframe.style.marginTop  = "1.5%";
    } else if (previewWidth <= 768.5) { // md
        console.log("Mobile Preview Active - md");
        previewIframe.style.marginLeft = "auto";
        previewIframe.style.marginRight = "8%";
                 previewIframe.style.marginTop  = "1.5%";
    } else if (previewWidth <= 992.5) { // lg
        console.log("Mobile Preview Active - lg");
        previewIframe.style.marginLeft = "auto";
        previewIframe.style.marginRight = "1.5%";
                previewIframe.style.marginTop  = "1.5%";
    } else {
        previewIframe.style.width = "60%";
        previewIframe.style.marginRight = "0";
        previewIframe.style.marginLeft = "auto";

        // Remove margin-top style
        previewIframe.style.removeProperty("margin-top");
    }

}


function setupObservers(observer) {
    observeElement(observer, "lc-html-editor-window", ["class"]);
    observeElement(observer, "previewiframe-wrap", ["class"], true);
    observeElement(observer, "previewiframe", ["style"]);
}

function observeElement(observer, elementId, attributeFilter, subtree = false) {
    const element = document.getElementById(elementId);
    if (element) {
        observer.observe(element, { attributes: true, attributeFilter, subtree });
    }
}