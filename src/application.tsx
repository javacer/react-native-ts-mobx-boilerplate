import * as React from "react"
import {
    StyleSheet,
    Text,
    View
} from "react-native";

export class Application extends React.Component<void, void> {
    render() {
        return (
            <View style={styles.container}>
                <Text>React Native Application</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});