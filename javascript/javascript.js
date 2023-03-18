var card_information = [["bubblespacewars360x360.png",["bubblespacewars1800x1800.png"],["Bubble Space Wars"],["Bubble Space Wars is a game made with Unity engine."]],
                        ["labyrinth2d360x360.png",["labyrinth2d1800x1800.png"],["Labyrinth"],["Labyrinth2d."]],
                        ["skgameswebsite360x360.png",["skgameswebsite1800x1800.png"],["Hobby website"],["I made this website for my upcoming games."]],
                        ["labyrinth2d360x360.png",["labyrinth2d1800x1800.png"],["Labyrinth2d"],["Labyrinth2d game is a maze type game where you have to pass 10levels in 5minutes to win."]]];
var current_image_num = 0;
const gallery_images = document.querySelector("#gallery-cards-space");

for (let i = 0; i < card_information.length; i++) {
    gallery_images.insertAdjacentHTML('beforeend', '<div class="gallery-cards"><div class="card-title"><h3>' + card_information[i][2] + '</h3></div><img src="images/Gallery360x360/' + card_information[i][0] + '" onclick="On(' + i + ')"><div id="description-button"><img src="images/downupbutton.png" alt="" onclick="Description_On(' + i + ')"></div><div class="image-description" id="des' + i + '"><a>' + card_information[i][3] + '</a></div></div>');
    document.getElementById("des" + i).style.display = "none";
};

function On(number) {
    document.getElementById("img-to-display").src = "images/Gallery1800x1800/" + card_information[number][1];
    document.getElementById("img-fullscreen").style.display = "block";
    current_image_num = number;
};

function Off() {
    document.getElementById("img-fullscreen").style.display = "none";
};

function Next_Image() {
    if(current_image_num < card_information.length - 1){
        document.getElementById("img-to-display").src = "images/Gallery1800x1800/" + card_information[current_image_num + 1][1];
        current_image_num++;
    }
};

function Previous_Image() {
    if(current_image_num > 0){
        document.getElementById("img-to-display").src = "images/Gallery1800x1800/" + card_information[current_image_num - 1][1];
        current_image_num--;
    }
};

function Description_On(desnum) {
    if(document.getElementById("des" + desnum).style.display == "block"){
        document.getElementById("des" + desnum).style.display = "none";
    }
    else{
        document.getElementById("des" + desnum).style.display = "block";
        document.getElementById("des" + desnum).style.position = "absolute";
        document.getElementById("des" + desnum).style.width = "275px";
    }
};