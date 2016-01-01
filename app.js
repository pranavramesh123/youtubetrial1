angular.module('indeeApp', ["ui.bootstrap"])
    .controller('videoCtrl', function($scope, $http) {

            $scope.sampleNames="PowerDrift,EdSheeran";
            $scope.getVideos = function (){

                $http.get('https://www.googleapis.com/youtube/v3/search', {
                        params: {
                          key: 'AIzaSyDbbRBwAa8NhJ3SpF8q6e-42IP-oVacx64',
                          type: 'video',
                          maxResults: '20',
                          part: 'id,snippet', // we can give here part as statistics also to get views n other video details
                          q:$scope.channelName 
                        }
                      })
              .success( function (data) {
                console.log(data);
                $scope.information=data.items;
                $scope.infoSize=$scope.information.length;
              });

            }

            $scope.clear = function(){
                $scope.channelName='';
                $scope.information=[];
            }   
          
});