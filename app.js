/* ===================================
WebBag OCR Pro v2.0
Part 1 - Core Engine
=================================== */

"use strict";

/* ========= Elements ========= */

const imageInput = document.getElementById("imageInput");
const dropArea = document.getElementById("dropArea");
const preview = document.getElementById("preview");

const extractBtn = document.getElementById("extractBtn");

const result = document.getElementById("result");

const language = document.getElementById("language");

const progressSection =
document.getElementById("progressSection");

const progressFill =
document.getElementById("progressFill");

const progressText =
document.getElementById("progressText");

const copyBtn =
document.getElementById("copyBtn");

const downloadBtn =
document.getElementById("downloadBtn");

const clearBtn =
document.getElementById("clearBtn");

const themeToggle =
document.getElementById("themeToggle");

/* ========= State ========= */

let currentImage = null;

/* ========= Open File ========= */

dropArea.addEventListener("click", () => {

imageInput.click();

});

/* ========= Choose Image ========= */

imageInput.addEventListener("change", (e) => {

const file = e.target.files[0];

if (!file) return;

loadImage(file);

});

/* ========= Load Preview ========= */

function loadImage(file){

currentImage = file;

const url = URL.createObjectURL(file);

preview.innerHTML = "";

const img = document.createElement("img");

img.src = url;

preview.appendChild(img);

}

/* ========= Drag & Drop ========= */

["dragenter","dragover"].forEach(event=>{

dropArea.addEventListener(event,e=>{

e.preventDefault();

dropArea.style.borderColor="#16A34A";

});

});

["dragleave","drop"].forEach(event=>{

dropArea.addEventListener(event,e=>{

e.preventDefault();

dropArea.style.borderColor="#2563EB";

});

});

dropArea.addEventListener("drop",(e)=>{

const file = e.dataTransfer.files[0];

if(!file) return;

loadImage(file);

});

/* ========= Paste Image ========= */

window.addEventListener("paste",(e)=>{

const items=e.clipboardData.items;

for(const item of items){

if(item.type.startsWith("image")){

const file=item.getAsFile();

loadImage(file);

}

}

});

/* ========= Theme ========= */

themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

/* ========= Progress ========= */

function setProgress(value){

progressSection.style.display="block";

progressFill.style.width=value+"%";

progressText.textContent=value+"%";

}

function resetProgress(){

progressFill.style.width="0%";

progressText.textContent="0%";

progressSection.style.display="none";

}

/* ========= Clear ========= */

clearBtn.addEventListener("click",()=>{

currentImage=null;

imageInput.value="";

preview.innerHTML="<p>ستظهر معاينة الصورة هنا</p>";

result.value="";

resetProgress();

});

/* ========= Copy ========= */

copyBtn.addEventListener("click",()=>{

if(!result.value.trim()) return;

navigator.clipboard.writeText(result.value);

});

/* ========= Download ========= */

downloadBtn.addEventListener("click",()=>{

if(!result.value.trim()) return;

const blob=new Blob(

[result.value],

{type:"text/plain"}

);

const link=document.createElement("a");

link.href=URL.createObjectURL(blob);

link.download="webbag-ocr.txt";

link.click();

});

/* ========= OCR ========= */

/* سيتم إضافته في الجزء الثاني */

