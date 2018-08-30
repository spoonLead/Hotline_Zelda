import os


dirs = {
    "engine" : './engine',
    "graphics" : './graphics',
    "game" : './game'
}

outFile = open('main.js', 'w', encoding = 'UTF-8')
outCodeString = ''

for dir in dirs.values():
    filesList = os.listdir(dir)
    for file in filesList:
        if file != 'linker.py' and file!= 'main.js':
            openFile = open(str(dir)+'/'+str(file), mode = 'r',encoding = 'UTF-8')
            outCodeString += openFile.read()+'\n'
            openFile.close()



outFile.write(outCodeString)
outFile.close()
