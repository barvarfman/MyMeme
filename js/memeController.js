'use strict'

var gElCanvas;
var gCtx;
var gFontStyle = ' ' + 'impact1'
var gTextColor;
var gBorderColor = false;
var gPicId;
var gMeme=getMeme();
var gPlaceHolderTextIndx=true;
function init(imgIdx) {
    gPicId = imgIdx;
    gBorderColor = true;
    gTextColor = 'white';
    gElCanvas = document.getElementById('my-canvas');
    gCtx = gElCanvas.getContext('2d');
    gCtx.textAlign = 'left';
    resizeCanvas();
    updateXY(((gElCanvas.width) / 2.5), ((gElCanvas.height) / 7), 0)
    updateXY(((gElCanvas.width) / 2.5), ((gElCanvas.height) / 1.1), 1)
    renderGalery();
    renderCanvas();
}

function renderGalery() {
    var strHTML = getImgs().map(function (image) {
        return `
           <img class="pic${image.id} pic-size" id="${image.id}" src="./memeImg/${image.id}.jpg" alt="" onclick="onTransferToEditor(${image.id})">`
    }).join('');
    document.querySelector('.gallery-content').innerHTML = strHTML;
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    gElCanvas.width = elContainer.offsetWidth;
    gElCanvas.height = elContainer.offsetHeight;
}


function drawText(text, x, y) {
    var space = ' ';
    gCtx.lineWidth = '2';
    gCtx.font = `${gMeme.lines[gMeme.selectedLineIdx].size}px${space}${gFontStyle}`;
    gCtx.fillText(text, x, y);
    if (gBorderColor) gCtx.strokeText(text, x, y);
}


function renderCanvas() {
    var elImg = new Image();
    elImg.src = getImg(gPicId);
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);
        gCtx.fillStyle = gTextColor;
        drawText(gMeme.lines[0].txt, gMeme.lines[0].x, gMeme.lines[0].y);
        drawText(gMeme.lines[1].txt, gMeme.lines[1].x, gMeme.lines[1].y);
    }
}

function onUpdateText(ev) {
    updateText(ev.key, gMeme.selectedLineIdx, ev.code);
    renderCanvas();
}

function onEditFontSize(indexOfchangeSize) {
    updateFontSize(gMeme.selectedLineIdx, indexOfchangeSize)
    renderCanvas();
}


function onTxtUpOrDown(indexOfchangeY) {
    updateTextByY(indexOfchangeY);
    renderCanvas();
}


function onDelete() {
    deleteText(gMeme.selectedLineIdx);
    var elTxt = document.querySelector('.meme-text');
    elTxt.value = "";
    renderCanvas();
}






function onAlignToLeft() {
    gCtx.textAlign = 'left';
    updateTextByX(20)
    renderCanvas();
}
function onAlignToCenter() {
    gCtx.textAlign = 'center';
    updateTextByX(gElCanvas.width / 2); 
    renderCanvas();
}

function onAlignToRight() {
    gCtx.textAlign = 'right';
    updateTextByX(gElCanvas.width-20);
    renderCanvas();
}

function onFontChange(el) {
    if (el.value === 'Impact') {
        gFontStyle = 'impact1';
        renderCanvas();
    }

    else if (el.value === 'monospace') {
        gFontStyle = 'monospace';
        renderCanvas();
    }

    else {
        gFontStyle = 'Montserrat1';
        renderCanvas();
    }
}

function onChangeColor(elColor) {
    gTextColor = elColor.value;
    renderCanvas();
}

function onBorderColor() {
    if (gBorderColor) gBorderColor = false;
    else gBorderColor = true;
    renderCanvas();
}


function onTransferToEditor(imgIdx) {
    var elMainGallery = document.querySelector('.hide-show-main-galery');
    var elMainContent = document.querySelector('.hide-show-main-content');
    elMainGallery.style.display = 'none';
    elMainContent.style.display = 'block';
    init(imgIdx)
}

function onTransferToGalery() {
    var elMainGallery = document.querySelector('.hide-show-main-galery');
    var elMainContent = document.querySelector('.hide-show-main-content');
    elMainGallery.style.display = 'block';
    elMainContent.style.display = 'none';
}

function onDownloadMeme(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'my_meme';
}


function onSwitchlines() {
    switchlines();
    var elTxt = document.querySelector('.meme-text');
    elTxt.value = "";
  if(gPlaceHolderTextIndx)  elTxt.placeholder="bottom Line"
   else elTxt.placeholder="Top Line"
   gPlaceHolderTextIndx=!gPlaceHolderTextIndx;
}



function onToggleMenu() {
    document.body.classList.toggle('menu-open');
}