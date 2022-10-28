const contact = require('..00contactCard')

describe ("Manager", () => {

    it ("Should return manager's name entered by user.", () => {
        //Arrange & Act
        let obj = new contact("A'ja Wilson", '#22', 'ajawilson@theLVaces.com', '1234', 'Manager'); 
        //Assert 
        expect(obj.name()).toEqual("A'ja Wilson");
    });

    it ("Should return manager's id number entered by user.", () => {
        //Arrange & Act
        let obj = new contact("A'ja Wilson", '#22', 'ajawilson@theLVaces.com', '1234', 'Manager'); 
        //Assert 
        expect(obj.id()).toEqual("#22");
    });

    it ("Should return manager's email entered by user.", () => {
        //Arrange & Act
        let obj = new contact("A'ja Wilson", '#22', 'ajawilson@theLVaces.com', '1234', 'Manager'); 
        //Assert 
        expect(obj.id()).toEqual('ajawilson@theLVaces.com');
    });

    it ("Should return the 'extra' info for the manager, in this case thier office number", () => {
        //Arrange & Act
        let obj = new contact("A'ja Wilson", '#22', 'ajawilson@theLVaces.com', '1234', 'Manager'); 
        //Assert 
        expect(obj.extra()).toEqual('1234');
    });

    it ("Should return the name of the Manager's position, i.e. 'Manager.'", () => {
        //Arrange & Act
        let obj = new contact("A'ja Wilson", '#22', 'ajawilson@theLVaces.com', '1234', 'Manager'); 
        //Assert 
        expect(obj.position()).toEqual('Manager');
    });

});
