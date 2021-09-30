import React from "react";
import MainScreen from "./src/Main";
// import { DataLayer } from "./src/context/AppContext";
import { AuthProvider } from "./src/context/AuthContext";
import { FirebaseProvider } from "./src/context/FirebaseContext";
// import { OrderProvider } from "./src/context/OrderContext";
import VideoPlayer from "./src/VideoPlayer";

export default function App() {
  return (
    <FirebaseProvider>
      <AuthProvider>
        {/* <OrderProvider> */}
        {/* <DataLayer> */}
        <MainScreen />
        {/* </DataLayer> */}
        {/* </OrderProvider> */}
      </AuthProvider>
    </FirebaseProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 20,
//     backgroundColor: "#fff",
//     // alignItems: "center",
//     justifyContent: "center",
//   },
// });
