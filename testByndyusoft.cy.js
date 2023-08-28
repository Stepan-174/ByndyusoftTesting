describe('verify contacts', () => {
    before (() => {
        cy.visit('https://www.google.com/')
        cy.get('#APjFqb').type('Byndyusoft')
        cy.get('div.aajZCb > div.lJ9FBc > center > input.gNO89b').click()
    })


    it('should open new page', () => {
        cy.get('a[href="https://byndyusoft.com/"]').invoke('removeAttr', 'target', '_self').contains('Byndyusoft').click()    
    })

    it('popup with contact information should appear', () => {
        cy.get('body > section.knowMore > div > span').click()
    })

    it('popup should contain telephone number: 8 800 775-15-21', () => {
        cy.get('div.popup-callback__content').should('contain', '8 800 775-15-21')       
    })

    it('popup should contain e-mail address: sales@byndyusoft.com', () => {
        cy.get('div.popup-callback__content').should('contain', 'sales@byndyusoft.com')
    })
    
})
