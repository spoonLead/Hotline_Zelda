
function hasCollisionObjectWithArea(obj, x, y, width, height){
    if(hasCollisionVertObjectWithArea(obj,x, width) & hasCollisionHorizontalObjectWithArea(obj,y, height))
    return true;
    else
    return false;
}

function hasCollisionVertObjectWithArea(obj, x, width){
    if((obj.x <= x + width) & (x <= obj.x + obj.width))
        return true
}

function hasCollisionHorizontalObjectWithArea(obj, y, height){
    if((obj.y <= y + height) & (y <= obj.y + obj.height))
        return true;
}



function hasCollisionComplex(obj1, obj2){
    if(hasCollisionVertical(obj1,obj2) & hasCollisionHorizontal(obj1,obj2))
        return true;
    else
        return false;
}

function hasCollisionVertical(obj1, obj2){
    if((obj1.x <= obj2.x + obj2.width) & (obj2.x <= obj1.x + obj1.width))
        return true;
}

function hasCollisionHorizontal(obj1, obj2){
    if((obj1.y <= obj2.y + obj2.height) & (obj2.y <= obj1.y + obj1.height))
        return true;
}


