import * as React from 'react';
import { useTheme, Card, Text, Avatar, IconButton } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

// TODO use proper theming for the colors
interface CardProps {
    title: string;
    profession: string;
    portfolioValue?: number;
    percentageChange: number;
    riskLevel: string;
    icon: string;
    alert: string;
    alertSell: boolean;
    hidden: boolean;
}

const PortfolioCard = (props: CardProps) => {
    const { colors } = useTheme(); // Access the current theme colors

    const percentageChangeColor = props.percentageChange > 0 ? "#4BB543" : colors.error;
    // Format the portfolio value with commas
    const formattedPortfolioValue = props.portfolioValue?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

    const buyOrSellLogo = props.alertSell ? "arrow-down-bold" : "arrow-up-bold";
    const buyOrSellColor = props.alertSell ? colors.error : "#4BB543";

    return (
        <Card style={[styles.card, { backgroundColor: "#202123" }]}>
            <Card.Content>
                {/* Top Row: Icon and Title */}
                <View style={styles.topRow}>
                    <View style={{ flexDirection: "row" }}>
                        <Avatar.Icon size={40} icon={props.icon} style={styles.avatar} />
                        <View>
                            <Text variant="titleSmall" style={styles.titleText}>{props.title}</Text>
                            <Text variant="titleSmall" style={styles.portfolioValue}>{props.profession}</Text>
                        </View>
                    </View>
                    <IconButton
                        icon="bell-outline"
                        size={24}
                        iconColor={"rgba(255, 255, 255, 0.7)"}
                        style={{ backgroundColor: "#353638" }}
                    />
                </View>

                {/* Portfolio Value */}
                <Text variant="titleSmall" style={[styles.portfolioValue, { marginTop: 12 }]}>PORTFOLIO</Text>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text variant="titleLarge" style={{ color: "#FFFFFF", fontWeight: "ultralight" }}>{!props.hidden ? `${formattedPortfolioValue}` : "X"}</Text>
                    <Text variant="titleMedium" style={{ color: percentageChangeColor }}>{props.percentageChange}%</Text>

                </View>
                <Text variant="bodyMedium" style={{ color: "#FFFFFF" }}>Risk Level: {props.riskLevel}</Text>

                {/* Additional Text */}
                <View style={styles.secondRow}>
                    <IconButton
                        icon={buyOrSellLogo}
                        size={16}
                        iconColor={buyOrSellColor}
                        style={{ backgroundColor: "#353638", padding: 0, margin: 0 }}
                    />
                    <Text variant="titleSmall" style={{ color: "#FFF" }}>Alert: {props.alert}</Text>
                </View>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        marginBottom: 16,
        padding: 8,
        borderRadius: 32,
    },
    topRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    avatar: {
        backgroundColor: "#e3e3c8",
        marginRight: 10,
    },
    titleText: {
        flex: 1,
        color: "#FFFFFF",
    },
    portfolioValue: {
        color: "#676a6d",
    },
    secondRow: {
        flexDirection: "row",
        borderRadius: 48,
        backgroundColor: "#353638",
        paddingVertical: 8,
        paddingHorizontal: 4,
        justifyContent: "center",
        marginTop: 12,
        alignItems: "center"
    }
});

export default PortfolioCard;