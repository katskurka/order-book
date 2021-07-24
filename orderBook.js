// reconcileOrder fx that will properly reconcile incoming // //// crypto order given the existing book of orders

function reconcileOrder(existingBook, incomingOrder) {
  // first see if the existing book is empty
  if (existingBook.length <= 0) return [incomingOrder]
  // Go thru existing book with a for/of loop, also getting iteration indexes 
  for (let i = 0; i < existingBook.length; i++) {
    if (incomingOrder.type === existingBook[i].type) {
      existingBook.push(incomingOrder)

      return existingBook
    }
  }
}

module.exports = reconcileOrder
