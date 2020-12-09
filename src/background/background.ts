import "reflect-metadata";
import { container } from "tsyringe";
import Database from "./Database";
import HelloService from "./HelloService";

console.log("Chrome Extension running");
console.log("------------------------");

container.register(Database, { useClass: Database});
const helloService = new HelloService(); // this line will throw an error

console.log(helloService.sayHello());