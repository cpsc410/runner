# runner
simple way to run the entire viz chain together


### You can run this in terminal:
```
npm install --global transgit     # You may notice build errors, but it should still work
transgit                          # Run this in your repo directory
```

### Additionally to enhance analysis and rendering, transgit can take up to four command line arguments
```
 Usage
    $ ./transgit

	Options
	  --languageSpec, -l  Choose language to view
	  --commitCont, -c Choose the number of top committers
	  --netEffect, -n Choose from: "added", "deleted" or "sum"
	  --fileCont, -f Choose the number of top contributors per file
```
      
An example of its usage would look as follows:
      
```
./transgit --l java --c 13 --n sum --f 7
./transgit --l all --c 5 --n added --f 3
```

With no specified arguments the call will default to:
```
./transgit all 10 added 10
```
