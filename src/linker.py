import os

#output file
outFile = open('main.js', 'w', encoding = 'UTF-8')

#dictionary of start directories of link files
dirs = {
    "engine" : './engine',
    "graphics" : './graphics',
    "game" : './game'
}

#LINKER METHOD
def toLink(dir, file):
    outCodeString = ''      #output big code string which will be placed into ouput file
    if file != 'linker.py' and file!= 'main.js':
        openFile = open(str(dir)+'/'+str(file), mode = 'r',encoding = 'UTF-8')      #open file for link
        outCodeString += openFile.read()+'\n'                                       #add to output code string new code from linked file
        openFile.close()                                                            #close file for link
    outFile.write(outCodeString)


for dir in dirs.values():             #iteration for all directories in dirs{}
    fileTree = os.walk(dir)           #make file tree for directories inside main directories (dirs{})
    for file in fileTree:             #iteration for all destination directories in tree
        for srcFile in file[2]:                         #iteration for all destination files
            fileExtension = srcFile.split('.')[1]       #split file name to name and extension for '.'
            #link files with only "js" destination
            if(fileExtension == "js"):
                toLink(file[0], srcFile)
                print(str(file[0])+'/'+ str(srcFile))

outFile.close()         #close output file
