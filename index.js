// const express = require("express");
import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const handleListening = (req, res) => {
  console.log("localhost");
};

const handleHome = (req, res) => res.send("home");

const handleProfile = (req, res) => res.send("profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(logger("dev"));

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(port, handleListening);
