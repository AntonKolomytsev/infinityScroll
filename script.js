// Unsplash API
const count =10;
const apiKey ='FZjCZx1Ryj9piY5bNFtmbbMn-WFqYUnMEiedfLx8gCY';
const apiUrl =`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
 // Get photos from Unsplash API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json;
        console.log(data);
    } catch(error){
        console.log('error')
    }
}
// on Load
getPhotos();
