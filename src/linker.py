import os

dirs = os.listdir('./')
outFile = open('main.js', 'w', encoding = 'UTF-8')
outCodeString = ''

for file in dirs:
    if file != 'linker.py' and file!= 'main.js':
        openFile = open(file, mode = 'r',encoding = 'UTF-8')
        outCodeString += openFile.read()+'\n'
        openFile.close()

outFile.write(outCodeString)
outFile.close()
