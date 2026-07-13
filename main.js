console.log("JS BERJALAN");

const intro =
document.getElementById("intro");

const story =
document.getElementById("story");

const text =
document.getElementById("text");

const photos =
document.getElementById("photos");

const endingButton =
document.getElementById("endingButton");

const ending =
document.getElementById("ending");

const music =
document.getElementById("music");

const congrats =
document.getElementById("congrats");

const congratsText =
document.getElementById("congratsText");

const polaroid =
document.querySelector(".polaroid-single");

const officialText =
document.getElementById("officialText");

const degreeText =
document.getElementById("degreeText");

const letterButton =
document.getElementById("letterButton");

const message = `

Hi Il,
Ini harusnya jadi letter buat tambahan bahan ji, wkwk. 
So.. You re in this chapter now. "Sidang akhir". Gimana rasanya? 
Berpikir ka bisa ki lalui fase itu nanti sama2, sambil stres bareng, 
dan begadang yg kemungkinan bisa berubah jadi ajang gosip larut malam. 
Tapi ternyata Allah punya jalan lain dan disini ka, 
di tempat sejauh 1630km jauhnya, 
siapkan ini sebagai 'sedikit hadiah' karena nda bisa ka hadir disana. Hehe. 

You did very well. BANGGA SEKALI KA T_T. 
Rasanya pas ko chat ka malam2 bilang mau ko wisuda hari selasa, 
kaget ka sekaligus terharu. I am really proud of you. 
For all of our friends. Yang udah sampe dan nyelesain titik penentuan itu. 
So that is. Karena buru-buru jadinya web nya nda sempurna, 
tapi mau gimana, moka kasih ko tepat setelah sidang wkwk.
Once again, congratulation bebs. The hard work finally paid off! <3

`;

const memoryButton =
document.getElementById("memoryButton");

function sleep(ms){

return new Promise(
resolve=>setTimeout(resolve,ms)
);

}



async function typing(){

text.innerHTML="";


for(let char of message){

text.innerHTML += char;


if(char === "."){
    await sleep(500);
}
else if(char === "\n"){
    await sleep(80);
}
else{
    await sleep(50);
}

}


await sleep(2000);


memoryButton.style.display="block";

memoryButton.style.opacity=1;


}



intro.onclick = async()=>{


intro.style.opacity=0;


await sleep(1500);


music.volume=.4;

music.play();


intro.style.display="none";


await showCongrats();


};

async function showCongrats(){

    const congrats =
    document.getElementById("congrats");

    const letterButton =
    document.getElementById("letterButton");


    congrats.style.display="flex";


    await sleep(1000);


    document.getElementById("congratsText").style.opacity=1;


    await sleep(2500);


    document.querySelector(".polaroid-single").style.opacity=1;


    await sleep(2500);


    document.getElementById("officialText").style.opacity=1;


    await sleep(2500);


    document.getElementById("degreeText").style.opacity=1;


    await sleep(2000);

    
    // tombol muncul

    letterButton.style.display="block";

    letterButton.style.opacity=1;

}


letterButton.onclick = async()=>{


    congrats.style.display="none";


    story.style.display="flex";


    await sleep(500);


    await typing();


};


memoryButton.onclick = async()=>{


story.style.opacity=0;


await sleep(1200);


story.style.display="none";


photos.classList.add("show");


const cards =
document.querySelectorAll(".memory-card");


cards.forEach((card,index)=>{


setTimeout(()=>{

card.style.opacity=1;

card.style.transform="translateY(0)";


},index*1200);


});

await sleep(5000);


endingButton.style.display="block";

endingButton.style.opacity=1;


};


endingButton.onclick = async()=>{


photos.style.opacity=0;


await sleep(1500);


photos.style.display="none";


ending.style.display="flex";


ending.classList.add("fade");


};


function hideAllScenes(){

    document.getElementById("congrats").style.display="none";

    document.getElementById("photos").style.display="none";

    document.getElementById("story").style.display="none";

    document.getElementById("ending").style.display="none";

}
