const Engineer = require('../lib/02Engineer.js'); 

describe ("Engineer", () => {

    // Test functions in contact class extended to Engineer 

    describe ("name", ()=>{
    it ("Should return the Engineer's name.", () => {    
        let obj = new Engineer ("Diana Taurasi", '#3', 'DianaTaurasi@theMercury.com', 'theGOAT');    
        const result1 = obj.name; 
        expect(result1).toEqual("Diana Taurasi");
        });
    });

    describe ("id", () => {
    it ("Should return the Engineer's id, #3.", () => {
        let obj = new Engineer ("Diana Taurasi", '#3', 'DianaTaurasi@theMercury.com', 'theGOAT'); 
        const result2 = obj.id; 
        expect(result2).toEqual("#3"); 
        });
    });

    describe ("email", () => {
    it ("Should return the Engineer's email.", () => {
        let obj = new Engineer ("Diana Taurasi", '#3', 'DianaTaurasi@theMercury.com', 'theGOAT'); 
        const result3 = obj.email; 
        expect (result3).toEqual('DianaTaurasi@theMercury.com');
        });    
    });

    // Test functions in Engineer class only 

    describe("gitbhub", () => { 
    it ("Should return the engineer's github username.", () => {
        let obj = new Engineer ("Diana Taurasi", '#3', 'DianaTaurasi@theMercury.com', 'theGOAT');
        const result4 = obj.github; 
        expect (result4).toEqual('theGOAT');
        });
    });

    describe ("getRole", () => {
    it ("Should return the name of the Engineer's position", () => { 
        let obj = new Engineer ("Diana Taurasi", '#3', 'DianaTaurasi@theMercury.com', 'theGOAT');    
        const result5 = obj.getRole(); 
        expect(result5).toEqual("Engineer");
        });    
    });
    
});


