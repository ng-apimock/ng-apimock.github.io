const githubHost = 'https://github.com/';
const githubRawHost = 'https://raw.githubusercontent.com/';

(async () => {
    const core = require('./core.json');
    const plugins = require('./plugins.json');
    const fs = require('fs-extra');
    const path = require('path');
    const request = require('request');

    const downloadDoc = (githubUrl, branchName, filePath, fileName) => new Promise((resolve, reject) => {
        const url = `${githubUrl}/${branchName}/${filePath}/${fileName}`.replace(githubHost, githubRawHost);

        console.log(`Downloading: ${url}`);
        request.get(url, (err, httpResponse, body) => {
            if (err || httpResponse.statusCode !== 200 || !body) {
                return reject({
                    err,
                    statusCode: httpResponse.statusCode,
                    body
                });
            }
            resolve(body);
        });
    });

    const docs = [
        ...core.docs,
        ...plugins.docs
    ];

    for (doc of docs) {
        const content = [
            '---',
            `id: ${doc.metadata.id}`,
            `title: ${doc.metadata.title}`,
            `sidebar_label: ${doc.metadata.sidebar_label}`,
            `description: ${doc.metadata.description}`,
            `custom_edit_url: ${doc.metadata.custom_edit_url}`,
            'keywords:',
            ...doc.metadata.keywords.map((keyword) => ` - ${keyword}`),
            '---',
            await downloadDoc(doc.githubUrl, doc.branchName, doc.path, doc.fileName)
        ].join('\n');
        const destinationDirectory = path.join(__dirname, '..', '..', `docs/${doc.group ? '/' + doc.group : ''}`);
        fs.ensureDirSync(destinationDirectory);
        fs.writeFileSync(path.join(destinationDirectory, `${doc.fileName}`), content,
            { encoding: 'utf-8' });
    }
})();
