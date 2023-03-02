({
	fetchAccounts : function(component,event) {
		//alert('hello');
        //this.doInit1();
        var action = component.get("c.getAccounts");
        action.setParams({  
        });
        action.setCallback(this, function(response){
            //console.log('response'+JSON.stringify(response));
            var state = response.getState();
            //console.log('state'+state);
            if(state =='SUCCESS'){
                var result = response.getReturnValue();  //here we will have the o/p values
                //console.log('result-->'+result);
                component.set("v.myAccount",result);
            }
            });
            $A.enqueueAction(action);
    },
    editAccountRecord : function(component,event){
        var row = event.getParam('row');
        var editRecordEvent = $A.get("e.force:editRecord");
        editRecordEvent.setParams({
            "recordId":row.Id
        });
        editRecordEvent.fire();
    },
    viewAccountRecord : function(component,event){
        var row = event.getParam('row');
        var navEvt = $A.get("event.force:navigateToSObject");
        navEvt.setParams({
            "recordId":row.Id,
            "slideDevName":"detail"
        });
        navEvt.fire();
    }
        
})