const mutation={
	//--动态设置页面名字--
	setPageName(state,name){
		state.pageName=name;
	},
	//--不同页面，设置搜索框放大镜的距离
	setSearchPlaceholder(state,str){
		state.placeholderText=str;
		if(str!='搜索'){
			state.isSearchSpan=true;
		}else{
			state.isSearchSpan=false;
		}
		
	},
	//--点击加号显示添加好友的框框--
	setAddBox(state){
		state.IsShow_addBox=!state.IsShow_addBox;
	},
	
	setEnterERJI(state,state_str){
		console.log("设置头部，底部，搜索框隐藏");
		state.enterERJI=state_str;
		
	}
}

export default mutation
