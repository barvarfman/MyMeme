'use strict';

var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gSwitchIndex = 1;
var gImgs = [
    { id: 1, url: 'memeImg/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'memeImg/2.jpg', keywords: ['happy'] },
    { id: 3, url: 'memeImg/3.jpg', keywords: ['happy'] },
    { id: 4, url: 'memeImg/4.jpg', keywords: ['happy'] },
    { id: 5, url: 'memeImg/5.jpg', keywords: ['happy'] },
    { id: 6, url: 'memeImg/6.jpg', keywords: ['happy'] },
    { id: 7, url: 'memeImg/7.jpg', keywords: ['happy'] },
    { id: 8, url: 'memeImg/8.jpg', keywords: ['happy'] },
    { id: 9, url: 'memeImg/9.jpg', keywords: ['happy'] },
    { id: 10, url: 'memeImg/10.jpg', keywords: ['happy'] },
    { id: 11, url: 'memeImg/11.jpg', keywords: ['happy'] },
    { id: 12, url: 'memeImg/12.jpg', keywords: ['happy'] },
    { id: 13, url: 'memeImg/13.jpg', keywords: ['happy'] },
    { id: 14, url: 'memeImg/14.jpg', keywords: ['happy'] },
    { id: 15, url: 'memeImg/15.jpg', keywords: ['happy'] },
    { id: 16, url: 'memeImg/16.jpg', keywords: ['happy'] },
    { id: 17, url: 'memeImg/17.jpg', keywords: ['happy'] },
    { id: 18, url: 'memeImg/18.jpg', keywords: ['happy'] }

];

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [

        {
            txt: '',
            size: 40,
            align: 'left',
            color: 'red',
            x: 0,
            y: 0
        },

        {
            txt: '',
            size: 40,
            align: 'left',
            color: 'red',
            x: 0,
            y: 0
        }
    ]
}

function getMeme() {
    return gMeme;
}

function getImg(imgId) {
    var img = gImgs.find(function (img) {
        return imgId === img.id;
    });
    return img.url;
}

function getImgs() {
    return gImgs;
}

function updateText(text, lineIdx, code) {
    console.log(text)
    if (isSign(text)) gMeme.lines[lineIdx].txt += text;
    else if (text === 'Backspace') gMeme.lines[lineIdx].txt = removeLastChar(gMeme.lines[lineIdx].txt);
    else if (code === 'Space') gMeme.lines[lineIdx].txt += " ";
    else gMeme.lines[lineIdx].txt += "";
}



function updateFontSize(lineIdx, indexOfchangeSize) {
    gMeme.lines[lineIdx].size += indexOfchangeSize;
}

function deleteText(lineIdx) {
    gMeme.lines[lineIdx].txt = '';
}


function switchlines() {
    gMeme.selectedLineIdx = gSwitchIndex
    if (gSwitchIndex === 0) gSwitchIndex = 1
    else gSwitchIndex = 0
}

function updateXY(x, y, lineIdx) {
    gMeme.lines[lineIdx].x = x;
    gMeme.lines[lineIdx].y = y;
}

function updateTextByY(indexOfchangeY) {
    gMeme.lines[gMeme.selectedLineIdx].y += indexOfchangeY
}


function updateTextByX(indexOfchangeX) {
    gMeme.lines[gMeme.selectedLineIdx].x = indexOfchangeX
}