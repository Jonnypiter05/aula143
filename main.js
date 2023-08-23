function preload() {
	mario_gameover = loadSound("gameover.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	world_start = loadSound("world_start.wav");
	setSprites();//A função setSprites(), usada para carregar todas as imagens usadas no jogo. Você não precisa se preocupar com essa função, pois ela já foi pré-escrita por Lunik.//
	MarioAnimation();//o MarioAnimation() carregará toda a animação necessária para o jogo AI Mario. Você não precisa se preocupar com essa função, pois ela já foi pré-escrita por Lunik. 4. Depois, há o código para criar a tela//
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(mario);//instializeInSetup() que carregará todo o código necessário para o jogo AI Mario. Você não precisa se preocupar com essa função, pois ela já foi pré-escrita por Lunik//
	
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('gameConsole');//parent() é uma função p5.js usada para colocar a visualização da webcam ou qualquer componente p5.js como tela dentro de uma div HTML//

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);

}

function modelLoaded() {
	console.log('Modelo Carregado!');
  }

  function gotPoses(results)
  {
	if(results.length > 0)
	{
	  console.log(results);
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	}
  }
   
function draw() {//Depois, há a função game(), que iniciará o jogo AI Mario. Você não precisa se preocupar com essa função, pois ela já foi pré-escrita por Lunik.//
	game();
}