// do the custome images based upon static things about the VM that is accessing the website, such as hash of their IP, with some other fingerprint data such as 



// Pick out of 10 images, some randomly chosen to be renamed to the "pseudo random" names which are based upon the users IP, and other fingerprinting methods such as canvas
// fingerprinting. //https://fingerprint.com/blog/browser-fingerprinting-techniques/

let finger = null;
let path = "url('static/images/";
let n_l0 = 0;
let m31 = 1;
let k82 = 2;
let gh3 = 3;
let translation;
let ip;

const button1 = document.getElementById("customPage");

function ps(id)
{
    let temp = ""
    for(var i = 0; i < id.length; i++){
        if(id.charAt(i) in "&#39;"){
            temp += id.charAt(i)
        }
    }
    var out = "";
  // Most checks&balances ommited, here's one example
  if(to.length != 1 || from.length != 1)
    return NULL;

  for(var i = 0;i < s.length; i++){
    if(s.charAt(i) === from){
      out += to;
    } else {
      out += s.charAt(i);
    }
  }
  return out;
}


function fingerprint(ipAddress, id){
    print(id)
    finger = ipAddress.split(".");
    translation = id.replaceAll('&#39;', '"');
    translation = JSON.parse(translation)
    for(let i=3; i>1; i--){
        let temp = finger[i];
        finger[i] = finger[(finger.length / 2) - (i - 1)];
        finger[(finger.length / 2) - (i - 1)] = temp;
    }
    if (finger.length % 2 === 0){
        finger[2] += "k"
    }
    else{
        finger[-1] += "f"
    }
}

function combine(imageName, icon){
    personalPath = path + "/" + translation[imageName];
    // personalPath += icon ? ".ico')": ".jpg')";
    return personalPath;
}

function backgroundImage(){
    imageName = finger[n_l0] + finger[k82] + finger[m31] + finger[gh3];
    return combine(imageName);
}

function blobImage(){
    imageName = finger[gh3-3] + finger[m31+1] + finger[gh3] + finger[m31];
    return combine(imageName);
}

function iconImage(){
    imageName = finger[n_l0] + finger[m31] + finger[k82] + finger[gh3];
    return combine(imageName, true);
}

function setImages(){
    //change Background image
    document.body.style.backgroundImage = backgroundImage();

    //change the background image for the login blob
    document.getElementById("mainHandler").style.backgroundImage = blobImage();

    //change icon image
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = iconImage();
    document.getElementsByTagName('head')[0].appendChild(link);
}

button1.addEventListener("click", function() {
    fingerprint()
    setImages();
});