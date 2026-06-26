/* =====================================
WebBag OCR Pro
app.js - Part 1
===================================== */

// ---------- DOM ----------

const imageInput = document.getElementById("imageInput");
const selectImageBtn = document.getElementById("selectImageBtn");
const dropArea = document.getElementById("dropArea");
const preview = document.getElementById("preview");

const extractBtn = document.getElementById("extractBtn");
const language = document.getElementById("language");
const result = document.getElementById("result");

const progressSection = document.getElementById("progressSection");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

const copyBtn = document.getElementById("copyBtn");
const downloadBtn = document.getElementById("downloadBtn");
const clearBtn = document.getElementById("clearBtn");

const themeToggle = document.getElementById("themeToggle");

// ---------- Variables ----------

let selectedImage = null;

/* =====================================
Theme
===================================== */

themeToggle.addEventListener("click", () => {

```
document.body.classList.toggle("dark");

themeToggle.textContent =
    document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";
```

});

/* =====================================
Select Image
===================================== */

selectImageBtn.addEventListener("click", () => {

```
imageInput.click();
```

});

imageInput.addEventListener("change", (e) => {

```
const file = e.target.files[0];

if(file){

    showPreview(file);

}
```

});

/* =====================================
Preview
===================================== */

function showPreview(file){

```
selectedImage = file;

const reader = new FileReader();

reader.onload = function(e){

    preview.innerHTML = `
        <img
            src="${e.target.result}"
            alt="Preview"
            style="
                width:100%;
                border-radius:16px;
                display:block;
            ">
    `;

};

reader.readAsDataURL(file);
```

}
