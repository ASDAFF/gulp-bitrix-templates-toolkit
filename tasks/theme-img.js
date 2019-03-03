const libImg = require("../lib/images");

module.exports = mbx => {
    mbx.gulp.task("theme-img", () => {
        const src = mbx.path.join(mbx.config.srcPath, "images", "**/*.+(jpeg|jpg|png)");
        const dest = mbx.path.join(mbx.config.assetsPath, "images");
        return libImg(mbx, src, dest);
    });
};
