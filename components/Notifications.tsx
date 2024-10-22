import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

const notifications = [
    { id: '1', title: 'Sell Signal', message: 'Sell AAPL at $155.00', time: '2m ago' },
    { id: '2', title: 'Sell Signal', message: 'Sell TSLA at $235.00', time: '10m ago' },
    { id: '3', title: 'Buy Signal', message: 'Buy TSLA at $228.00', time: '30m ago' },
    { id: '4', title: 'Buy Signal', message: 'Buy AAPL at $150.00', time: '1h ago' },
    { id: '5', title: 'Sell Signal', message: 'Sell NVDA at $130.00', time: '1d ago' },
    { id: '6', title: 'Sell Signal', message: 'Sell AMD at $160.00', time: '2d ago' },
    { id: '7', title: 'Buy Signal', message: 'Buy AMD at $148.00', time: '6 days ago' },
    { id: '8', title: 'Sell Signal', message: 'Buy NVDA at $98.00', time: 'month ago' },
];

const NotificationScreen = () => {
    // @ts-ignore
    const renderNotification = ({ item }) => (
        <ThemedView style={styles.notificationContainer}>
            <ThemedText style={styles.title}>{item.title}</ThemedText>
            <ThemedText style={[styles.message, {
                color: item.message.includes('Buy') ? '#4CAF50' : '#F44336'
            }]}>{item.message}</ThemedText>
            <ThemedText style={styles.time}>{item.time}</ThemedText>
        </ThemedView>
    );

    return (
        <ThemedView style={styles.container}>
            <FlatList
                data={notifications}
                keyExtractor={(item) => item.id}
                renderItem={renderNotification}
                contentContainerStyle={styles.listContent}
            />
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
    },
    listContent: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    notificationContainer: {
        backgroundColor: '#202123',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 4,
    },
    message: {
        fontSize: 14,
        marginBottom: 8,
    },
    time: {
        fontSize: 12,
        color: '#fff',
    },
});

export default NotificationScreen;
