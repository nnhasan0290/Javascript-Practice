const obj = {
    fname: "nazmul",
    lname: "hasan",
    fullname: function(city, country){
        return (
            `${this.fname} ${this.lname} ${city} ${country}`
        )
    }
}
const person = {
   fname: "hasan",
   lname: "mahadi",
}
console.log(obj.fullname.call(person,"dhaka", "Bangladesh"));