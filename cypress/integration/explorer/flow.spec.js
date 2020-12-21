context('UX Flow/Sequence Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080')
    })

    context('Capture Flow', () => {
        it('When there is an invalid grid extent, there are no non-editable lines', () => {
            throw new Error("test not implemented yet")
        })

        it('When there is an invalid grid extent, the edit line is disabled', () => {
            throw new Error("test not implemented yet")
        })

        it('When there is an invalid grid extent, the submit and clear buttons are disabled', () => {
            throw new Error("test not implemented yet")
        })

        it('Once the invalid grid extent is corrected the editable line is enabled', () => {
            throw new Error("test not implemented yet")
        })

        it('When the edit line is incomplete, the add button is disabled', () => {
            throw new Error("test not implemented yet")
        })

        it('When the add button is clicked, a new non-editable line is added to the end of the command list', () => {
            throw new Error("test not implemented yet")
        })

        it('When there are no command lines the clear and submit buttons are disabled', () => {
            throw new Error("test not implemented yet")
        })

        it('When there are one or more command lines the clear and submit buttons are enabled', () => {
            throw new Error("test not implemented yet")
        })

        it('When the clear button is clicked all the command lines are removed', () => {
            throw new Error("test not implemented yet")
        })

        it('When the submit button is clicked the robot report is populated', () => {
            throw new Error("test not implemented yet")
        })

        it('If the command list changes, then the robot report states Awaiting Instructions...', () => {
            throw new Error("test not implemented yet")
        })

        it('If there is a server side error, then the robot report displays the error', () => {
            throw new Error("test not implemented yet")
        })
    })
    //error flows / handling

    context('Error-handling Flow', () => {

        it('gridExtent is blank, error handling displays on GridExtent.x', () => {
            throw new Error("test not implemented yet")
        })

        it('If edit-line is blank, no errors are displayed', () => {
            throw new Error("test not implemented yet")
        })

        it('Once edit-line is not blank, error handling is for the first invalid field', () => {
            throw new Error("test not implemented yet")
        })
    })

})