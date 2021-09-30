import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import { Video, AVPlaybackStatus } from "expo-av";
export default function VideoPlayer() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={{ flex: 1 }}>
      {/* <WebView
        originWhitelist={["https://*", "git://*"]}
        source={{
          html: `<html>
    <body>
       <video width="500" height="600" controls>
           <source src="https://bundr-dev.bpo.technology:7000/medialibrary/?path=/bundr/test.mp4" type="video/mp4">
            Your browser does not support the video 
       </video>
    </body>
</html>`,
        }}
      /> */}

      <Video
        ref={video}
        style={{ width: "100%", height: 200 }}
        source={{
          uri: "https://dev.socrates.buzz/media/bundr/147/5/2021/07/07/video/mp4/b2a168c8d6e5413b8570fe64d4bf743a/cehB9gE7MNMXelmEc0C-1lW3TPc.mp4",
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        onLoad={() => console.log("loaded")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
