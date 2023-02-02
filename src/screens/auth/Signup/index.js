import React, { useState } from "react";
import { View, Text } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Checkbox from "../../../components/Checkbox";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { styles } from "./styles";
import Separator from "../../../components/Separator";
import ImageButton from "../../../components/ImageButton";


const Signup = () => {

    const [checked, setChecked] = useState(false)

    return (
        <View style={styles.container}>
            <AuthHeader title={"Sign Up"} />
            <Input label="Name" placeholder="John Doe"/>
            <Input label="Email" placeholder="example@gmail.com"/>
            <Input isPassword label="Password" placeholder="******"/>
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked}/>
                <Text style={styles.text}>I agree with <Text style={styles.textBold}>Terms</Text> & <Text style={styles.textBold}>Privacy</Text></Text>
            </View>
            <View style={styles.button}>
                <Button title="Sign Up" />
            </View>
            <Separator />
            <ImageButton />
            <View style={styles.bottomRow}>
            <Text style={styles.text}>Already have an account? <Text style={styles.textBold}>Sign In</Text></Text>
            </View>
        </View>
    )
}
export default Signup