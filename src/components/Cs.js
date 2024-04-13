import '../styles/cs.css'
import { useRef, useEffect } from 'react'

// Adjust by pixel density
const getPixelRatio = context => {
    var backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;
    
    return (window.devicePixelRatio || 1) / backingStore;
};

// Variables
var x = 350
var y = 50
var oneX = 350
var threeX = 50

const draw = (ctx) =>
{
    // Button
    ctx.fillStyle = '#eeaa00';
    ctx.fillRect(x, y, 100, 50);
    ctx.fillStyle = '#001122';
    ctx.textAlign = 'center';
    ctx.font = '25px arial';
    ctx.fillText('Swap', 400, 85, 200);

    ctx.fillStyle = 'rgb(200 0 0)'
    ctx.fillRect(threeX, 150, 100, 100)
    ctx.fillStyle = 'rgb(255, 255, 255)'
    ctx.font = "2em Arial"
    ctx.fillText("3", threeX + 40, 210)

    ctx.fillStyle = "rgb(0 0 200)"
    ctx.fillRect(200, 150, 100, 100)
    ctx.fillStyle = 'rgb(255, 255, 255)'
    ctx.font = "2em Arial"
    ctx.fillText("2", 240, 210)

    ctx.fillStyle = 'rgb(200 0 0)'
    ctx.fillRect(oneX, 150, 100, 100)
    ctx.fillStyle = 'rgb(255, 255, 255)'
    ctx.font = "2em Arial"
    ctx.fillText("1", oneX + 40, 210)
}


const Cs = () =>
{
    let ref = useRef()
    useEffect(() =>
    {
        
        let canvas = ref.current;
        let ctx = canvas.getContext("2d")

        // Adjust by pixel density
        let ratio = getPixelRatio(ctx);
        let width = getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);
        let height = getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        
        let requestId

        const render = () =>
        {
            draw(ctx)
            requestId = window.requestAnimationFrame(render)
        }

        render()

        return () =>
        {
            window.cancelAnimationFrame(requestId)
        }
        
    }, [])
    return (
        <main className='cs-screen'>
            <canvas id='insertion' ref={ref}/>
        </main>
    )
}
export default Cs