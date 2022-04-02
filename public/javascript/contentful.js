

let client = contentful.createClient({
    space: 'dlkqm8zwvd7n',
    accessToken : '2JNKbLWI0wLkSFTWFKTQJfRpEHuGeKCgCd86G-cdXc4',
})

client.getEntries({
    content_type: 'tarifs',
})
.then(function (entries) {
        entries.items.forEach(function (entry) {
        let nom = entry.fields.nom
        let prix = entry.fields.prix
        let description = documentToHtmlString(entry.fields.description);

        jQuery('#main_content').append('<div class="main_block"><br><h2 class="prestation-name">'+nom+'</h2><br><p class="prestation-price">'+prix+' euros</p><br><p class="prestation-description">'+description+'</p></div>')
    });
});