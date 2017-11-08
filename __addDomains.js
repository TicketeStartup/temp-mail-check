const _sourcePath = "./disposable-email-domains.json";
const _source = require(_sourcePath),
    _ = require("underscore"),
    fs = require("fs");
const startLng = _source.length;

console.log("[Welcome to addDomain tool]");
console.log("|-- I'm evaluating the list ...");
let _domains = [],
    invalid = 0;
let args = process.argv.slice(2)[0];
if (args) {
    let cmd_list = args.split("--list=")[1];
    console.log("cmd_list: ", cmd_list);
    if (cmd_list) {
        _domains = cmd_list.split(",");
        for (let i = 0; i < _domains.length; i++) {
            if (/^([\s\S])+\.+[a-z]{2,}$/.test(_domains[i])) {

                _source.push(_domains[i].toLowerCase());
            } else {
                invalid++;
            }
        }
    }
}

let newSouce = _.uniq(_source);
console.log("------------------------------------");
console.log("Source Domains: ", _source.length);
console.log("New Domains", _domains.length);
let diff = Number(newSouce.length - startLng);
console.log("Not present domains added: " + diff);
console.log("------------------------------------");
if (invalid > 0) {
    console.log("Invalid domains: " + invalid);
    console.log("|-- Plz make sure the domain name respects the regex: /^([\s\S])+\.+[a-z]{2,}$/");
    console.log("------------------------------------");
}
if (diff > 0) {
    fs.writeFile(_sourcePath, JSON.stringify(newSouce), 'utf8'); // write it back
    console.log("|-- disposable-email-domains.json upadated");
} else {
    console.log("|-- nothing to update");
}
