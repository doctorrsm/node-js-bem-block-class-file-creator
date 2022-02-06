//Получение списка файлов https://stackoverflow.com/questions/2727167/how-do-you-get-a-list-of-the-names-of-all-files-present-in-a-directory-in-node-j
// Чтение файла https://stackoverflow.com/questions/47409501/how-do-i-use-fs-readfile-to-read-an-html-file-in-node-js
// Парсинг сайтов с помощью Node.js https://tproger.ru/translations/web-scraping-node-js/
/*
https://stackoverflow.com/questions/53954558/how-to-turn-a-file-into-a-string-in-nodejs
https://cheerio.js.org/
https://blog.logrocket.com/parsing-html-nodejs-cheerio/

Видео - уроки https://vimeo.com/31950192
*/

const axios = require("axios");
const cheerio = require("cheerio");
const htmlparser2 = require("htmlparser2");

//Открываем файл и возвращаем строку
const fs = require('fs');
let fileContents = fs.readFileSync('./index.html').toString();
//console.log(fileContents)
//Передаем строку в черри
let $ = cheerio.load(fileContents);
let class_list = $('*')
let inputАrray = [];
for (let i = 0; i < class_list.length; i++) {
    let item = class_list[i]['attribs']['class']
    if (item !== undefined) {
        console.log(item);
        inputАrray.push(item);
    }

}

console.log(inputАrray)

let outputArray = [];

for (let i = 0; i < inputАrray.length; i++) {
    let modifier = '--';
    let element = '_';
    let array = inputАrray[i].split(' ');

    for (let j = 0; j < array.length; j++) {
        let isModifier = array[j].indexOf(modifier);
        let isElement = array[j].indexOf(element);
        if (isModifier === -1 && isElement === -1) {
            outputArray.push(array[j]);
        }
    }
}
console.log("Скрипт");
//console.log(outputArray);

create_bem_file("newsassfile")

function create_bem_file(class_name) {
    fs.access("./index.html", function(error) {
        if (error) {


            fs.open('index.html', 'w', (err) => {
                if (err) throw err;
                console.log('File created');
            });




        } else {
            console.log("Файл уже существует");
        }
    });
    add_block_to_style(class_name);
}


function add_block_to_style(filename) {
    fs.access("./style.scss", function(error) {
        if (error) {


            fs.open('./style.scss', 'w', (err) => {
                if (err) throw err;
                console.log('File created');
            });




        } else {
            fs.appendFile('./style.scss', `@import "block/${filename}"; \n`, (err) => {
                if (err) throw err;
                console.log('Data has been added!');
            });
        }
    });
}