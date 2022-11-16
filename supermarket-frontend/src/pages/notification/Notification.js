import { useState, useEffect, useRef } from 'react'
import { ScrollView} from "react-native";
import SingleNotification from "../../components/SingleNotification/SingleNotification";
import * as Notifications from 'expo-notifications';
import sendRequest from "../../utils/axios";
import baseUrl from "../../../config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
  });

const Notification = () => {

    const registerForPushNotificationsAsync = async() => {
        let token;
    
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
    
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }

        token = (await Notifications.getExpoPushTokenAsync()).data;
        setExpoPushToken(token)
    }

    useEffect(() => {
        // Get a token
        registerForPushNotificationsAsync()
        }, [])

    return <ScrollView>
        <SingleNotification notification={"test notification"}/>
    </ScrollView>
}

export default Notification;