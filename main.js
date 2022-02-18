Webcam.set({
    width:350,height:300,img_format:'png',png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_iamge" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Mj0vUhUbr/model.json',modelLoaded);
function modelLoaded(){
    console.log('modal loaded');
}
function check (){
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
if(error){
    console.error(error);
}else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML=results[0].label;   
}   document.getElementById("result_object_accracy").innerHTML=results[0].label;
}