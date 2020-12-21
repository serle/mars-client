/// <reference types="cypress" />

//----------------------------------------------------------------------------------------------------------------------

async function get_instructions() {
    return cy.request(`http://localhost:8080/mars`)
}

async function post_command(command) {
    return cy.request('POST', `http://localhost:8080/mars?command=${command}`)
}

//----------------------------------------------------------------------------------------------------------------------

context('API Tests', () => {

    it('it responds to an instruction set request', async () => {
        const response = await get_instructions()

        expect(response.body).to.equal('["R", "F", "L"]')
    })

    it('it responds to a command post request', async () => {
        //given
        const command = '5 3|1 1 E|RFRFRFRF||3 2 N|FRRFLLFFRRFLL||0 3 W|LLFFFLFLFL'

        //then
        const response = await post_command(command)
        expect(response.body).to.equal('1 1 E|3 3 N LOST|2 3 S')
    })

    it('it responds to GridExtent.x in range [0;50]', async () => {
        //given
        const command = '5 3|1 1 E|RFRFRFRF'

        //then
        const response = await post_command(command)
        expect(response.body).to.equal('1 1 E')
    })

    it('it errors if GridExtent.x not in range [0;50] or not a number', async () => {

    })

    it('it responds to GridExtent.y in range [0;50]', async () => {
        //given
        const command = '5 3|1 1 E|RFRFRFRF'

        //then
        const response = await post_command(command)
        expect(response.body).to.equal('1 1 E')
    })

    it('it errors if GridExtent.y not in range [0;50] or not a number', async () => {

    })


    //and so on...
    it('it responds to InitialState.x in range [0;{gridExtent.x}]', async () => {

    })

    it('it errors if InitialState.x out of range [0;{gridExtent.x}] or not an integer', async () => {

    })

    it('it responds to InitialState.y in range [0;{gridExtent.x}]', async () => {

    })

    it('it errors if InitialState.y out of range [0;{gridExtent.x}] or not an integer', async () => {

    })

    it('it responds to InitialState.orienetation in range [N. S, E, W]', async () => {

    })

    it('it errors if InitialState.orientation not one of [N. S, E, W]', async () => {

    })

    it('it responds to Instructions if all characters one of [R. F, L]', async () => {

    })

    it('it errors if Instructions not all characters one of [R. F, L]', async () => {

    })

    it('it responds if all characters one of [R. F, L] and length in range [1;100]', async () => {

    })

    it('it errors if all characters one of [R. F, L] and length not in range [1;100]', async () => {

    })

    it('it errors if missing GridExtent', async () => {

    })

    it('it errors if missing a RobotCommand', async () => {

    })

    it('it errors if the RobotCommand is missing an InitialState', async () => {

    })

    it('it errors if the RobotCommand is missing an Instruction string', async () => {

    })

    it('it errors if there is not a blank line between successive RobotCommands', async () => {

    })

})