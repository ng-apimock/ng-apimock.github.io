module.exports = {
    docs: [
        {
            type: 'category',
            label: 'Ng-apimock',
            items: [
                'installation',
                'mocks',
                'variables',
                'presets',
                'docker'
            ]
        },
        {
            type: 'category',
            label: 'Plugins',
            items: [
                'plugins/plugin-introduction',
                'plugins/dev-interface',
                'plugins/protractor-plugin',
                'plugins/wdio-ng-apimock-service',
                'plugins/cypress-plugin',
                'plugins/custom-plugin'
            ]
        },
        {
            type: 'category',
            label: 'API',
            items: [
                'api/select-scenario',
                'api/delay-response',
                'api/echo-request',
                'api/set-variable',
                'api/set-variables',
                'api/delete-variable',
                'api/select-preset',
                'api/reset-mocks-to-default',
                'api/set-mocks-to-passThrough',
                'api/record-requests',
                'api/get-recordings'
            ]
        }

    ]
};
