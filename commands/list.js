// list.mjs
import Conf from "conf";
import chalk from "chalk";

// Specify a projectName when creating the Conf instance
const conf = new Conf({ projectName: "todo-list" });

// Set an initial value for the todo-list

function list() {
  const todoList = conf.get("todo-list");

  if (todoList && todoList.length > 0) {
    console.log(
      chalk.blue.bold(
        "Tasks in green are done. Tasks in yellow are still not done."
      )
    );

    todoList.forEach((task, index) => {
      if (task.done) {
        console.log(chalk.greenBright(`${index}. ${task.text}`));
      } else {
        console.log(chalk.yellowBright(`${index}. ${task.text}`));
      }
    });
  } else {
    console.log(chalk.red.bold("You don't have any tasks yet."));
  }
}

export default list;
