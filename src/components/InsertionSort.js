import Sketch from "react-p5"

const InsertionSort = () =>
{
    let canvas;
    var items = 
    [
        {value: 4, color: "#FDA403"}, 
        {value: 2, color: "#E8751A"},
        {value: 1, color: "#898121"},
        {value: 3, color: "#E5C287"}
    ]
    const setup = (p5, canvasParentRef) =>
    {
        canvas = p5.createCanvas(400, 400).parent(canvasParentRef)
        // Swap button logic
        canvas.mouseClicked(() =>
        {
            if (p5.mouseX < 125 && p5.mouseX > 75 && p5.mouseY < 50 && p5.mouseY > 10)
            {   
                let temp;
                temp = items[0]
                items[0] = items[1]
                items[1] = temp
            }
            else
            {
                console.log("Clicked outside the button")
            }
        })
    }
    const draw = (p5) =>
    {
        var x = 1;
        p5.textSize(70);
        p5.background(256);

        p5.fill(items[0].color);
        p5.rect(x, 150, 100, 100, 10);
        p5.fill(0);
        p5.text(items[0].value, x + 25, 225);

        p5.fill(items[1].color);
        p5.rect(x*100, 150, 100, 100, 10);
        p5.fill(0);
        p5.text(items[1].value, x*100 + 25, 225);

        p5.fill(items[2].color);
        p5.rect(x*200, 150, 100, 100, 10);
        p5.fill(0);
        p5.text(items[2].value, x*200 + 25, 225);

        p5.fill(items[3].color);
        p5.rect(x*300, 150, 100, 100, 10);
        p5.fill(0);
        p5.text(items[3].value, x*300 + 25, 225);
        
        // Pick and swap
        p5.strokeWeight(5);
        p5.line(50, 50, 150, 50); // top line

        p5.line(50, 50, 50, 150) // left line
        p5.rect(40, 130, 20, 20) // left pick

        p5.line(150, 50, 150, 150) // right line
        p5.rect(140, 130, 20, 20) // right pick
        
        // Swap button
        p5.rect(75, 10, 50, 40)
        p5.textSize(20)
        p5.fill(255)
        p5.text("Swap", 75, 35)

        p5.strokeWeight(1);
    }
    return <Sketch setup={setup} draw={draw} />
}
export default InsertionSort