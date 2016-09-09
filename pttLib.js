const pythonShell = require('python-shell');

function getPttMenu(menuId, callback) {
    let crawler = new pythonShell('crawler.py');
    let temp = '';
    crawler.send(menuId.toString());
    crawler.on('message', (message) => {
        temp += message;
    })

    crawler.end((err) => {
        if (err) console.log(err);
        console.log('finished');
        callback(temp);
    })
}

exports.getPttMenu = getPttMenu;