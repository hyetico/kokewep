

$(function(){
    $("#bgndVideo").YTPlayer({
        height: '100%',
        width: '100%',
        videoURL:'WF4jHGcZtT0',
        containment:'self',
        autoPlay:true, //자동으로 재생 
        mute:true,
        startAt:0,
        opacity:1,
        showControls:false, 
        playOnlyIfVisible: true, //영상이 멈춰있다가 재생해줌.
      });
})


