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
    const position = 
    {
        first: 50,
        second: 150,
        third: 250,
        fourth: 350
    }
    const answer = [1, 2, 3, 4]
    var leftP = {x: position.first - 10, y: 130, index: 0}
    var rightP = {x: leftP.x + 100 - 10, y: 130, index: 1}
    
    const setup = (p5, canvasParentRef) =>
    {
        canvas = p5.createCanvas(400, 400).parent(canvasParentRef)

        // Swap button logic
        canvas.mouseClicked(() =>
        {
            if (p5.mouseX < leftP.x + 10 + (rightP.x - leftP.x)/2 + 50 && p5.mouseX > leftP.x + 10 + (rightP.x - leftP.x)/2 - 25 && p5.mouseY < 50 && p5.mouseY > 10)
            {
                var temp;
                temp = items[leftP.index]
                items[leftP.index] = items[rightP.index]
                items[rightP.index] = temp
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
        p5.line(leftP.x + 10, 50, rightP.x + 10, 50); // top line

        p5.fill(items[leftP.index].value === answer[leftP.index] ? 'blue' : 'red') // toggle left picker color
        p5.line(leftP.x + 10, 50, leftP.x + 10, leftP.y) // left line
        p5.rect(leftP.x, leftP.y, 20, 20) // left pick

        p5.fill(p5.mouseIsPressed ? 'red' : 'green')
        p5.line(rightP.x + 10, 50, rightP.x + 10, rightP.y) // right line
        p5.rect(rightP.x, rightP.y, 20, 20) // right pick
        
        // right picker logic
        if (!(p5.mouseX < leftP.x + 10 + (rightP.x - leftP.x)/2 + 50 && p5.mouseX > leftP.x + 10 + (rightP.x - leftP.x)/2 - 25 && p5.mouseY < 50 && p5.mouseY > 10))
        {
            if (items[leftP.index].value !== answer[leftP.index])
            {
                if (p5.mouseIsPressed)
                {
                    rightP.x = p5.mouseX - 10
                    rightP.y = p5.mouseY - 10
                }
                else if (!p5.mouseIsPressed && rightP.x > 300)
                {
                    rightP.x = position.fourth - 10
                    rightP.y = 130
                    rightP.index = 3

                }
                else if (!p5.mouseIsPressed && rightP.x > 200)
                {
                    rightP.x = position.third - 10
                    rightP.y = 130
                    rightP.index = 2
                } 
                else if (!p5.mouseIsPressed && rightP.x > 100)
                {
                    rightP.x = position.second - 10
                    rightP.y = 130
                    rightP.index = 1
                } else if (rightP.x > 1)
                {
                    rightP.x = position.first - 10
                    rightP.y = 130
                }
            }
            else
            {
                if (leftP.x + 10 === position.first)
                {
                    leftP.x = position.second - 10
                    leftP.index = 1
                    rightP.x = leftP.x + 100
                }
                if (leftP.x + 10 === position.second)
                {
                    setTimeout(() => {
                        leftP.x = position.third - 10
                        leftP.index = 2
                        rightP.x = leftP.x + 100
                    }, 1500)
                }
            }
        }
        
        // Swap button
        p5.fill(0)
        p5.rect(leftP.x + 10 + (rightP.x - leftP.x)/2 -25, 10, 50, 40)
        p5.textSize(20)
        p5.fill(255)
        p5.text("Swap", leftP.x + 10 + (rightP.x - leftP.x)/2 -25, 35)

        p5.strokeWeight(1);
    }
    return (
        <>
        <h1 style={{color: "white"}}>Insertion Sort</h1>
        <Sketch setup={setup} draw={draw} />
        </>
    )
}
export default InsertionSort