describe('Los Estudiantes pruebas', function() {
    it('Visits los estudiantes and fails at login', function() {
        cy.visit('https://losestudiantes.co');
        cy.contains('Cerrar').click();
        //Lineas nuevas  
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("jacjahjkashf@safgample.com")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234")
        cy.get('.cajaLogIn').contains('Ingresar').click()
        cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
        cy.screenshot();
    });

    // Registro de un usuario
    /*it('Visits los estudiantes and get register success',  function() {
        cy.visit('https://losestudiantes.co');
        cy.contains('Cerrar').click();

        cy.contains('Ingresar').click();

        cy.get('.cajaSignUp').find('input[name="nombre"]').click().type('Ana Maria');
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type('Espinosa');
        cy.get('.cajaSignUp').find('input[name="correo"]').click().type('am.espinosa11@uniandes.edu.co');
        cy.get('.cajaSignUp').find('input[type="checkbox"]').click();
        // Falta elegir programa
        cy.get('.cajaSignUp').find('input[name="contrasena"]').click().type('Cypress123*');
        cy.get('.cajaSignUp').find('input[name="acepta"]').click();
        cy.get('.cajaLogIn').contains('Registrarse').click();

        // Verificar mensaje de exito
        cy.contains('Registro exitoso!');
    });
    */

    /*
    // Logout
    it('Logout', function() {
        cy.get(".dropDown").find('button[id="cuenta"]').click();
        cy.get(".dropdown-menu").contains('Salir').click();
    }); 
*/

    // Login
    it('Visits los estudiantes and get login success', function() {
        cy.visit('https://losestudiantes.co');
        cy.contains('Cerrar').click();

        cy.contains('Ingresar').click();

        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("am.espinosa11@uniandes.edu.co");
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("Cypress123*");
        cy.get('.cajaLogIn').contains('Ingresar').click();
        cy.get('.jsx-25430290').find('button').should('be.visible');
        cy.screenshot();
    });

    // Busqueda de profesores.
    it('Search a teacher', function() {
        cy.contains('Busca un profesor o materia...').click().type("Mario Linares");
        cy.get('.Select-menu-outer').should('be.visible');
    });

    // Ir a la pagina de un profesor.
    it('Search a teacher', function() {
        cy.get('.Select-control').submit();
        cy.contains('Mario Linares Vasquez');
    });

    /*

    // Filtros por materia en la pagina de un profesor.
    it('Filter by course', function() {
        cy.get('.').find('input[name="id:ISIS3510"]').click();
    })
    */
});