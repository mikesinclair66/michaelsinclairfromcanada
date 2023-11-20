function parallaxTest(){
    let idStore = [];
    for(let p of document.getElementsByClassName("parallax")){
        console.log("parallax: " + p.id);
        for(let id of idStore){
            if(id == p.id)
                throw "All parallaxes must contain a unique id.";
        }
        idStore.push(p.id);
    }

    return true;
}

export default parallaxTest;