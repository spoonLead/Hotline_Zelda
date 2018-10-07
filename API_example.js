

//----SCENEMANAGER----
//ADD NEW SCENE
myscene = new Scene(cameraSet = "PTP");
//  Read "Camera" part for many information
//  cameraSet (PTP | PTM):
//      PTP - (peer to peer) one camera for one scene
//      PTM - (peer to many) one camera for all scenes


//ADD OBEJCT TO SCENE
// 1) when creating the object
myobject = new Object("scene_name" = myscene, perspective_mode = "lup", x = 100, y = 100, width = 100, height = 100, model_path = "./img/model.png", model_width = 100, model_height = 100, physicality = true, layer = "myFirstLayer", "static" = false, transfer = coord);
//scene_name - scene which object will be placed
//perspective_mode - origin of coordinates for width and height
//x , y - coord of object on this scene_name
//width, height - physical parametrs for computing collisions
//model_path - path of graphic model_path
//model_width, model_height - width and height for picture of model
//physicality (true | false) - does the object has collisions
//    Default: true
//static (true | false) - will the object have a static posiion (true for menu and interface element like a hitpoints of players)
//    Default: false
//transfer ("full" | "coord") - if you want add one object into two scene and for this object parallel work in two scene (for complex two and many scenes systems)  ps mb scenes layer
//    Default: coord

// 2) when object created
myobject2 = new Object(perspective_mode = "lup", width = 100, height = 100, model_path = "./img/model.png", model_width = 100, model_height = 100, physicality = true, "static" = false)
myscene.addObject(myobject2, "x" = 100, "y" = 100, "layer" = myFirstLayer, transfer = "full")


//DELETE OBJECT FROM SCENE
myscene.deleteObject(object = myobject2)
//object - object who will be deleted

//SET SOME SCENE PARAMETRS
myscene.someParam = someValue

myscene.set(someParam, someValue)   //more dificulty way


//----CAMERA----
//TODO 1 camera for 1 scene; 1 camera for all scene
//DIFINITION WITH ADDING TO SCENE
mycamera = new Camera(x = 100, y = 100, speed = 3, safetyMode = false, scene_name = "myscene")
//x , y - coordinates of camera on this scene_name                Default: center of canvas
//speed - speed of camera in 'freeWalk' mode                      Default: 1
//safetyMode - camera work with check for fields presence         Default: true
//scene_name - scene which camera will be placed                  Default: "mainScene"

//ADDING TO SCENE WHEN CAMERA CREATED
mycamera2 = new Camera(x = 100, y = 100, speed = 3, safetyMode = false)
myscene.addCamera(mycamera2)

//REMOVE CAMERA FROM SCENE
myscene.removeCamera(mycamera2)

//SET CAMERA MODE
myscene.mycamera.setMode(param, param, ...)

//MODES OF CAMERA
//FOCUS_ON MODE
myscene.mycamera.setMode(mode = "FOCUS_ON", obj, luftRadius = 0, acceleration = 0)
//obj - object who will be focused CAMERA
//luftRadius - radius around the object, passing which camera will start to move
//acceleration - how fast camera will pick up speed
//FREE_WALK MODE
myscene.mycamera.setMode(mode = "FREE_WALK", obj, speed = ?, acceleration = 0)
//obj - object who will be focused CAMERA
//speed - how much px camera move for one loop (1/60) //TODO ?
//acceleration - how fast camera will pick up speed
myscene.mycamera.setMode(mode = "TO_COORD")   //TODO name of mode
//METHOD OF THIS MODE
myscene.mycamera.modeToCoord(x, y);
//x , y - coordinates (px) on scene
