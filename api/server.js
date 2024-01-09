// build your server here and require it from index.js
const express = require("express");
const tasksRouter = require("./task/router");
const resourcesRouter = require("./resource/router");
const projectsRouter = require("./project/router");

const server = express();

server.use(express.json());

server.use("/api/tasks", tasksRouter);
server.use("/api/resources", resourcesRouter);
server.use("/api/projects", projectsRouter);

server.use("*", (req, res) => {
  res.json({ message: "api up" });
});

module.exports = server;