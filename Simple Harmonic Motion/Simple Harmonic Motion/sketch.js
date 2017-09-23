let angleY = 0;
let ballX = 20;
let ballY = 20;
let positionX = [0, 20,60,100,140,180,220,260,300,340,380];
let speed = [0, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19];

function setup() {
    createCanvas(400, 200);
}

function draw() {
    background(0);
    

    
    let v = sin(angleY);
    let positionY = map(v, -1, 1, ballY/2, height - ballY/2);
    
    
    for (let i = 1; i < 11; i++){   
        angleY += 0.03;
        let v = sin(angleY * speed[i]);
        let positionY = map(v, -1, 1, ballY/2, height - ballY/2);
        
        if (v < 0.2 && v > - 0.2 ){
            fill(255, 0, 0);
        } else {
            fill(0);
        }

        stroke(0, 0, 255);
        strokeWeight(2);
        line(positionX[i], 0, positionX[i], positionY - ballY/2);
        stroke(0, 255, 0);
        line(positionX[i], height, positionX[i], positionY + ballY/2);
        stroke(255, 0, 0,);
        ellipse(positionX[i], positionY, ballX, ballY);
        
        
    }
        
}

