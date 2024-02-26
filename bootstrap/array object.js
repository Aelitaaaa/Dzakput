var car2 = {
    brand: "Lamborghini",
    "Sports Car": true,
    price: 100000000
  };
  
  // Menggunakan tanda kurung siku untuk memberi nama key yang lebih dari satu kata
  car2["horse power"] = 730;
  
  
  console.log(car2["horse power"]);
  
  
  console.log(car2.brand);
  console.log(car2.price);

  console.log(car2["price"]);
  
// array of objects
  var mobil = [
    { merk: "BMW", warna: "merah", tipe: "sedan" },
    { merk: "Toyota", warna: "hitam", tipe: "box" },
    { merk: "Audi", warna: "biru", tipe: "sedan" }
  ];
  
 
  console.log(mobil[0].merk); // "BMW"
  console.log(mobil[1].warna); // "hitam"
  console.log(mobil[2].tipe); // "sedan"
  