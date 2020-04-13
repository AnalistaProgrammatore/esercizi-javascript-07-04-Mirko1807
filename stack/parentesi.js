function balancep(exp) {
  let n;  \\variabile d'appoggio per ricominciare il secondo ciclo dalla posizione n
  let stack = [];
  let flag = false; \\flag di controllo per l'apertura di una parentesi
  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === "{") {  \\creazione dello stack per le parentesi { aperte
      stack.push(i);        \\memorizzo prima l'indice
      stack.push(exp[i]);   \\poi la parentesi
      flag = true;
      n = i;
    }
  }
  if (!flag) {                             \\se non trovo parentesi aperte controllo che ce ne siano di chiuse
    for (let i = 0; i < exp.length; i++) { \\e segnalo subito la mancata apertura
      if (exp[i] === "}")
        console.log(
          "alla posizione: ",
          i,
          " c'è una parentesi: ",
          exp[i],
          " che non viene mai aperta"
        );
    }
  } else if (flag) {               \\se trovo parentesi aperte controllo che poi vengano chiuse
    for (let j = n; j < exp.length; j++) {
      if (exp[j] === "}") {
        stack.pop();    \\se trova la chiusura elimina dallo stack l'indice
        stack.pop();     \\e la parentesi
        flag = false;
      }
    }
  }

  for (let i = 0; i < exp.length; i++) { \\stessa logica del blocco precedente ma su parentesi quadre
    if (exp[i] === "[") {
      stack.push(i);
      stack.push(exp[i]);
      flag = true;
      n = i;
    }
  }
  if (!flag) {
    for (let i = 0; i < exp.length; i++) {
      if (exp[i] === "]")
        console.log(
          "alla posizione: ",
          i,
          " c'è una parentesi: ",
          exp[i],
          " che non viene mai aperta"
        );
    }
  } else if (flag)
    for (let j = n; j < exp.length; j++) {
      if (exp[j] === "]") {
        stack.pop();
        stack.pop();
        flag = false;
      }
    }

  for (let i = 0; i < exp.length; i++) {  \\e su parentesi tonde
    if (exp[i] === "(") {
      stack.push(i);
      stack.push(exp[i]);
      flag = true;
      n = i;
    }
  }
  if (!flag) {
    for (let i = 0; i < exp.length; i++) {
      if (exp[i] === ")")
        console.log(
          "alla posizione: ",
          i,
          " c'è una parentesi: ",
          exp[i],
          " che non viene mai aperta"
        );
    }
  } else if (flag)
    for (let j = n; j < exp.length; j++) {
      if (exp[j] === ")") {
        stack.pop();
        stack.pop();
        flag = false;
      }
    }

  if (stack.length < 1) console.log("Tutte le parentesi aperte sono state chiuse");  \\stack vuoto, no problem
  else
    for (let i = 0; i < stack.length - 1; i = i + 2)  \\stack non vuoto, lo scorro di 2 in 2 poichè contiene anche gli indici
      console.log(
        "la parentesi: ",            \\e stampa gli errori alle relative posizioni
        stack[i + 1],
        " aperta alla posizione",
        stack[i],
        " non viene mai chiusa"
      );
}

let ex1 = "{4-[5+(4-3)+2]+1}";
let ex2 = "{4-5+(4-3)+2]+1}";
let ex3 = "{4-[5+(4-3+2]+1}";
console.log("prima prova");
balancep(ex1);
console.log("seconda prova");
balancep(ex2);
console.log("terza prova");
balancep(ex3);
