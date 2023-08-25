function startClassification()
{
navigator.mediaDevices.getUsermedia({audio:true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Dfmugdyg8/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
if(error) {
    console.error(error);
} else {
    console.log(results);
    random_number_r = Math.floor(Math.random() *255) + 1;
    random_number_g = Math.floor(Math.random() *255) + 1;
    random_number_b = Math.floor(Math.random() *255) + 1;

    document.getElementById("result_label").innerHTMl='I can hear -  '+
    result[0].label;

    document.getElementById("result_confidence").innerHTMl='Accuracy -  '+
   ( result[0].confidence *100).toFixed(2)+"%";
    
   document.getElementById("result_label").style.color="rgb("
   +random_number_r+","+random_number_g+","+random_number_b+")";

   document.getElementById("result_confidence").style.color="rgb("
   +random_number_r+","+random_number_g+","+random_number_b+")";

img= document.getElementById('alien1');
img1= document.getElementById('alien2');
img2= document.getElementById('alien3');
img3= document.getElementById('alien4');

if (results[0].label=="") {
img.src ='dogg.gif';
img1.src ='cat2.avif';
img2.src ='lion.avif';
img3.src ='bird.webp';
} else if (results[0].label=="rattle") {
img.src ='dog2.webp';
img1.src ='cat.gif';
img2.src ='lion.avif';
img3.src ='bid.webp';
} else if (results[0].label=="snaps") {
    img.src ='dog2.webp';
    img1.src ='cat2.avif';
    img2.src ='lion.gif';
    img3.src ='bird.webp';
}else{
    img.src ='dog2.webp';
    img1.src ='cat.avif';
    img2.src ='lion.avif';
    img3.src ='bird.gif';
}

}
}