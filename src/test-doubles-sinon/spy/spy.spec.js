let sinon = require("sinon");

test('should make a call using an anonymous spy', () => {
    let spy = sinon.spy();
    spy("hello");
    spy("blablabla");
    expect(spy.firstCall.args[0]).toBe("hello");
    expect(spy.secondCall.args[0]).toBe("blablabla");
});

test('should spy a call to an existing method', () => {
    let user = {
        setName: function(name) {
            this.name = name;
        }
    };
    let userSetNameSpy = sinon.spy(user, 'setName'); 
    // one spy per function, even if there are multiple functions in the same file

    user.setName("Joe");
    user.setName("Jack");
    expect(userSetNameSpy.callCount).toBe(2);

    userSetNameSpy.restore(); // removes the spy

    // starting from now, the spy is not recording anymore
    user.setName("William");
    user.setName("Averell");
    expect(userSetNameSpy.callCount).toBe(2); 
    // still 2 because the spy has been removed before William
});