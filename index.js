//Exercise 1
let exercise1 = "";
for (let i = 1; i <= 100; i++) exercise1 += `<li>User ke-${i}</li>`;
document.getElementById("exercise1").innerHTML = exercise1;

//Exercise 2
let exercise2 = "";
for (let i = 0; i <= 10; i += 2) exercise2 += `<h3>Nilai = ${i}</h3>`;
document.getElementById("exercise2").innerHTML = exercise2;

//Exercise 3
let exercise3 = "";
for (let i = 0; i <= 20; i++)
  exercise3 += `<h3>Angka ${i} = ${i % 2 == 0 ? "Genap" : "Ganjil"}</h3>`;
document.getElementById("exercise3").innerHTML = exercise3;

window.confirm("Do you really want to leave?");
//Exercise 4
