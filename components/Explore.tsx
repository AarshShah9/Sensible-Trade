import * as React from 'react';
import { View, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Card, IconButton, Text } from 'react-native-paper';
import { ThemedView } from "@/components/ThemedView";
import PortfolioCard from './Card';

const content = [
    {
        TKR: "TSLA",
        percentageChange: 10.00,
        uri: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
        corp: "Tesla Inc."
    },
    {
        TKR: "NVDA",
        percentageChange: 25.00,
        uri: "https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/1200px-Nvidia_logo.svg.png",
        corp: "NVIDIA Corp."
    },
    {
        TKR: "APPL",
        percentageChange: 12.00,
        uri: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
        corp: "Apple Inc."
    }
]

const portfolioItems = [
    {
        title: "Alpha Whale",
        portfolioValue: 2500000.00,
        percentageChange: 12.56,
        riskLevel: "High",
        icon: "shark",
        profession: "Hedge Fund Manager",
        alert: "BUY 120 X @ 156.78",
        alertSell: false,
        hidden: true,
    },
    {
        title: "Quantum Hedge",
        portfolioValue: 13000000.50,
        percentageChange: 65.23,
        riskLevel: "High",
        icon: "turtle",
        profession: "Quantitative Analyst",
        alert: "SELL 500 X @ 312.40",
        alertSell: true,
        hidden: true,
    },
    {
        title: "Venture Viper",
        portfolioValue: 470000.75,
        percentageChange: -4.78,
        riskLevel: "High",
        icon: "snake",
        profession: "Venture Capitalist",
        alert: "BUY 300 X @ 223.15",
        alertSell: false,
        hidden: true,
    },
];

export default function Explore() {
    return (
        <ThemedView style={styles.container}>
            <ScrollView>
                {/* Search Bar */}
                <View style={styles.searchBar}>
                    <IconButton
                        icon="magnify"
                        size={20}
                        iconColor={"rgba(255, 255, 255, 0.7)"}
                        style={{ padding: 0, margin: 0 }}
                    />
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="#999"
                        style={styles.searchInput}
                    />
                </View>
                {/*Markets*/}
                <Text variant="titleLarge" style={{ color: "#FFF" }}>MARKET</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.tabButton, { backgroundColor: "#202123" }]}>
                        <Text style={styles.tabButtonText}>Tech</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tabButton}>
                        <Text style={styles.tabButtonText}>Oil & Gas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tabButton}>
                        <Text style={styles.tabButtonText}>Healthcare</Text>
                    </TouchableOpacity>
                </View>
                <Card style={[styles.card, { backgroundColor: "#202123" }]}>
                    <Card.Content>
                        {content.map((c, index) => (
                            <View style={styles.topRow} key={index}>
                                <View style={{ flexDirection: "row" }}>
                                    <Image source={{ uri: c.uri }}
                                        style={styles.avatarImage} />

                                    <View>
                                        <Text variant="titleSmall" style={styles.titleText}>{c.TKR}</Text>
                                        <Text variant="titleSmall" style={styles.portfolioValue}>{c.corp}</Text>
                                    </View>
                                </View>
                                <IconButton
                                    icon="plus"
                                    size={24}
                                    iconColor={"rgba(255, 255, 255, 0.7)"}
                                    style={{ backgroundColor: "#353638" }}
                                />
                            </View>
                        ))}
                    </Card.Content>
                </Card>

                {/*RISK LEVEL*/}
                <Text variant="titleLarge" style={{ color: "#FFF" }}>RISK LEVEL</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.tabButton, { backgroundColor: "#202123" }]}>
                        <Text style={styles.tabButtonText}>High</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tabButton}>
                        <Text style={styles.tabButtonText}>Moderate</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tabButton}>
                        <Text style={styles.tabButtonText}>Low</Text>
                    </TouchableOpacity>
                </View>
                {portfolioItems.map((item, index) => (
                    <PortfolioCard key={index} {...item} />
                ))}
            </ScrollView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    portfolioValue: {
        color: "#676a6d",
    },
    titleText: {
        flex: 1,
        color: "#FFFFFF",
    },
    topRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    card: {
        marginBottom: 16,
        padding: 8,
        borderRadius: 32,
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#353638',
        paddingTop: 60
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 44,
        backgroundColor: '#202123',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
        marginBottom: 16,
        elevation: 2,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
        marginTop: 10,
    },
    tabButton: {
        backgroundColor: '#353638',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 50,
    },
    tabButtonText: {
        fontSize: 16,
        color: '#FFF',
    },
    avatarImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
        backgroundColor: "#e3e3c8",
    },
});