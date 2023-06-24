function headingFactory(color){
    const closure = function(text){
        let color1 = this.color
        let text1 = this.text
        let output = "for me the color is "+color1+"and the text is "+text1
        return output
    }.bind(this)
    return closure
}

const HF1 = headingFactory("red")

const sangayHF = HF1("this is sangays tenxt")

console.log(sangayHF);