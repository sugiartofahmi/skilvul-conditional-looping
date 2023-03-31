//Exercise 1
for (let i = 1; i <= 100; i++)
  document.getElementById("exercise1").innerHTML += `<h3>User ke-${i}</h3>`;

//Exercise 2
for (let i = 0; i <= 10; i += 2)
  document.getElementById("exercise2").innerHTML += `<h3>Nilai = ${i}</h3>`;

//Exercise 3
for (let i = 0; i <= 20; i++)
  document.getElementById("exercise3").innerHTML += `<h3>Angka ${i} = ${
    i % 2 == 0 ? "Genap" : "Ganjil"
  }</h3>`;

//Exercise 4
