import React, { useState, useEffect } from 'react';
import styles from './styles';
import {
	SafeAreaView,
	View,
	Image,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import { firebase } from './../../../firebase/config';

const eventsCollection = firebase.firestore().collection('events');

export default function SingleEventScreen() {
	const navigation = useNavigation();
	const [eventsData, setEventsData] = useState([]);

	// useEffect(() => {
	// 	const currentUser = firebase.auth().currentUser.uid;
	// 	console.log(currentUser);
	// 	// // console.log(currentUser);
	// 	// if (currentUser) {
	// 	// 	eventsCollection.get().then((data) => {
	// 	// 		let result = [];
	// 	// 		data.forEach((element) => {
	// 	// 			if (element.exists == true && element.data().userId != null) {
	// 	// 				if (element.data().userId === currentUser) {
	// 	// 					result.push(element.data());
	// 	// 				}
	// 	// 			}
	// 	// 		});

	// 	// 		setEventsData(result);

	// 	// 		console.log(eventsData);
	// 	// 	});
	// 	// }
	// }, []);

	//max 30minutes

	// firestore data is array...

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.eventNameText}>Lauren's Graduation Bash </Text>
			<View style={(styles.menuWrapper, { marginTop: 20 })}>
				<View>
					<View style={styles.menuItem}>
						<Icon name='calendar-range' color='#FF6347' size={25} />
						<Text style={styles.menuItemText}>April 10, 2021</Text>
					</View>
				</View>
				<View>
					<View style={styles.menuItem}>
						<Icon name='clock-outline' color='#FF6347' size={25} />
						<Text style={styles.menuItemText}>7:00 PM</Text>
					</View>
				</View>
				<View>
					<View style={styles.menuItem}>
						<Icon name='timer-sand' color='#FF6347' size={25} />
						<Text style={styles.menuItemText}>
							Voting Deadline: April 8, 2021{' '}
						</Text>
					</View>
				</View>
				<View>
					<View style={styles.menuItem}>
						<Icon name='information-outline' color='#FF6347' size={25} />
						<Text style={styles.menuItemText}>
							You have been invited to celebrate Lauren's Graduation from
							Fullstack Academy! Please click on a image to select which
							restaurants you would like the event to be held at. Look forward
							to see you there! Not sure if we should just include the Voting
							deadline in the description?
						</Text>
					</View>
				</View>
				<TouchableRipple onPress={() => {}}>
					<View style={styles.menuItem}>
						<Icon name='map-marker-radius' color='#FF6347' size={25} />
						<Text style={styles.menuItemText}>Pending...</Text>
					</View>
				</TouchableRipple>

				<ScrollView>
					<View style={styles.imageContainer}>
						<TouchableOpacity
							activeOpacity={0.5}
							onPress={() => navigation.navigate('Restaurant Swipe')}
						>
							<Image
								style={styles.image}
								source={{
									uri: 'https://picsum.photos/seed/picsum/596/354',
								}}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={0.5}
							onPress={() => navigation.navigate('Restaurant Swipe')}
						>
							<Image
								style={styles.image}
								source={{
									uri: 'https://picsum.photos/seed/picsum/536/354',
								}}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={0.5}
							onPress={() => navigation.navigate('Restaurant Swipe')}
						>
							<Image
								style={styles.image}
								source={{
									uri: 'https://picsum.photos/seed/picsum/536/354',
								}}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={0.5}
							onPress={() => navigation.navigate('Restaurant Swipe')}
						>
							<Image
								style={styles.image}
								source={{
									uri: 'https://picsum.photos/seed/picsum/536/354',
								}}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={0.5}
							onPress={() => navigation.navigate('Restaurant Swipe')}
						>
							<Image
								style={styles.image}
								source={{
									uri: 'https://picsum.photos/seed/picsum/536/354',
								}}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={0.5}
							onPress={() => navigation.navigate('Restaurant Swipe')}
						>
							<Image
								style={styles.image}
								source={{
									uri: 'https://picsum.photos/seed/picsum/536/354',
								}}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={0.5}
							onPress={() => navigation.navigate('Restaurant Swipe')}
						>
							<Image
								style={styles.image}
								source={{
									uri: 'https://picsum.photos/seed/picsum/536/354',
								}}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={0.5}
							onPress={() => navigation.navigate('Restaurant Swipe')}
						>
							<Image
								style={styles.image}
								source={{
									uri: 'https://picsum.photos/seed/picsum/536/354',
								}}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={0.5}
							onPress={() => navigation.navigate('Restaurant Swipe')}
						>
							<Image
								style={styles.image}
								source={{
									uri: 'https://picsum.photos/seed/picsum/536/354',
								}}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={0.5}
							onPress={() => navigation.navigate('Restaurant Swipe')}
						>
							<Image
								style={styles.image}
								source={{
									uri: 'https://picsum.photos/seed/picsum/536/354',
								}}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={0.5}
							onPress={() => navigation.navigate('Restaurant Swipe')}
						>
							<Image
								style={styles.image}
								source={{
									uri: 'https://picsum.photos/seed/picsum/536/354',
								}}
							/>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}
