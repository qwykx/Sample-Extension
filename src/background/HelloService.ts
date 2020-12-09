import Database from "./Database";
import { autoInjectable } from "tsyringe";

@autoInjectable()
class HelloService {
    constructor(private db?: Database) {}

    sayHello() {
        console.log(this.db.getHello());
    }
}

export default HelloService;