// let Laptop = {
//     color: "Black",
//     RAM: "2GB",
//     Maker: "Hp",
//     ProcessorSpeed: "1.5GHz",
//     Touchscreen: false
// }

// console.log(Laptop)

// let car = {
//     Model: "Toyota",
//     Year: 2017,
//     Color: "Red",
//     CarNo: 53542,
//     CarType: "Automatic",
//     PlateNumber: "53JFGD298",
//     CreationDate: "20-01-2017",
//     Owner: "Johnbosco",
//     Price: "$20,000,000",
//     WheelType: "4 wheel",
//     numberOftyres: 4,
//     increaseTyreNumber: function() {
//         return ++this.numberOftyres;
//     },
//     reduceTyreNumber: function() {
//         return --this.numberOftyres;
//     }
// };


// console.log(car);

// let multiply = (a, b, c) => {
//     let result = a * b * c;
//     return result;
// }

// let laptop = {
//     Model: "Macbook Pro",
//     Year: 2021,
//     DisplaySize: "15 inches",
//     ProcessorSpeed: 2.3,
//     RAM: 16,
//     Storage: "512GB SSD",
//     GraphicsCard: "AMD Radeon Pro",
//     OperatingSystem: "macOS Monterey",
//     Color: "Space Gray",
//     BatteryLife: "Up to 17 hours",
//     IncreaseRAM: function(){
//         return ++this.RAM;
//     },
//     increaseProcessor: function(){
//         return ++this.ProcessorSpeed;
//     }
// };



// let files = (resource) => {

//     return new Promise ((resolve, reject) => {

//         const request = new XMLHttpRequest();
//         request.addEventListener('readystatechange', () => {
//         if(request.readyState === 4 && request.status === 200){
//             let data = JSON.parse(request.responseText);
//             resolve(data)
//         } else if (request.readyState === 4){
//             reject('error fetching data');
//         }
//     });
//     request.open('GET', resource);
//     request.send();

//     })
// };

// files('file.json').then(data =>{
//     console.log('promise resolved', data)
// }).catch(error => {
//     console.log('rejected', error)
// });

// let xhttp = new XMLHttpRequest();

// xhttp.addEventListener('onreadystatechange', function(){
//     if(this.readyState == 4 && this.status == 200){
//         let data = JSON.parse(this.responseText);
//         console.log(data);
//     }
// })


// xhttp.open('GET', 'filename', true);
// xhttp.send();

