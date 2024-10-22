import * as React from 'react';
import { StyleSheet, Animated, View, Image } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import PortfolioCard from './Card';

// Sample portfolio items
const portfolioItems = [
    {
        title: "Unanimous Llama",
        portfolioValue: 1850000.75,
        percentageChange: 7.89,
        riskLevel: "Moderate",
        icon: "cat",
        profession: "Investment Manager",
        alert: "BUY 45 AAPL @ 172.30",
        alertSell: false,
        hidden: false,
    },
    {
        title: "Jerome Powell",
        portfolioValue: 9400000.00,
        percentageChange: 98.45,
        riskLevel: "Low",
        icon: "dog",
        profession: "Chair of the Federal Reserve",
        alert: "SELL 200 TSLA @ 215.50",
        alertSell: true,
        hidden: false,

    },
    {
        title: "5i Research",
        portfolioValue: 32000.00,
        percentageChange: 3.25,
        riskLevel: "High",
        icon: "fish",
        profession: "Private Equity",
        alert: "BUY 150 AMZN @ 134.20",
        alertSell: false,
        hidden: false,

    },
    {
        title: "Wall Street Bets",
        portfolioValue: 14500.50,
        percentageChange: -20.14,
        riskLevel: "High",
        icon: "penguin",
        profession: "Retail Investor",
        alert: "SELL 500 GME @ 32.10",
        alertSell: true,
        hidden: false,

    },
    {
        title: "Hedge Hogs",
        portfolioValue: 550000.00,
        percentageChange: 15.87,
        riskLevel: "Moderate",
        icon: "dog",
        profession: "Hedge Fund Manager",
        alert: "BUY 80 MSFT @ 299.90",
        alertSell: false,
        hidden: false,

    },
    {
        title: "Quantum Investors",
        portfolioValue: 2800000.20,
        percentageChange: 25.30,
        riskLevel: "Low",
        icon: "elephant",
        profession: "Quantitative Analyst",
        alert: "SELL 150 NFLX @ 395.00",
        alertSell: true,
        hidden: false,

    }
];

export default function FeedScreen() {
    return (
        <ThemedView style={styles.container}>
            <Animated.ScrollView>
                {portfolioItems.map((item, index) => (
                    <PortfolioCard key={index} {...item} />
                ))}
            </Animated.ScrollView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#353638",
        paddingTop: 60
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#1c1c1c',
        borderRadius: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    logo: {
        width: 40,
        height: 40,
    },
});