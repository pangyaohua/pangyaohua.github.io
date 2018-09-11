const mutation={
	//--动态设置页面名字--
	setPageName(state,name){
		state.pageName=name;
	},
	setSearchPlaceholder(state,str){
		state.placeholderText=str;
		if(str!='搜索'){
			state.isSearchSpan=true;
		}else{
			state.isSearchSpan=false;
		}
		
	}
}

export default mutation
