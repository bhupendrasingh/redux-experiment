const counter = (state={},action)=>{
	switch(action.type){
		case 'INCREMENT':
			return Object.assign({},state,{
				value:4
			})
		case 'DECREMENT':
			return Object.assign({},state,{
				value:action.value
			})
		default:
			return state;
	}
}
export default counter;