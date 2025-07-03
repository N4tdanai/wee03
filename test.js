import { getContext, keys} from "./week03-module.js" 

document.addEventListener("DOMContentLoaded", function() {
    // coding here!
    const ctx = getContext(#myCanvas);

    const player = {
        x: 300,
        y: 200,
        size: 50, // width and height of the player
        color: "blue",
    };
    function draw(){
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        
        //update data/input "WASD" keys
        if (keys["a"]){
            player.x -= 5;
        }
        //render shape
        ctx.save();
        ctx.translate(player.x, player.y);
        ctx.fillStyle = player.color;
        ctx.fillRect(20, 20, player.size, player.size);
        ctx.restore();
        


        requestAnimationFrame(draw);
    }
    draw();
});