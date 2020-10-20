import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';

import Header from './components/Header';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                cardStyle: { backgroundColor: '#F2F3F5' }
            }}>
                <Screen
                    name="OrphanagesMap"
                    component={OrphanagesMap}
                    options={{ headerShown: false }}
                />
                <Screen
                    name="OrphanageDetails"
                    component={OrphanageDetails}
                    options={{ header: () => <Header title="Orfanato" showCancelButton={false} /> }}
                />
                <Screen
                    name="SelectMapPosition"
                    component={SelectMapPosition}
                    options={{ header: () => <Header title="Selecione o local" /> }}
                />
                <Screen
                    name="OrphanageData"
                    component={OrphanageData}
                    options={{ header: () => <Header title="Informe os dados" /> }}
                />
            </Navigator>
        </NavigationContainer>
    );
}
