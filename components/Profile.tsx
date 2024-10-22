import { Image, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { LineGraph } from 'react-native-graph';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { IconButton } from 'react-native-paper';

export default function ProfileScreen() {
    const points = [
        { date: new Date('2000-01-01T07:00:00.000Z'), value: 17000 },
        { date: new Date('2000-01-02T07:00:00.000Z'), value: 17200 },
        { date: new Date('2000-01-03T07:00:00.000Z'), value: 19000 },
        { date: new Date('2000-01-04T07:00:00.000Z'), value: 20000 },
        { date: new Date('2000-01-05T07:00:00.000Z'), value: 19000 },
        { date: new Date('2000-01-06T07:00:00.000Z'), value: 19500 },
        { date: new Date('2000-01-07T07:00:00.000Z'), value: 21000 },
        { date: new Date('2000-01-08T07:00:00.000Z'), value: 23000 },
        { date: new Date('2000-01-09T07:00:00.000Z'), value: 22000 },
        { date: new Date('2000-01-10T07:00:00.000Z'), value: 26000 },
    ];

    const trades = [
        {
            id: '1',
            symbol: 'AAPL',
            shares: 10,
            buyPrice: 150.25,
            sellPrice: 220.00,
            tickerImage: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg',
        },
        {
            id: '2',
            symbol: 'TSLA',
            shares: 5,
            buyPrice: 25.00,
            sellPrice: 220.50,
            tickerImage: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png',
        },
        {
            id: '3',
            symbol: 'Meta',
            shares: 7,
            buyPrice: 430.00,
            sellPrice: 550.00,
            tickerImage: 'https://seeklogo.com/images/M/meta-icon-new-facebook-2021-logo-83520C311D-seeklogo.com.png',
        },
    ];

    const calculateProfitLoss = (buyPrice: number, sellPrice: number) => {
        const profitLoss = ((sellPrice - buyPrice) / buyPrice) * 100;
        return Number(profitLoss.toFixed(2)); // Keeping 2 decimal places
    };


    return (
        <GestureHandlerRootView>
            <ParallaxScrollView
                headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
                headerImage={
                    <Image
                        source={require('@/assets/images/profile.png')}
                        style={styles.reactLogo}
                    />
                }>
                <ThemedView style={styles.titleContainer}>
                    <ThemedView style={styles.userHeading}>
                        <ThemedText type="title">Prodigy</ThemedText>
                        <HelloWave />
                    </ThemedView>

                    <ThemedView style={{

                    }}>
                        <IconButton
                            icon="bell-outline"
                            size={24}
                            iconColor={"rgba(255, 255, 255, 0.7)"}
                            style={{ backgroundColor: "#353638" }}
                        />
                    </ThemedView>
                </ThemedView>
                <ThemedView style={styles.portfolioValue}>
                    <ThemedText type="subtitle" style={{ color: 'white' }}>$26,000</ThemedText>
                    <ThemedText type="default" style={{ color: 'green' }}>+9,000 (+52.49%)</ThemedText>
                </ThemedView>
                <ThemedView style={styles.stepContainer}>
                    <LineGraph
                        style={styles.graph}
                        animated={true}
                        color={'#6a7ee7'}
                        points={points}
                        gradientFillColors={['#7476df5D', '#7476df4D', '#7476df00']}
                        enablePanGesture={true}
                        enableFadeInMask={true}
                        // range={range}
                        enableIndicator={true}
                        horizontalPadding={0}
                        indicatorPulsating={true}
                    />
                </ThemedView>
                <ThemedView style={styles.stepContainer}>
                    <ThemedText type="subtitle">Recent Trades</ThemedText>
                    {
                        trades.map((trade, index) => {
                            const profitLoss = calculateProfitLoss(trade.buyPrice, trade.sellPrice);

                            return (<ThemedView key={index} style={styles.tradeItem}>
                                <Image source={{ uri: trade.tickerImage }} style={styles.tickerImage} />
                                <ThemedView style={styles.tradeDetails}>
                                    <ThemedView style={styles.tradeRow}>
                                        <ThemedText style={styles.stockSymbol}>{trade.symbol}</ThemedText>
                                        <ThemedText style={styles.sharesText}>Shares: {trade.shares}</ThemedText>
                                    </ThemedView>
                                    <ThemedView style={styles.tradeRow}>
                                        <ThemedText style={styles.priceText}>Buy: ${trade.buyPrice.toFixed(2)}</ThemedText>
                                        <ThemedText style={styles.priceText}>Sell: ${trade.sellPrice.toFixed(2)}</ThemedText>
                                        <ThemedText
                                            style={[
                                                styles.profitLossText,
                                                { color: profitLoss >= 0 ? '#4CAF50' : '#F44336' }, // Green for profit, red for loss
                                            ]}
                                        >
                                            {profitLoss >= 0 ? `+${profitLoss}%` : `${profitLoss}%`}
                                        </ThemedText>
                                    </ThemedView>
                                </ThemedView>
                            </ThemedView>)
                        })
                    }
                </ThemedView>
            </ParallaxScrollView>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        justifyContent: 'space-between'
    },
    portfolioValue: {

    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        alignItems: 'center',
        margin: 'auto',
    },
    graph: {
        alignSelf: 'center',
        width: '100%',
        aspectRatio: 1.4,
        marginVertical: 20,
    },
    tradeItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000000',
        padding: 15,
        borderRadius: 10,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 5,
        elevation: 3,
    },
    tickerImage: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        marginRight: 15,
    },
    tradeDetails: {
        flex: 1,
        backgroundColor: '#000000'
    },
    tradeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        backgroundColor: '#000000'
    },
    stockSymbol: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },
    sharesText: {
        fontSize: 14,
        color: '#fff',
        marginTop: 4,
    },
    priceText: {
        fontSize: 14,
        color: '#fff',
        marginTop: 2,
    },
    profitLossText: {
        fontSize: 14,
        fontWeight: '600',
    },
    userHeading: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    }
});
