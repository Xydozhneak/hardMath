class SuperMath {
    check(obj) {
    
      const X = obj.X;
      const Y = obj.Y;
      const operator = obj.operator;
  
      const validOperator = ["+", "-", "*", "/", "%"];
  
      if (!validOperator.includes(operator)) {
        console.log("Incorrect operator");
        this.input();
        return;
      }
      const confirmOperator = prompt(`Is this the correct operator? ${operator} Input "Yes" or "No"`);
  
      if (confirmOperator.toLowerCase() === "yes") {
        console.log(`You chose operator: ${operator}`);
        const result = this.calculate(X, Y, operator);
        console.log(`Result: ${result}`);
      } else if (confirmOperator.toLowerCase() === "no") {
        return this.input();
      } else {
        console.log("Incorrect answer");
      }
    }
  
    calculate(X, Y, operator) {
      switch (operator) {
        case "+":
          return X + Y;
        case "-":
          return X - Y;
        case "*":
          return X * Y;
        case "/":
          return X / Y;
        case "%":
          return X % Y;
        default:
          console.log("Incorrect operator!");
          return null;
      }
    }
  
    input() {
      const obj = {};
      obj.X = parseInt(prompt("Enter X value"));
      obj.Y = parseInt(prompt("Enter Y value"));
      obj.operator = prompt("Enter operator");
  
      this.check(obj);
    }
  }
  const p = new SuperMath();
const obj = { X: 1, Y: 1, operator: "+" };
p.check(obj);
  