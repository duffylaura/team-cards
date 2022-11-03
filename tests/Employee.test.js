const contact = require('../lib/00contactCard');

describe ("contact", () => {

    // Test functions in contact class extended to Engineer 

    describe ("name", ()=>{
    it ("Should return the contact's name.", () => {    
        let obj = new contact ("Diana Taurasi", '#3', 'DianaTaurasi@theMercury.com', '2345', 'Manager');    
        const result1 = obj.name; 
        expect(result1).toEqual("Diana Taurasi");
        });
    });

    describe ("id", () => {
    it ("Should return the contact's id, #3.", () => {
        let obj = new contact ("Diana Taurasi", '#3', 'DianaTaurasi@theMercury.com', '2345', 'Manager');
        const result2 = obj.id; 
        expect(result2).toEqual("#3"); 
        });
    });

    describe ("email", () => {
    it ("Should return the contact's email.", () => {
        let obj = new contact ("Diana Taurasi", '#3', 'DianaTaurasi@theMercury.com', '2345', 'Manager');
        const result3 = obj.email; 
        expect (result3).toEqual('DianaTaurasi@theMercury.com');
        });    
    });

    describe("extra", () => { 
    it ("Should return the contact's extra information, such as office number, github, or school.", () => {
        let obj = new contact ("Diana Taurasi", '#3', 'DianaTaurasi@theMercury.com', '2345', 'Manager');
        const result4 = obj.extra; 
        expect (result4).toEqual('2345');
        });
    });

    describe("position", () => { 
        it ("Should return the contact's position.", () => {
            let obj = new contact ("Diana Taurasi", '#3', 'DianaTaurasi@theMercury.com', '2345', 'Manager');
            const result5 = obj.position; 
            expect (result5).toEqual('Manager');
            });
        });

});
