/// <reference types="cypress" />

context('Field Validation Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080')
    })

    it('gridExtent.x accepts an integer [1;50]', () => {
        cy.get(`.grid-extent__input[name="max-x"]`)
            .type(5).should('have.value', '5')
    })

    it('if gridExtent.x receives NAN or number outside [1;50], it prevents input & prints error', () => {
        throw new Error("test not implemented yet")
    })


    it('gridExtent.y accepts a integer [1;50]', () => {
        throw new Error("test not implemented yet")
    })

    it('if gridExtent.y receives NAN or number outside [1;50], it prevents input & prints error', () => {
        throw new Error("test not implemented yet")
    })

    it('InitialState.x accepts a integer [0;{GridExtent.x}]', () => {
        throw new Error("test not implemented yet")
    })

    it('if InitialState.x receives a non-integer or an integer outside [0;{GridExtent.x}], it prevents input & prints error', () => {
        throw new Error("test not implemented yet")
    })

    it('if InitialState.y accepts a integer [0;{GridExtent.y}]', () => {
        throw new Error("test not implemented yet")
    })

    it('if InitialState.y receives a non-integer or an integer outside [0;{GridExtent.y}], it prevents input & prints error', () => {
        throw new Error("test not implemented yet")
    })

    it('if InitialState.orientation accepts a valid direction i.e. [N, S, E, W]', () => {
        throw new Error("test not implemented yet")
    })

    it('if InitialState.orientation receives a non-direction key outside [N.S, E, W], it prevents input & prints error', () => {
        throw new Error("test not implemented yet")
    })

    it('Instruction field accepts a valid instruction in [ R, F, L ]', () => {
        throw new Error("test not implemented yet")
    })

    it('Instruction field rejects invalid instructions not in [ R, F, L ]', () => {
        throw new Error("test not implemented yet")
    })

    it('Instruction field shows error until length in [1;50]', () => {
        throw new Error("test not implemented yet")
    })

})