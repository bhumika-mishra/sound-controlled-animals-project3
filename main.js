var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;
var Background_noise = 0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kMQxBzUEU/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("detected").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";

        document.getElementById("animal_voices").innerHTML = "Detected Voice is of - "+results[0].label;
        document.getElementById("animal_voices").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";

        img = document.getElementById("animal_images");

        if(results[0].label == "Barking"){
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/bark.gif";
            dog = dog + 1;
            document.getElementById("detected").innerHTML = "detected Dog - "+dog;
        }
       else if(results[0].label == "Meowing"){
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/meow.gif";
            cat = cat + 1;
            document.getElementById("detected").innerHTML = "detected Cat - "+cat;
        }
        else if(results[0].label == "Roar"){
            img.src = "https://tenor.com/en-GB/view/lion-african-lion-gif-23406367";
            lion = lion + 1;
            document.getElementById("detected").innerHTML = "detected lion - "+lion;
        }
        else if(results[0].label == "Mooing"){
            img.src = "https://tenor.com/en-GB/view/wow-cow-cow-moo-nikaswow-gif-24076227";
            cow = cow + 1;
            document.getElementById("detected").innerHTML = "detected cow - "+cow;
        }
        else{
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
            Background_noise = Background_noise + 1;
            document.getElementById("detected").innerHTML = "detected Background_noise - "+Background_noise;
        }
    }
}