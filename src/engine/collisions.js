function collision(x, y, x1, y1, obj){

}

function hasCollisionVertical(obj1, obj2){
    if((obj1.x <= obj2.x + obj2.width) & (obj2.x <= obj1.x + obj1.width))
        return true;
}

function hasCollisionHorizontal(obj1, obj2){
    if((obj1.y <= obj2.y + obj2.height) & (obj2.y <= obj1.y + obj1.height))
        return true;
}

function hasCollisionComplex(obj1, obj2){
    if(hasCollisionVertical(obj1,obj2) & hasCollisionHorizontal(obj1,obj2))
        return true;
    else
        return false;
}
