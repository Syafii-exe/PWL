module.exports = function(eleventyConfig) {
   eleventyConfig.addPassthroughCopy('asset')
   return {
     passthroughFileCopy: true
   }
 }
