const io = (function () {
    function file(fname, rw, textOrCallback) {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {

            console.log('file system open: ' + fs.name);
            fs.root.getFile(fname, { create: true, exclusive: false }, function (fileEntry) {

                console.log("fileEntry is file?" + fileEntry.isFile.toString());
                switch (rw) {
                    case 'r':
                        readFile(fileEntry, textOrCallback); break;
                    case 'w':
                        writeFile(fileEntry, textOrCallback); break;
                }

            }, onErrorCreateFile);

        }, onErrorLoadFs);
    }

    function onErrorCreateFile(fileEntry) {
        console.log("Problem with create/read/write file");
        console.log(JSON.stringify(fileEntry));
    }

    function onErrorLoadFs(fs) {
        console.log("Problem with get file");
        console.log(JSON.stringify(fs));
    }

    function onErrorReadFile(fileEntry) {
        console.log("Problem with read file");
        console.log(JSON.stringify(fileEntry));
    }


    function writeFile(fileEntry, text) {
        // Create a FileWriter object for our FileEntry (log.txt).
        fileEntry.createWriter(function (fileWriter, err) {

            fileWriter.onwriteend = function (ev) {
                console.log("Successful file write...");
                if (!ev.target.truncatedAlready) {
                    ev.target.truncate(ev.target.fileSize);
                    ev.target.truncatedAlready = true;
                }
            };

            fileWriter.onwritestart = function (ev) {
                //fileWriter.truncate(0);
            }

            fileWriter.onerror = function (e) {
                console.log("Failed file write: " + e.toString());
            };

            let dataObj = new Blob([text], { type: 'text/plain' });

            fileWriter.fileSize = dataObj.size;
            fileWriter.truncatedAlready = false;

            fileWriter.write(dataObj);

        });
    }

    function readFile(fileEntry, callback) {

        fileEntry.file(function (file) {
            var reader = new FileReader();

            reader.onloadend = function () {
                console.log("Successful file read: " + this.result);
                if (callback) callback(this.result);
            };

            reader.readAsText(file);

        }, onErrorReadFile);


    }

    return { file };

})();

export default io;