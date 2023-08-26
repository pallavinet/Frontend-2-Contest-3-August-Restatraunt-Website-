const display=document.getElementById("display");

const obj=[];
// const api=`AIzaSyB_qpNS-rBiHxRKZteLiY_Xp4ZLVJA21r8`
// const search=`search.innerHtml`
// const endpoint=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search}&key=${api}`



window.onload=async function getMenu(){
    const url=`https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json`
    // const url=`endpoint`
    const response = await fetch(url);
    const data = await response.json();
    // video_data.channelThumbnail=data.items[0].snippet.thumbnails.default.url;
    
    displayed(data);
    TakeOrder(data);
}


function displayed(data){
    
    for(var i=0;i<data.length;i++){
        // console.log(data);
    var cdata=
            `<div class="card">
            <div class="food">
                <img src="${data[i].imgSrc}" alt="food" class="imgfood">
                <h4>${data[i].name}</h4>
                <div class="sep">
                    <ul>
                        <li>${data[i].price}</li>
                        <li><input type="checkbox" id="${data[i].id}"></li>
                    </ul>
                </div>
            </div>
        </div>`
        display.innerHTML+=cdata;
    
    
}
}
// getMenu();

async function TakeOrder(data){
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            const order = {
                obj: [
                    data[Math.floor(Math.random() * data.length)].name,
                    data[Math.floor(Math.random() * data.length)].name,
                    data[Math.floor(Math.random() * data.length)].name
                ]
            };
            resolve(order);
        }, 2500);
    });
}







