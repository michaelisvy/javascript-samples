const sinon = require("sinon");

it('should make a call using an anonymous spy', () => {
    const spy = sinon.spy();
    spy("hello");
    spy("blablabla");
    expect(spy.firstCall.args[0]).toBe("hello");
    expect(spy.secondCall.args[0]).toBe("blablabla");
});

it('should spy a call to an existing method', () => {
    const user = {
        setName: function(name) {
            this.name = name;
        }
    };
    const userSetNameSpy = sinon.spy(user, 'setName'); 
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