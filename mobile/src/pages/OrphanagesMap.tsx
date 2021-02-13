import React from 'react';

import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from "@expo/vector-icons";

import mapMarker from "../images/map-marker.png";
import { useNavigation } from '@react-navigation/native';

const OrphanagesMap: React.FC = () => {

    const navigation = useNavigation();

    function handleNavigateToDetails() {
        navigation.navigate('OrphanageDetails')
    }

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: -14.4274648,
                    longitude: -59.3813356,
                    latitudeDelta: 40,
                    longitudeDelta: 40
                }}
            >
                <Marker
                    icon={mapMarker}
                    calloutAnchor={{
                        x: 2.7,
                        y: 0.8
                    }}
                    coordinate={{
                        latitude: -14.4274648,
                        longitude: -59.3813356
                    }}
                >
                    <Callout tooltip onPress={handleNavigateToDetails}>
                        <View style={styles.calloutContainer}>
                            <Text style={styles.calloutText}>Orfanato</Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>

            <View style={styles.footer}>
                <Text style={styles.footerText}>2 orfanatos encontrados</Text>
                <TouchableOpacity style={styles.createOrphanageButton} onPress={() => { }} >
                    <Feather name="plus" size={20} color="#FFF" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    calloutContainer: {
        width: 160,
        height: 46,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 16,
        justifyContent: 'center'
    },

    calloutText: {
        color: '#0089A5',
        fontSize: 14,
        fontFamily: 'Nunito_700Bold'
    },

    footer: {
        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 32,

        backgroundColor: '#FFF',
        borderRadius: 20,
        height: 56,
        paddingLeft: 24,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        elevation: 3
    },

    footerText: {
        color: '#8FA7B3',
        fontFamily: 'Nunito_700Bold'
    },

    createOrphanageButton: {
        width: 56,
        height: 56,
        backgroundColor: '#15C3D6',
        borderRadius: 20,

        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default OrphanagesMap;
