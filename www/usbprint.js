module.exports = {
    print: function(printername, msg, successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "PrinterService", "print", [printername, msg]);
    },
    sendCommand: function(printername, command, successCallback, failureCallback) {
        // convert to ArrayBuffer
        if (typeof command === 'string') {
            command = stringToArrayBuffer(command);
        } else if (command instanceof Array) {
            // assuming array of interger
            command = new Uint8Array(data).buffer;
        } else if (command instanceof Uint8Array) {
            command = command.buffer;
        }
        cordova.exec(successCallback, failureCallback, "PrinterService", "sendCommand", [printername, command]);
    },
    connect: function(printername, successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "PrinterService", "connect", [printername]);
    },
    disconnect: function(printername, successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "PrinterService", "disconnect", [printername]);
    },
    getConnectedPrinters: function(successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "PrinterService", "getConnectedPrinters", []);
    },
    isPaperAvailable: function(printername, successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "PrinterService", "isPaperAvailable", [printername]);
    },
    cutPaper: function(printername, successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "PrinterService", "cutPaper", [printername]);
    },
};

var stringToArrayBuffer = function(str) {
    var ret = new Uint8Array(str.length);
    for (var i = 0; i < str.length; i++) {
        ret[i] = str.charCodeAt(i);
    }
    return ret.buffer;
};