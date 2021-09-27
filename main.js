
function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
   classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_8r5LsciR/model.json',modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }else{              
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
    
    document.getElementById("result_lable").innerHTML = 'i can hear - '+results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy -'+(results[0].confidence*100).toFixed(2)+" % ";
    document.getElementById("result_lable").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    
    img = document.getElementById('cat');
    img1 = document.getElementById('dogi');
    img2 = document.getElementById('lion');
    
    if (results[0].label == "Meow") 
    {
        img.src = 'cat.gif';
        img1.src = 'dogi.jpg';
        img2.src = 'lion.jpeg';
    } else if (results[0].label == "Bark") {
        img.src = 'cat.jpg';
        img1.src = 'dog.gif';
        img2.src = 'lion.jpeg';
    
    } else {
        img.src = 'cat.jpg';
        img1.src = 'dogi.jpg';
        img2.src = 'lion.gif';
    
        
    }
    }
    }
    