// const square = function(x){
//     return x * x;
// };
// const square = (x) => {
//     return x * x;
// };
// const square = x => x * x;
// console.log(square(9));
// const event = {
//     name: "birthday party",
//     printGustList: function(){
//         console.log(this.name);
//     }
// }
const event = {
    name: "birthday party",
    guestList: ['Andrew','Jen','Mike'],
    printGuestList() {
        console.log(this.name);
        //let a = this.name;
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        });
    }
}
event.printGuestList();