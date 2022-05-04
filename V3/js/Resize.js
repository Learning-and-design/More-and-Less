function Resize() {

    let canvas = c.canvas;
    let width  = (window.innerWidth);
    let height = (window.innerHeight);

    var isChrome = (navigator.userAgent.indexOf("Chrome") != -1 && navigator.vendor.indexOf("Google Inc") != -1);
    // var isAndroid = /(Android)/i.test(navigator.userAgent);
    var isAndroidChrome = isChrome && isAndroid;
    
    if(isAndroidChrome){

      if(screen.width === window.innerWidth){
        //this is fullscreen...
        return;
      }else{
        lock();
      }
    
    }else{
    let aspectRatio = 2400/1080;
    
    if (width * aspectRatio  > window.innerHeight) {
      width = Math.min(width, Math.ceil(height / aspectRatio ));
    }
    height = Math.floor(width * aspectRatio);

    container.style.width = width + "px";
    container.style.height = height + "px";
    container.style.top = ((window.innerHeight - height) / 2) + "px";
    // container.style.left = ((window.innerWidth - width) / 2) + "px";
    container.style.height = (height - 1) + "px";

    let sizeObj = { "height": height, "width": width };

    try {
      unityInstance.SendMessage("Main Camera", "LoadBrowserVariables", JSON.stringify(sizeObj));
    }
    catch
    {
      console.log("Main camera not found!Maybe this isn't the tool showcase build");
    }
    
  }
  }