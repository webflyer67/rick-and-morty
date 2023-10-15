// apollo.config.js 
// eslint-disable-next-line no-undef
module.exports = {
    client: {
        service: {
            name: 'rick-and-morty',
            // URL to the GraphQL API
            url: 'https://rickandmortyapi.com/graphql',
        },
        // Files processed by the extension
        includes: [
            'src/**/*.vue',
            'src/**/*.js',
            'src/**/*.ts',
        ],
    },
}