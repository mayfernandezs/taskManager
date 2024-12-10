describe('Task Manager', () => {
  beforeEach(() => {
    // Limpiar las tareas y cargar la aplicación
    cy.visit('http://localhost:8080'); // Asegúrate de que tu app está corriendo en este puerto
  });

  it('should allow adding a new task', () => {
    const taskName = 'New Task';
    
    // Escribir una tarea en el input y agregarla
    cy.get('input[placeholder="Enter a task"]').type(taskName);
    cy.get('button').contains('Add Task').click();

    // Verificar que la tarea aparece en la lista
    cy.contains(taskName).should('exist');
  });

  it('should allow marking a task as completed', () => {
    const taskName = 'Task to Complete';
    
    // Agregar una tarea
    cy.get('input[placeholder="Enter a task"]').type(taskName);
    cy.get('button').contains('Add Task').click();
    
    // Marcar la tarea como completada
    cy.contains(taskName)
      .parent()
      .find('button')
      .contains('Complete')
      .click();

    // Verificar que la tarea está marcada como completada
    cy.contains(taskName)
      .parent()
      .find('span')
      .should('have.class', 'completed');
  });

  it('should allow deleting a task', () => {
    const taskName = 'Task to Delete';
    
    // Agregar una tarea
    cy.get('input[placeholder="Enter a task"]').type(taskName);
    cy.get('button').contains('Add Task').click();
    
    // Eliminar la tarea
    cy.contains(taskName)
      .parent()
      .find('button')
      .contains('Delete')
      .click();

    // Verificar que la tarea ya no está en la lista
    cy.contains(taskName).should('not.exist');
  });

  it('should filter tasks by status', () => {
    const completedTask = 'Completed Task';
    const pendingTask = 'Pending Task';

    // Agregar tareas
    cy.get('input[placeholder="Enter a task"]').type(completedTask);
    cy.get('button').contains('Add Task').click();
    cy.get('input[placeholder="Enter a task"]').type(pendingTask);
    cy.get('button').contains('Add Task').click();

    // Marcar la primera tarea como completada
    cy.contains(completedTask)
      .parent()
      .find('button')
      .contains('Complete')
      .click();

    // Filtrar por tareas completadas
    cy.get('button').contains('Completed').click();
    cy.contains(completedTask).should('exist');
    cy.contains(pendingTask).should('not.exist');

    // Filtrar por tareas pendientes
    cy.get('button').contains('Pending').click();
    cy.contains(pendingTask).should('exist');
    cy.contains(completedTask).should('not.exist');

    // Mostrar todas las tareas
    cy.get('button').contains('All').click();
    cy.contains(completedTask).should('exist');
    cy.contains(pendingTask).should('exist');
  });
});
