tablesWrap();
iframesWrap();

// TABLE (wysiwyg editor) responsive
function tablesWrap() {
  var contentTables = document.querySelectorAll(".o-content table"),
    i;

  for (i = 0; i < contentTables.length; ++i) {
    contentTables[i].classList.add("table");

    var contentTableWrap = document.createElement("div");

    contentTableWrap.classList.add("table-responsive");

    contentTables[i].parentNode.insertBefore(
      contentTableWrap,
      contentTables[i]
    );

    contentTableWrap.appendChild(contentTables[i]);
  }
}

// // IFRAME youtube/google (wysiwyg editor) responsive
// function iframesWrap() {
//   var contentIframes = document.querySelectorAll(".o-content iframe"),
//     i;

//   for (i = 0; i < contentIframes.length; ++i) {
//     contentIframes[i].removeAttribute("height");
//     contentIframes[i].removeAttribute("width");

//     var iframeWrap = document.createElement("div");
//     iframeWrap.classList.add("ratio");
//     iframeWrap.classList.add("ratio-16x9");

//     contentIframes[i].parentNode.insertBefore(iframeWrap, contentIframes[i]);

//     iframeWrap.appendChild(contentIframes[i]);
//   }
// }
function iframesWrap() {
  const iframes = document.querySelectorAll(".o-content iframe");

  iframes.forEach((ifr) => {
    const src = (ifr.getAttribute("src") || "").toLowerCase();
    if (
      src.includes("youtube.com") ||
      src.includes("youtu.be") ||
      src.includes("slovan.plus/embed/videos")
    ) {
      ifr.removeAttribute("height");
      ifr.removeAttribute("width");
      ifr.style.position = "";

      const wrap = document.createElement("div");
      wrap.classList.add("ratio", "ratio-16x9");

      ifr.parentNode.insertBefore(wrap, ifr);
      wrap.appendChild(ifr);
    }
  });
}
