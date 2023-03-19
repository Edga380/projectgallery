var card_information = [["bubblespacewars01size360x360.png",["bubblespacewars01size1800x1800.png"],["Bubble Space Wars"],["Main menu."]],
                        ["bubblespacewars02size360x360.png",["bubblespacewars02size1800x1800.png"],["Bubble Space Wars"],["Daily quests."]],
                        ["bubblespacewars03size360x360.png",["bubblespacewars03size1800x1800.png"],["Bubble Space Wars"],["Daily login."]],
                        ["bubblespacewars04size360x360.png",["bubblespacewars04size1800x1800.png"],["Bubble Space Wars"],["Information about enemy bubbles and abilities."]],
                        ["bubblespacewars05size360x360.png",["bubblespacewars05size1800x1800.png"],["Bubble Space Wars"],["Gameplay."]],
                        ["bubblespacewars06size360x360.png",["bubblespacewars06size1800x1800.png"],["Bubble Space Wars"],["Battlling one of ten unique bosses in the game."]],
                        ["bubblespacewars07size360x360.png",["bubblespacewars07size1800x1800.png"],["Bubble Space Wars"],["Victory!"]],
                        ["bubblespacewars08size360x360.png",["bubblespacewars08size1800x1800.png"],["Bubble Space Wars"],["Unique boss attack."]],
                        ["skgameswebsite01size360x360.png",["skgameswebsite01size1800x1800.png"],["SKG Website"],["Main page of my games website."]],
                        ["skgameswebsite02size360x360.png",["skgameswebsite02size1800x1800.png"],["SKG Website"],["Page for Bubble Space Wars."]],
                        ["skgameswebsite03size360x360.png",["skgameswebsite03size1800x1800.png"],["SKG Website"],["Contact page."]],
                        ["labyrinth2d01size360x360.png",["labyrinth2d01size1800x1800.png"],["Labyrinth2D"],["Start game page."]],
                        ["labyrinth2d02size360x360.png",["labyrinth2d02size1800x1800.png"],["Labyrinth2D"],["Gameplay."]],
                        ["labyrinth2d03size360x360.png",["labyrinth2d03size1800x1800.png"],["Labyrinth2D"],["You lose page."]]];
var current_image_num = 0;
const gallery_images = document.querySelector("#gallery-cards-space");
const slideshow_image_container = document.getElementById("random-image");

//Takes information from array and insert html code with it
for (let i = 0; i < card_information.length; i++) {
    gallery_images.insertAdjacentHTML('beforeend', '<div class="gallery-cards"><div class="card-title"><h3>' + card_information[i][2] + '</h3></div><img src="images/gallery360x360/' + card_information[i][0] + '" onclick="On(' + i + ')"><div id="description-button"><img src="images/downupbutton.png" alt="" onclick="Description_On(' + i + ')"></div><div class="image-description" id="des' + i + '"><a>' + card_information[i][3] + '</a></div></div>');
    document.getElementById("des" + i).style.display = "none";
};

//When pressed on individual image makes it fullscreen
function On(number) {
    document.getElementById("img-to-display").src = "images/gallery1800x1800/" + card_information[number][1];
    document.getElementById("img-fullscreen").style.display = "block";
    current_image_num = number;
};

//Turn off fullscreen image
function Off() {
    document.getElementById("img-fullscreen").style.display = "none";
};

//Next image when in full screen
function Next_Image() {
    if(current_image_num < card_information.length - 1){
        document.getElementById("img-to-display").src = "images/gallery1800x1800/" + card_information[current_image_num + 1][1];
        current_image_num++;
    }
};

//Previous image wgen in full screen mode
function Previous_Image() {
    if(current_image_num > 0){
        document.getElementById("img-to-display").src = "images/gallery1800x1800/" + card_information[current_image_num - 1][1];
        current_image_num--;
    }
};

//Changes display value of the individual description
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

//Automatic random slideshow changes image every 5sec
slideshow_image_container.addEventListener("click", Random_Image);
setInterval(Random_Image, 5000);
var random_index;
var index_stored;
function Random_Image(){
    random_index = Math.floor(Math.random() * card_information.length)
    if(random_index != index_stored){
        slideshow_image_container.src = "images/gallery1800x1800/" + card_information[random_index][1];
        index_stored = random_index;
    }
    else{
        Random_Image();
    }
};

//Toggle background color of the text
slideshow_image_container.addEventListener("mouseenter", Show_Hide_Text);
slideshow_image_container.addEventListener("mouseleave", Show_Hide_Text);
function Show_Hide_Text(){
    var text_id = document.getElementById("random-text");
    text_id.classList.toggle("random-text-toggle");
};
