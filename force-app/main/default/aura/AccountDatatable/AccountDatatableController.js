({
	doInit : function(component, event, helper) {
		//alert('hello');
		var actions = [
            {label: 'Edit', name: 'edit'},
            {label: 'View', name: 'view'},
            {label: 'Delete', name: 'delete'}
        ];
		var columns = [
            {label: 'Account Name', fieldName: 'Name', type:'text'},
            {label: 'Industry', fieldName: 'Industry', type:'text'},
            {label: 'phone Number', fieldName: 'phone', type:'phone'},
            {label: 'Website Address', fieldName: 'Website', type:'url'},
            {type: 'action', typeAttributes: {rowActions:actions}}
        ];
        component.set("v.myColumns",columns);
		helper.fetchAccounts(component,event,helper);
	},
    handleAction: function(component, event, helper){
        var actionRec = event.getParam('actions');
        switch(actionRec.name){
            case 'edit':
                helper.editAccountRecord(component,event);
                break;
            case 'view':
                helper.viewAccountRecord(component,event);
                break;
            case 'delete':
                helper.deleteAccountRecord(component,event);
                break;
        }
}
})