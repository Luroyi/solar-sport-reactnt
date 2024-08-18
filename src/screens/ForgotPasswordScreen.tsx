import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AppNavigator from '../navigation/AppNavigator';

const App: React.FC = () => {
    return(
        <NavigationContainer>
            <AppNavigator/>
        
        </NavigationContainer>
    );
};

export default App;
