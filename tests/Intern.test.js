const Intern = require('../lib/03Intern');

describe ("Intern", () => {

    // Test functions in contact class extended to Engineer 

    describe ("name", ()=>{
        it ("Should return the Intern's name.", () => {    
            let obj = new Intern ("Nneka Ogwumike", '#30', 'nneka@theLASparks.com', 'Stanford WBB Alum');   
            const result1 = obj.name; 
            expect(result1).toEqual("Nneka Ogwumike");
            });
        });
    
        describe ("id", () => {
        it ("Should return the Intern's id, #30.", () => {
            let obj = new Intern ("Nneka Ogwumike", '#30', 'nneka@theLASparks.com', 'Stanford WBB Alum');
            const result2 = obj.id; 
            expect(result2).toEqual("#30"); 
            });
        });
    
        describe ("email", () => {
        it ("Should return the Intern's email.", () => {
            let obj = new Intern ("Nneka Ogwumike", '#30', 'nneka@theLASparks.com', 'Stanford WBB Alum');
            const result3 = obj.email; 
            expect (result3).toEqual('nneka@theLASparks.com');
            });    
        });
    
        // Test functions in Intern class only 
    
        describe("school", () => { 
        it ("Should return the intern's school.", () => {
            let obj = new Intern ("Nneka Ogwumike", '#30', 'nneka@theLASparks.com', 'Stanford WBB Alum');
            const result4 = obj.school; 
            expect (result4).toEqual('Stanford WBB Alum');
            });
        });
    
        describe ("getRole", () => {
        it ("Should return the name of the Intern's position", () => { 
            let obj = new Intern ("Nneka Ogwumike", '#30', 'nneka@theLASparks.com', 'Stanford WBB Alum');   
            const result5 = obj.getRole; 
            expect(result5).toEqual("Intern")
            });    
        });
        

});