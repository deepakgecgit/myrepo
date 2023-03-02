({
    getColors : function(component, event, helper) {
        console.log('Hello');
        var action = component.get("c.getStringList");
        action.setParams({
            
        });
        action.setCallback(this, function(response) {
            //console.log('response--->'+Json.stringify(response));
            var state = response.getState();
            //console.log('state--->'+state);
            if(state == 'SUCCESS'){
                var colors = response.getReturnValue();
                //console.log('colors-->'+colors);
                component.set("v.favoriteColors",colors);
            }
            
        });
        $A.enqueueAction(action);
    }
})