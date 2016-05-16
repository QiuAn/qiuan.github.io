/***
 * 设置模块控制器
 */
var settingModule = angular.module("settingModule",[]);

/****
 * 设置主页面模块
 */
settingModule.controller('SettingCtrl',["$scope", function($scope) {
	$scope.pageClass="setting";
	$scope.title="我";
	$scope.account={
		title:"JaliyWang",
		name:"370817429",
		url:"images/60x60.png"
	};
	
}]);

/***
 * 个人信息模块
 */
settingModule.controller("InfoCtrl",["$scope", function($scope) {
	$scope.pageClass="setting-child";
	var info = (function() {
		
		var _account = {
			name:"JaliyWang",
			url:"images/60x60.png",
			account:"370817429@qq.com",
			email:"370817429@qq.com",
			phone:"18221220736",
			qq:"370817429"
		}
		
		/***
		 * 选择头像
		 */
		function _select() {
			var bts=[{title:"拍照"},{title:"从相册选取"}];
			
			plus.nativeUI.actionSheet({title:"上传头像",cancel:"取消",buttons:bts},
			
				function(e){
					
					if(e.index==1){
						_fromCamera();
					}
					if(e.index==2){
						_fromGallery();
					}
					
				}
			);
		}
		
		/**
		 * 拍照并使用照片
		 */
		function _fromCamera() {
			var cmr = plus.camera.getCamera();
			cmr.captureImage(function (path) {
				plus.gallery.save( path );
				_upload(path);
			}, function ( e ) {
				//TODO 取消拍照
			}, {filename:"_doc/gallery/",index:1} );
		}
		/**
		 * 
		 */
		function _fromGallery() {
		    plus.gallery.pick( function(path){
		    	_upload(path);
		    }, function ( e ) {
				//TODO 取消选择
		    }, {filter:"image"} );
		}
		
		/**
		 * 
		 * @param {String} localPath 本地路径
		 */
		function _upload(localPath) {
			// 兼容以“file:”开头的情况
			if(0!=localPath.indexOf("file://")){
				localPath="file://"+url;
			}
			var remotePath = localPath;
			//TODO upload to server
			
			show(remotePath);
		}
		/****
		 * 显示最新头像
		 * @param {String} url 远程图片路径
		 */
		function show( url ){
			// 兼容以“file:”开头的情况
			if(0!=url.indexOf("file://")){
				url="file://"+url;
			}
			_account.url=url;
		}
		
		return {
			select : _select,
			
			account: _account
		}
		
	})();
	
	$scope.title="我的信息";
	$scope.account = info.account;
	$scope.select = info.select;
}]);


/***
 * 活动列表模块
 */
settingModule.controller("ActivityCtrl",["$scope", function($scope) {
	$scope.title="我的活动";
	$scope.activities=[{
		img:"images/60x60.png",
		title:"0329YONEX户外野营活动",
		content:"由Yonex赞助的03月29日户外野营活动"
	},{
		img:"images/60x60.png",
		title:"0329YONEX户外野营活动",
		content:"由Yonex赞助的03月29日户外野营活动"
	},{
		img:"images/60x60.png",
		title:"0329YONEX户外野营活动",
		content:"由Yonex赞助的03月29日户外野营活动"
	},{
		img:"images/60x60.png",
		title:"0329YONEX户外野营活动",
		content:"由Yonex赞助的03月29日户外野营活动"
	}];
	$scope.pageClass="setting-child";
	
	
}]);

settingModule.controller("GroupCtrl",["$scope", function($scope) {
	$scope.pageClass="setting-child";
	$scope.title="我的活动";
	$scope.groups=[{
		img:"images/60x60.png",
		name:"羽动生活羽毛球活动群",
		place:"丽水学院东区羽毛球馆"
	},{
		img:"images/60x60.png",
		name:"丰羽人羽毛球俱乐部",
		place:"浦东新区羽山路1200号(近崮山路)"
	},{
		img:"images/60x60.png",
		name:"虹羽社——虹口羽毛球组织",
		place:"浦东新区羽山路1200号(近崮山路)"
	}];
}]);

