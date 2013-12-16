/**
 * Created by KateKate on 16.12.13.
 */
    /*embed = document.getElementsByTagName('embed')
    var vkVideo = ""
    vkVideo = document.createElement('embed')
    vkVideo.src = "player.swf"
    vkVideo.innerHTML = '<embed type="application/x-shockwave-flash"  width="400" height="319" style="undefined" id="mpl" name="mpl" quality="high" allowfullscreen="true" allowscriptaccess="always" wmode="opaque" flashvars="file=http://content.longtailvideo.com/videos/flvplayer.flv">'

    parent = embed[0].parentNode
    parent.removeChild(embed[0])

    parent.appendChild(vkVideo)
    alert(parent.id)*/

//Указываем расположение плеера и его ширину и высоту
function my(){
  var so = new SWFObject('/swf/video.swf?18','mpl','400','319','9');
  so.addParam('allowfullscreen','true');
  so.addParam('allowscriptaccess','always');
  so.addParam('wmode','opaque');

  //Путь к видео-файлу
  so.addVariable('file','http://content.longtailvideo.com/videos/flvplayer.flv');

  //Вписываем окно плеера в div с id "mediaspace"
  so.write('video_box_wrap3195849_167563766');
}