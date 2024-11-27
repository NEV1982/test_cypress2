describe('template spec', () => {
  it('agregar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan {enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()

  })

  it('marcar tarea como completada', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("pagar facturas  {enter}")
    cy.get('[data-testid="todo-item-toggle"]').click() 

  })


  it('desmarcar tarea como completada', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("pagar facturas  {enter}")
    cy.get('[data-testid="todo-item-toggle"]').click() 
    cy.get('[data-testid="todo-item-toggle"]').uncheck()
    cy.get('[data-testid="text-input"]').type("preparar la cena {enter}")

  })


  it('editar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("pagar facturas  {enter}")
    cy.get('[data-testid="todo-item-toggle"]').click() 
    cy.get('[data-testid="todo-item-toggle"]').uncheck()
    cy.get('[data-testid="text-input"]').type("preparar la cena {enter}")
    cy.get(':nth-child(2) > .view > [data-testid="todo-item-label"]').dblclick()
    cy.get('[data-testid="text-input"]').type("preparar el almuerzo {enter}")
    

  })


  it('borrar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("pagar facturas  {enter}")
    cy.get('[data-testid="todo-item-toggle"]').click() 
    cy.get('[data-testid="todo-item-toggle"]').uncheck()
    cy.get('[data-testid="text-input"]').type("preparar la cena {enter}")
    

    

  })





})
