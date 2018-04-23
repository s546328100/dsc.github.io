'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

load_list('md', (err, data) => {
    if (err) throw err;

    let catalogues = JSON.stringify(data);

    fs.readFile('md/catalogue.js', (err, data) => {
        if (err) throw err;
        let reg = /\[((\n\s*)*{[^]*}(\n\s*)*)?]/g;
        data = data.toString('utf8').replace(reg, catalogues);

        fs.writeFile('md/catalogue.js', data, err => {
            if (err) throw err;
            console.log('文章添加完毕！');
        });
    });
});

function load_list(dir, callback) {
    fs.readdir(dir, (err, files) => {
        if (err) throw err;

        files = files.filter(fileName => path.extname(fileName) === '.md');
        if (files.length === 0) return;

        let catalogues = [];

        let iterator = index => {
            if (index == files.length) {
                catalogues.sort(compare('createTime'));

                catalogues.forEach((catalogue, i) => {
                    if (catalogues.length <= 1) return;

                    if (i !== catalogues.length - 1) catalogue.next = catalogues[i + 1].title;
                    if (i !== 0) catalogue.prev = catalogues[i - 1].title;
                });

                callback(null, catalogues);
                return;
            }

            fs.stat(dir + '/' + files[index], (err, stats) => {
                if (err) throw err;

                fs.readFile(dir + '/' + files[index], (err, data) => {
                    if (err) throw err;

                    data = data
                        .toString('utf8')
                        .replace(/\s/g, '')
                        .substr(0, 210);

                    let fileName = files[index].split('.')[0];

                    let md5 = crypto.createHash('md5');
                    md5.update(fileName, 'uft8');
                    let id = md5.digest('hex');

                    catalogues.push({
                        id,
                        title: fileName,
                        createTime: new Date(stats.ctime).getTime(),
                        abstract: data.length > 200 ? data + '...' : data
                    });
                    iterator(index + 1);
                });
            });
        };
        iterator(0);
    });
}

function compare(property) {
    return function(a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value2 - value1;
    };
}
