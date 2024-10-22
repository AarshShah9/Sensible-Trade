import React, { useState } from 'react';
import { TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

// Dummy data for forum posts
const forumPosts = [
    {
        id: '1',
        topic: 'Best Stock Trading Strategies',
        author: 'TraderJoe',
        replies: [
            { id: '1', author: 'CryptoQueen', comment: 'I always go for swing trades.' },
            { id: '2', author: 'StockMaster', comment: 'Day trading is the best for me!' },
        ],
    },
    {
        id: '2',
        topic: 'How to Manage Risk when trading?',
        author: 'CryptoKing',
        replies: [
            { id: '1', author: 'TraderJoe', comment: 'Always use stop losses.' },
            { id: '2', author: 'FinanceWizard', comment: 'Diversify your assets!' },
        ],
    },
];

const ForumScreen = () => {
    const [comment, setComment] = useState('');
    const [reply, setReply] = useState('');

    // @ts-ignore
    const renderPost = ({ item }) => (
        <ThemedView style={styles.postContainer}>
            <ThemedText style={styles.topicTitle}>{item.topic}</ThemedText>
            <ThemedText style={styles.authorText}>Posted by: {item.author}</ThemedText>
            <ThemedView style={styles.repliesContainer}>
                {item.replies.map(
                    // @ts-ignore
                    (reply) => (
                        <ThemedView key={reply.id} style={styles.replyBox}>
                            <ThemedText style={styles.replyAuthor}>{reply.author}:</ThemedText>
                            <ThemedText style={styles.replyComment}>{reply.comment}</ThemedText>
                        </ThemedView>
                    ))}
            </ThemedView>
            <TextInput
                style={styles.commentInput}
                placeholder="Write a comment..."
                placeholderTextColor="#888"
                value={comment}
                onChangeText={setComment}
            />
            <TouchableOpacity style={styles.commentButton}>
                <ThemedText style={styles.commentButtonText}>Comment</ThemedText>
            </TouchableOpacity>
        </ThemedView>
    );

    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.screenTitle}>Trader Forum</ThemedText>
            <FlatList
                data={forumPosts}
                keyExtractor={(item) => item.id}
                renderItem={renderPost}
                contentContainerStyle={styles.listContent}
            />
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#1a1a1a',
        paddingTop: 60,
    },
    screenTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    listContent: {
        paddingBottom: 16,
    },
    postContainer: {
        backgroundColor: '#1a1a1a',
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4,
    },
    topicTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    authorText: {
        color: '#888',
        fontSize: 14,
        marginBottom: 12,
    },
    repliesContainer: {
        marginBottom: 12,
    },
    replyBox: {
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 8,
        marginBottom: 8,
    },
    replyAuthor: {
        color: '#4CAF50',
        fontWeight: '600',
        marginBottom: 4,
    },
    replyComment: {
        color: '#fff',
    },
    commentInput: {
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 12,
        color: '#fff',
        marginBottom: 10,
    },
    commentButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    commentButtonText: {
        color: '#fff',
        fontWeight: '600',
    },
});

export default ForumScreen;
