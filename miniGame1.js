function BlockMove(event) {
  // Tell Safari not to move the window.
      event.preventDefault();
  }

  const SCALE = 2.5;
  const WIDTH = 16;
  const HEIGHT = 18;
  const SCALED_WIDTH = SCALE * WIDTH;
  const SCALED_HEIGHT = SCALE * HEIGHT;
  const CYCLE_LOOP = [0, 1, 0, 2];
  const FACING_DOWN = 0;
  const FACING_UP = 1;
  const FACING_LEFT = 2;
  const FACING_RIGHT = 3;
  const FRAME_LIMIT = 12;
  const MOVEMENT_SPEED = 5;

  var GameNr = 1;

  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let keyPresses = {};
  let currentDirection = FACING_DOWN;
  let currentLoopIndex = 0;
  let frameCount = 0;
  let positionX = 0;
  let positionY = 0;
  let img = new Image();
  let img2 = new Image();

  window.addEventListener('keydown', keyDownListener);
  function keyDownListener(event) {
      keyPresses[event.key] = true;
  }

  window.addEventListener('keyup', keyUpListener);
  function keyUpListener(event) {
      keyPresses[event.key] = false;
  }

  function loadImage() {
      img.src = "img/sprite_sheet/MiniGame1/Green-Cap-Character-16x18.png";
      img.onload = function() {
          window.requestAnimationFrame(gameLoop);
      };
  }

  function loadImage2() {
      img2.src = "img/sprite_sheet/MiniGame1/Red-Cap-Character-16x18.png";
      img2.onload = function() {
          window.requestAnimationFrame(gameLoop);
      };
  }

  function openMiniGame2(){
    var M3 = document.getElementById("M3");
    var M4 = document.getElementById("M4");
    M3.style.display = "initial";
    M4.style.display = "initial";
}

  function drawFrame(frameX, frameY, canvasX, canvasY) {
  let positionBX  = SCALED_WIDTH+220;
  let positionBY  = SCALED_HEIGHT+59;
  if(canvasX == positionBX-5 && canvasY ==  positionBY-4){
      // Bei Kontakt mach was
      console.log("canvasaktuell: "+(canvasX+1));
      openMiniGame2();
  }
  ctx.drawImage(img, frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
                  canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);

  ctx.drawImage(img2, 0, 0, 16, 18, positionBX, positionBY, 16 * SCALE, 18*SCALE);

  }

  loadImage();
  loadImage2();

  function moveCharacter(deltaX, deltaY, direction) {
      if (positionX + deltaX > 0 && positionX + SCALED_WIDTH + deltaX < canvas.width) {
          positionX += deltaX;
      }
      if (positionY + deltaY > 0 && positionY + SCALED_HEIGHT + deltaY < canvas.height) {
          positionY += deltaY;
      }
      currentDirection = direction;
  }

  function activateMiniGame(Nr) {
      reset();
      // Tell Safari not to move the window.
       GameNr = Nr;
  }

  function reset(){
      currentDirection = FACING_DOWN;
      currentLoopIndex = 0;
      frameCount = 0;
      positionX = 0;
      positionY = 0;
  }

  function moveup() {
      moveCharacter(0, -MOVEMENT_SPEED, FACING_UP);
      hasMoved = true;
  }

  function movedown() {
      moveCharacter(0, MOVEMENT_SPEED, FACING_DOWN);
      hasMoved = true;
  }

  function moveleft() {
      moveCharacter(-MOVEMENT_SPEED, 0, FACING_LEFT);
      hasMoved = true;
  }

  function moveright() {
      moveCharacter(MOVEMENT_SPEED, 0, FACING_RIGHT);
      hasMoved = true;
  }

  function gameLoop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let hasMoved = false;

          if (keyPresses.w) {
              moveCharacter(0, -MOVEMENT_SPEED, FACING_UP);
              hasMoved = true;
          } else if (keyPresses.s) {
              moveCharacter(0, MOVEMENT_SPEED, FACING_DOWN);
              hasMoved = true;
          }

          if (keyPresses.a) {
              moveCharacter(-MOVEMENT_SPEED, 0, FACING_LEFT);
              hasMoved = true;
          } else if (keyPresses.d) {
              moveCharacter(MOVEMENT_SPEED, 0, FACING_RIGHT);
              hasMoved = true;
          }

          if (hasMoved) {
              frameCount++;
              if (frameCount >= FRAME_LIMIT) {
              frameCount = 0;
              currentLoopIndex++;
              if (currentLoopIndex >= CYCLE_LOOP.length) {
                  currentLoopIndex = 0;
              }
              }
          }

          if (!hasMoved) {
              currentLoopIndex = 0;
          }

          drawFrame(CYCLE_LOOP[currentLoopIndex], currentDirection, positionX, positionY);
              window.requestAnimationFrame(gameLoop);
          
  }

