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
    return <ScrollView>
        <SingleNotification notification={"test notification"}/>
    </ScrollView>
}

export default Notification;