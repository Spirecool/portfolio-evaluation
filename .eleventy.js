/* Fichier de configuration de Eleventy */

module.exports = function(eleventyConfig) {
    // Répertoires ajoutés
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