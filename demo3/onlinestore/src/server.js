const express = require("express");
const jsonServer = require("json-server");
const chokidar = require("chokidar");
const cors = require("cors");

const fileName = process.argv[2] || "./data.js";
const port = process.argv[3] || 3500;

let router = undefined();