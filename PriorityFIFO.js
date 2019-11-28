class PriorityFIFO {
  constructor () {
    this._inicio = null;
  }

  _agregar = (nuevoNodo) => {
    if (this._inicio !== null) {
      if (this._inicio.prioridad === 0 && nuevoNodo.prioridad === 1) {
        let temp = this._inicio;
        nuevoNodo.siguente = temp;
        this._inicio = nuevoNodo;
      } else {
        this._add(this._inicio, nuevoNodo);
      }
    } else {
      this._inicio = nuevoNodo;
    }
  }

  _add = (currentNode, newNode) => {
    if (newNode.prioridad === 1) {
      if (currentNode.siguiente.prioridad === 1) {
        this._add(currentNode.siguente, newNode);
      } else {
        newNode.siguente = currentNode.siguente;
        currentNode.siguente = newNode;
      }
    } else {
      if (currentNode.siguente !== null) {
        this._add(currentNode.siguente, newNode);
      } else {
        currentNode.siguente = newNode;
      }
    }
  }
}
