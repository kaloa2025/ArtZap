import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../constants";

const styles=StyleSheet.create({
    body:{
        marginTop:15,
        backgroundColor:COLORS.white,
        height:'100%',
        width:"100%"
    },
    container:{
        marginTop:SIZES.medium,width:100,margin:"3%",alignItems:'center'
    },
    bcontainer:{
        marginTop:SIZES.medium,margin:"3%",width:100,alignItems:'center'
    },
    gallery:{
        fontFamily: "bold",
        fontSize: SIZES.large,
        color:"white",
        backgroundColor:COLORS.primary,
        margin:15,
    }
})

export default styles;