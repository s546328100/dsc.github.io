'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const util = require('util');

const readline = require('readline');

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const loadMd = util.promisify(load_md);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let _folder = process.argv[2];
let _file = process.argv[3];

if (!_folder && !_file) {
    process.stdout.write('请输入 -文章所在文件夹名 -要写入的文件名： \n');
    process.stdout.write('-d （当前文件夹，默认文件catalogue.js）\n');
    process.stdout.write('      or\n');
    process.stdout.write('./ catalogue.js\n');
    process.stdout.write('> ');
} else {
    load(_folder, _file)
        .then(data => {
            console.log(data);
            rl.close();
        })
        .catch(err => {
            err.msg && process.stdout.write('error：' + err.msg + '\n');
            process.stdout.write('文件夹：' + err.folder + '\n');
            process.stdout.write('文件：' + err.file + '\n');
            process.stdout.write('请输入正确的路径名： \n');
            process.stdout.write('> ');
        });
}

rl.on('line', line => {
    let parts = line.split(new RegExp('[ ]+'));
    if (parts.length <= 1) {
        if (parts[0] === '-d') {
            load(parts[0], '')
                .then(data => {
                    console.log(data);
                    rl.close();
                })
                .catch(err => {
                    err.msg && process.stdout.write('error：' + err.msg + '\n');
                    process.stdout.write('文件夹：' + err.folder + '\n');
                    process.stdout.write('文件：' + err.file + '\n');
                    process.stdout.write('请输入正确的路径名： \n');
                    process.stdout.write('> ');
                });
        } else {
            process.stdout.write('请输入正确的格式 (文章所在文件夹名 要写入的文件名)： \n');
            process.stdout.write('> ');
        }
    } else {
        load(parts[0], parts[1])
            .then(data => {
                console.log(data);
                rl.close();
            })
            .catch(err => {
                err.msg && process.stdout.write('error：' + err.msg + '\n');
                process.stdout.write('文件夹：' + err.folder + '\n');
                process.stdout.write('文件：' + err.file + '\n');
                process.stdout.write('请输入正确的路径名： \n');
                process.stdout.write('> ');
            });
    }
});

function load(_folder, _file) {
    if (_folder === '-d' && !_file) {
        _folder = './';
        _file = 'catalogue.js';
    }
    _folder = path.resolve(__dirname, _folder);
    _file = path.resolve(__dirname, _file);
    return new Promise((resolve, reject) => {
        return (async () => {
            try {
                let catalogues = await loadMd(_folder);
                let file = await readFile(_file);
                let catalogues_reg = /\[((\n\s*)*({([^]+?)})?(\n\s*)*)?]/;
                file = file.toString('utf8');
                if (!catalogues_reg.test(file)) throw {msg: '没找到可替换内容位置，请确保catalogues = []'};
                let f = file.replace(catalogues_reg, JSON.stringify(catalogues));
                await writeFile(_file, f);
                resolve('文章添加完毕！');
            } catch (err) {
                err.folder = _folder;
                err.file = _file;
                reject(err);
            }
        })();
    });
}

async function load_md(dir, callback) {
    try {
        let files = await readdir(dir);

        files = files.filter(fileName => path.extname(fileName) === '.md' && path.basename(fileName, '.md') !== '关于我');
        if (files.length === 0) callback({msg: '当前文件夹下没有md文件'});

        let catalogues = [];

        for (let i = 0; i < files.length; i++) {
            let status = await stat(dir + '/' + files[i]);
            let file = await readFile(dir + '/' + files[i]);

            file = file
                .toString('utf8')
                .replace(/\s/g, '')
                .substr(0, 210);

            let fileName = files[i].split('.')[0];

            let md5 = crypto.createHash('md5');
            md5.update(fileName, 'uft8');
            let id = md5.digest('hex');

            let ctime = new Date(status.ctime);
            catalogues.push({
                id,
                title: fileName,
                year: ctime.getFullYear(),
                createTime: ctime.getTime(),
                abstract: file.length > 200 ? file + '...' : file
            });
        }

        if (catalogues.length) {
            catalogues.sort(compare('createTime'));

            catalogues.forEach((catalogue, i) => {
                if (catalogues.length <= 1) return;

                if (i !== catalogues.length - 1) catalogue.next = catalogues[i + 1].title;
                if (i !== 0) catalogue.prev = catalogues[i - 1].title;
            });

            callback(null, catalogues);
        }
    } catch (err) {
        callback(err);
    }
}

function compare(property) {
    return function(a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value2 - value1;
    };
}
