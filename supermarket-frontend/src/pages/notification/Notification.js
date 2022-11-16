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

    const [userId, setUserId] = useState("");
    const [expoPushToken, setExpoPushToken] = useState("")
    const [notifications, setNotifications] = useState([{id:0, notification:"Notification"}])

    AsyncStorage.getItem('userId').then((value)=> setUserId(value))

    const data = {
        id:userId,
        expoPushToken: expoPushToken
    }

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

    const notificationListener = useRef();

    useEffect(() => {
        // This listener is fired whenever a notification is received while the app is foregrounded
        notificationListener.current = Notifications.addNotificationReceivedListener(response => {
            const message = response.request.content.body;
            setNotifications([...notifications,{id: notifications.length + 1, notification:message}]);
            
        });
    }, [notificationListener])

    useEffect(() => {
        const fetchData = async() => {
            try {
                await sendRequest({method:"put",data:data,route:`${baseUrl.BASE_URL}/expo/token`})
                .then((res)=>console.log(res))
            } catch (error) {
                console.log(error)
            }
        }
        if(userId.length>0 && expoPushToken.length>0){
            console.log(data)
            fetchData()
        }
    }, [userId,expoPushToken]);

    return <ScrollView>
        {notifications.map((item)=>{
            return (
                <SingleNotification key={item.id} notification={item.notification}/>
            )
        })}
    </ScrollView>

}

export default Notification;