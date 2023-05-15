var canvas = new fabric.Canvas('myCanvas');
blockY=1;
blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
   fabric.Image.fromUrl(getImage, function(img)
    block_Image_object = img; {

    block_Image_object.scaleToWidth(block_image_width);
    block_Image_object.scaleToHeigth(block_image_heigth);
    block_Image_object.set({
        top:block_y,
        top:block_x
    });
    canvas.add(block_Image_object);
    )};
   
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

   if(keyPressed == '69') 
   {
    new_image('rr1.png');
    console.log("R");
   }
   if(keyPressed == '86')
   {
       blockX = 200;
       new_image('gr.png');
       console.log("G");
   }
   
   if(keyPressed == '65')
   {
       blockX =350;
       new_image('yr.png');
       console.log("Y");
   }
   if(keyPressed == '82')
   {
       blockX = 600;
       new_image('pr.png');
       console.log("P");
   }
   if(keyPressed == '73')
   {
       blockX = 700;
       new_image('br.png');
       console.log("B");
   }
   
}