/// <reference types="cypress" />

describe("Update Request", () => {
    it("Update an existing post via the /posts api", () => {
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/2",
            body: {
                title: "Where can I buy apples?",
                author: "Hana Hana"
            }
        }).then(response => {
            expect(response.status).to.eql(200);
        });
    }); 
});
