describe('API Testing with Cypress', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com'; // Sample API
  
    it('Should fetch a list of users (GET)', () => {
      cy.request('GET', `${baseUrl}/users`).then((response) => {
        // Assertions for GET request
        expect(response.status).to.eq(200); // Status code is 200
        expect(response.body).to.be.an('array'); // Response body is an array
        expect(response.body.length).to.be.greaterThan(0); // At least one user exists
      });
    });
  
    it('Should create a new user (POST)', () => {
      const newUser = {
        name: 'John Doe',
        username: 'johndoe',
        email: 'johndoe@example.com',
      };
  
      cy.request('POST', `${baseUrl}/users`, newUser).then((response) => {
        // Assertions for POST request
        expect(response.status).to.eq(201); // Status code is 201
        expect(response.body).to.have.property('id'); // Response contains an ID
        expect(response.body.name).to.eq(newUser.name); // Verify name
        expect(response.body.username).to.eq(newUser.username); // Verify username
        expect(response.body.email).to.eq(newUser.email); // Verify email
      });
    });
  });
  