'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// path.resolve(__dirname, '..');
let _folder = process.argv[2];
let _file = process.argv[3];

if (_folder && _folder === '-d') {
    _folder = path.resolve(__dirname);
    _file = path.resolve(__dirname, 'catalogue.js');
    load(rl, () => {
        process.stdout.write('请输入正确的格式 (文章所在文件夹名 要写入的文件名)： \n');
        process.stdout.write('> ');
    });
} else if (!_folder || !_file) {
    process.stdout.write('请输入 -文章所在文件夹名 -要写入的文件名： \n');
    process.stdout.write('-d （默认文件夹md，默认文件catalogue.js）\n');
    process.stdout.write('      or\n');
    process.stdout.write('md catalogue.js\n');
    process.stdout.write('> ');

    rl.on('line', line => {
        let parts = line.split(new RegExp('[ ]+'));
        if (parts.length <= 1) {
            if (parts[0] === '-d') {
                _folder = path.resolve(__dirname);
                _file = path.resolve(__dirname, 'catalogue.js');
                load(rl, () => {
                    process.stdout.write('请输入正确的格式 (文章所在文件夹名 要写入的文件名)： \n');
                    process.stdout.write('> ');
                });
            } else {
                process.stdout.write('请输入正确的格式 (文章所在文件夹名 要写入的文件名)： \n');
                process.stdout.write('> ');
            }
        } else {
            load(rl, () => {
                process.stdout.write('请输入正确的格式 (文章所在文件夹名 要写入的文件名)： \n');
                process.stdout.write('> ');
            });
        }
    })
}

function load(rl, callback) {
    load_list(_folder, (err, data) => {
        if (err) return callback();

        let catalogues = JSON.stringify(data);

        fs.readFile(_file, (err, data) => {
            if (err) return callback();
            let reg = /\[((\n\s*)*{[^]*}(\n\s*)*)?]/g;
            data = data.toString('utf8').replace(reg, catalogues);

            fs.writeFile(_file, data, err => {
                if (err) return callback();
                rl.close();
                console.log('文章添加完毕！');
            });
        });
    });
}

function load_list(dir, callback) {
    fs.readdir(dir, (err, files) => {
        if (err) return callback();

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
                if (err) return callback();

                fs.readFile(dir + '/' + files[index], (err, data) => {
                    if (err) return callback();

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