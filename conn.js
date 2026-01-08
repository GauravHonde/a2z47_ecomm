var mysql = require("mysql");
var util = require("util");

var conn = mysql.createConnection({
    host: "ba7xf1kazbbpfplm3gfa-mysql.services.clever-cloud.com",
    user: "u4aenxbq8wu7fdhx",
    password: "mDIAhTM2INoC3eXsYu3H",
    database: "ba7xf1kazbbpfplm3gfa"
});

var exe = util.promisify(conn.query).bind(conn);

module.exports = exe;
