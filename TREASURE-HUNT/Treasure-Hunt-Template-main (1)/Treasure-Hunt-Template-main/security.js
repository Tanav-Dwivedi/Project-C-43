class Security{
    constructor(){
        this.input1 = createInput("your answer")
        this.input1.position(100,100)
        this.input1.style("background","white")

        this.button1 = createButton("submit")
        this.button1.position(100,120)
        this.button1.style("background","white")

        this.input2 = createInput("your answer")
        this.input2.position(100,300)
        this.input2.style("background","white")

        this.button2 = createButton("submit")
        this.button2.position(100,320)
        this.button2.style("background","white")

        this.input3 = createInput("your answer")
        this.input3.position(700,200)
        this.input3.style("background","white")

        this.button3 = createButton("submit")
        this.button3.position(700,220)
        this.button3.style("background","white")

        
}
display(){
    this.button1.mousePressed(()=>
    {
        if(system.authenticate(accessCode1,this.input1.value())){
this.button1.hide()
this.input1.hide()
score++
        };
    });

    this.button2.mousePressed(()=>
    {
        if(system.authenticate(accessCode2,this.input2.value())){
this.button2.hide()
this.input2.hide()
score++
        };
    });

    this.button3.mousePressed(()=>
    {
        if(system.authenticate(accessCode3,this.input3.value())){
this.button3.hide()
this.input3.hide()
score++
        };
    });

}
}