/* Fichier de configuration */

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/images");
    eleventyConfig.addPassthroughCopy("./src/_includes");
    eleventyConfig.addPassthroughCopy("./src/javascript");
    eleventyConfig.addPassthroughCopy("./src/css");
    return {
     
        dir: {
            input : "src",
            output : "public"
        }
    }
}

