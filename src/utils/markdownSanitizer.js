
const marked = require("marked");
const sanitizeHtmlLibrary = require("sanitize-html");
const TurndownService = require('turndown')

function sanitizeMarkdownContent(markdownContent){

    // 1) convert markdown to html
    const convertedHtml = marked.parse(markdownContent);

    // 2) sanitize html
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
        allowedTags : sanitizeHtmlLibrary.defaults.allowedTags 
    });

    //console.log(sanitizedHtml);

    // 3) sanitize markdown - convert sanitize html back to markdown
    const turndownService = new TurndownService();
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

    //console.log(sanitizedMarkdown);

    return sanitizedMarkdown ;
}

module.exports = sanitizeMarkdownContent ;