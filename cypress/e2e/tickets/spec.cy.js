
let data 
import{faker} from '@faker-js/faker'
describe('booking process', () => {
  it('ticket', () => {
    //cy.visit('/')
    //before(function(){
    cy.fixture('ticket').then(function(fix){
      data = fix
    })
    
  })

  it('ticket booking', () => {
    cy.visit('/')
   cy.contains('BUY TICKET').click({force:true})
    cy.get(data.firstName).should('be.visible').and('exist').type('chioma')
    cy.get(data.lastName).should('be.visible').and('exist').type('esther')
    cy.get(data.orderNotes).should('be.visible').and('exist').type('Easy booking')
    cy.get(data.dob).click()
    cy.get(data.calender).click()
    cy.get(data.sex).click()
    cy.get(data.tripType).click()
    cy.get(data.fromCity).should('be.visible').and('exist').type('Luton ')
    cy.get(data.toCity).should('be.visible').and('exist').type('london')
    cy.get(data.departure).click()
    cy.get(data.deptCalender).click()
    cy.get(data.notes).should('be.visible').and('exist').type('I want a smooth trip')
    cy.get(data.visaApplication).click()
    cy.contains(data.selectVisaApplication).should('be.visible').and('exist').click({force:true})
    cy.get(data.deliveryMethod).click()
    cy.get(data.billName).should('be.visible').and('exist').type('Esther')
    cy.get(data.billNumber).should('be.visible').and('exist').type('Test@1234')
    cy.get(data.billEmail).should('be.visible').and('exist').type(faker.internet.email())
    cy.get(data.billingCountry).click()
    cy.contains(data.UK).click({force:true})
    cy.get(data.billingAddress).should('be.visible').and('exist').type('38 Harcourt Street')
    cy.get(data.billingCity).should('be.visible').and('exist').type('Luton')
    cy.get(data.billingState).should('be.visible').and('exist').type('Bedfordshire')
    cy.get(data.billingPostcode).should('be.visible').and('exist').type('Lu12ef')
    cy.get('div[class="wmc-currency wmc-active"] span:nth-child(1)').click()
    cy.contains('Debit and Credit Card').click({force:true})
    // cy.get(data.card).should('be.visible').and('exist').type('81719999')
    // cy.get(data.card).should('be.visible').and('exist').type('10/30')
    // cy.get(data.card).should('be.visible').and('exist').type('737')
    
    // cy.get(data.card).then(function($iframe)
    // {
    // let iframebody = $iframe.contents().find('body').cy.wrap(iframebody).clear().type('81719999')
    // cy.get(data.card).should('be.visible').and('exist').type('10/30')
    // cy.get(data.card).should('be.visible').and('exist').type('737)


    
    

   
  })



})
//})