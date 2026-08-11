function patchIndex(html, base, logo){

const tags = `
<link rel="canonical" href="${base}">
<link rel="icon" type="image/png" href="${logo}">

<meta property="og:url" content="${base}">
<meta property="og:type" content="website">
<meta property="og:title" content="Website Title">
<meta property="og:description" content="Website description">
<meta property="og:image" content="${logo}">
<meta property="og:image:secure_url" content="${logo}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${logo}">
`;

if(html.includes('</head>')){
    return html.replace('</head>', tags + '\n</head>');
}

return tags + '\n' + html;
}
