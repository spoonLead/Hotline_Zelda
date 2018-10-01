
//----ADD NEW SCENE----
myscene = new Scene();


//----ADD OBEJCT TO SCENE----
//WHEN CREATING THE OBJECT
myobject = new Object("scene_name" = myscene, "perspective_mode" = "lup", x = 100, y = 100, width = 100, height = 100, "model_path" = "./img/model.png", "model_width" = 100, "model_height" = 100, "physicality" = true, "layer" = myFirstLayer, "static" = false);
//scene_name - scene which object will be placed
//perspective_mode - origin of coordinates for width and height
//x , y - coord of object on this scene_name
//width, height - physical parametrs for computing collisions
//model_path - path of graphic model_path
//model_width, model_height - width and height for picture of model
//physicality (true | false) - does the object has collisions
//static (true | false) - will the object have a static posiion (true for menu and interface element like a hitpoints of players)

//WHEN OBJECT CREATED
myobject2 = new Object("perspective_mode" = "lup", width = 100, height = 100, "model_path" = "./img/model.png", "model_width" = 100, "model_height" = 100, "physicality" = true, "static" = false)
myscene.addObject(myobject2, "x" = 100, "y" = 100, "layer" = myFirstLayer);
