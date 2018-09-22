import os

#TODO search all '.js' files in src folder 
outFile = open('main.js', 'w', encoding = 'UTF-8')

dirs = {
    "engine" : './engine',
    "graphics" : './graphics',
    "game" : './game'
}

def toLink(dir, file):
    outCodeString = ''
    if file != 'linker.py' and file!= 'main.js':
        openFile = open(str(dir)+'/'+str(file), mode = 'r',encoding = 'UTF-8')
        outCodeString += openFile.read()+'\n'
        openFile.close()
    outFile.write(outCodeString)

for dir in dirs.values():
    fileTree = os.walk(dir)
    for file in fileTree:
        for srcFiles in file[2]:
            toLink(file[0], srcFiles)
            print(str(file[0])+'/'+ str(srcFiles))
