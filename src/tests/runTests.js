import parallaxTest from "./parallaxTest.js";

function runTests(){
    let tests = [];
    tests.push(() => parallaxTest());

    for(let test of tests){
        try{
            test();
        } catch(err) {
            window.alert(err);
        }
    }
}

export default runTests;