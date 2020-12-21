/// <reference types="cypress" />

context('Business Scenario Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080')
    })

    it('right instruction orientation permutated clockwise', () => {

    })

    it('left instruction orientation permutated anti-clockwise', () => {

    })

    it('forward instruction robot moves in the direction of orientation assuming not on edge', () => {

    })

    it('if forward instruction + on edge + no previous smell => robot is lost and leaves smell for next one', () => {

    })

    it('if forward instruction + on edge + previous smell => robot stays put', () => {

    })

})