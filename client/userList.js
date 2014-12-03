Template.userList.helpers({
    listName : function(){
        return "사용자목록";
    },
    list : function(){
				var arr = Users.find().fetch();
        arr = _.sortBy(arr,function(obj){ return obj.no;});
        return arr;
    }
});

Template.userList.events({

});

Template.userList.rendered = function(){

};

Template.userListItem.helpers({
});

Template.userListItem.events({
    'click .btn-default' : function(evt,tmpl){

        // this 는 each 에서 밀어 넣어준 item 이 됩니다.
        //alert(this.no + this.name + this.email);

        // evt 는 현재 이벤트를 받은 object 입니다.
        // 클릭후 숨김니다.

        // tmpl 은 each 에 의해 생성된 현재 tmplate html 오브젝트 입니다.
        // findAll 함수로 tmpl안에 오브젝트를 검색 할수 있습니다.
				console.log();
				if(this.star){
					Users.update({_id:this._id},{$set:{star : false}});
				} else { 
					Users.update({_id:this._id},{$set:{star : true}})
				}
    },

		'click .btn-warning' : function(evt,tmpl){
			Users.remove({_id: this._id});
		}
});

Template.userListItem.rendered = function(){
	if(this.data.star) this.data.name = this.data.name + ' [ start ]'; 	
	console.log(this.data.name);
	console.log(this);
};

Template.userInput.events({
	'click button' : function(evt, tmpl){
		console.log(evt);
		console.log(tmpl);
		var datas = tmpl.findAll('input');
		var num = datas[0].value;
		var name = datas[1].value;
		var email = datas[2].value;
		
		Users.insert({no:num,name:name,email:email});

		console.log(num);
	}
});





