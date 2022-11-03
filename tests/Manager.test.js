const Manager = require('../lib/01Manager');

describe ("Manager", () => {

    // Test functions in contact class extended to Manager 

    describe ("name", ()=>{
    it ("Should return manager's name entered by user.", () => {
            var obj = new Manager ("A'ja Wilson", '#22', 'ajawilson@theLVaces.com', '1234'); 
            const result1 = obj.name;
            expect(result1).toEqual("A'ja Wilson");
        });    
    });   

    describe ("id", ()=>{
        it ("Should return manager's id entered by user.", () => {
                var obj = new Manager ("A'ja Wilson", '#22', 'ajawilson@theLVaces.com', '1234'); 
                const result2 = obj.id; 
                expect(result2).toEqual("#22");
            });    
    }); 

    describe ("email", ()=>{
    it ("Should return manager's email entered by user.", () => {
            var obj = new Manager ("A'ja Wilson", '#22', 'ajawilson@theLVaces.com', '1234'); 
            const result3 = obj.email;
            expect(result3).toEqual('ajawilson@theLVaces.com');
        });    
    }); 

    // Test functions in Manager class only

    describe ("officeNumber", ()=>{
        it ("Should return manager's office number entered by user.", () => {
                var obj = new Manager ("A'ja Wilson", '#22', 'ajawilson@theLVaces.com', '1234'); 
                const result4 = obj.officeNumber;
                expect(result4).toEqual('1234');
            });    
    }); 

    describe ("getRole", ()=>{
        it ("Should return manager's role, i.e. Manager.", () => {
                var obj = new Manager ("A'ja Wilson", '#22', 'ajawilson@theLVaces.com', '1234');  
                const result5 = obj.getRole;
                expect(result5).toEqual("Manager");
            });    
    });
});
