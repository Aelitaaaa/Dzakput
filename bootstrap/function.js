//tanpa return
function tampilkan(){
    console.log("tuwir");
}
tampilkan();

//dengan return
function munculAngkaLima( ){
    return 5;
}
var tampung = munculAngkaLima();
console.log(tampung);


// parametr
function kalikanDua (angka){
    return angka * 3
}
var muncul= kalikanDua(2);
console.log(muncul);

//parameter lebih dari 1 
function munculkanAngka (angkaPertama, angkaKedua) {
return angkaPertama + angkaKedua
}
console.log(munculkanAngka(9,12));
//conditional
function  defaultAngka(angka=2){
return angka
}
console.log(defaultAngka(11));
console.log(defaultAngka());

//conditional
function conditionalAngka(angkaPertama, angkaKedua){
    var hasil= angkaPertama * angkaKedua

    if (hasil > 10){
        return "hasil lebih besar dari 10"
    } else if (hasil >0  && hasil < 10) {
        return "hasil lebih kecil dari 10 "
    } else if (hasil === 0){
        return "hasil 0"
    }else{
        return "tidak ada nilai parameter"
    }
}
console.log(conditionalAngka(4,5))

function looping (iteration) {
    for (var i = 0; i < iteration; i++) {
}
}

var fungsiperkalian = function (angkapertama, angkaKedua){
    return angkapertama * angkaKedua
}
console.log(fungsiperkalian(2,4))

const filter = (...rest) => {
    return rest.filter(el => el.text !== undefined);
}
console.log(filter(1, {text: "wonderfull"}, "next"));
