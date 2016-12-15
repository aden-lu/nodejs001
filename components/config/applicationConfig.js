module.exports = function () {
    global.moduleFiles = function (module, basePath, files) {
        mFiles[module] = {};
        for (var key in files) {
            mFiles[module][key] == basePath + "/" + files[key];
        }
    }
    global.moduleRoute = function (params) {
        params.auth ? app.use(params.path, baseAuth, params.route) : app.use(params.path, params.route);
    }
    global.moduleConfig = function (config) {
        if (!global.applicationConfig) {

        }
    }
}