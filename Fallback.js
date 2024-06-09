import { Text, View } from "react-native";
import React from "react";

const Fallback = () =>{
    return(
        <View style={{alignItems:"center"}}>
            <Text style={{fontSize: 30, fontWeight: "800", paddingVertical: 200}}> Không có ghi chú</Text>
        </View>
    )
}

export default Fallback;


