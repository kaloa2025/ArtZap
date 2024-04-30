import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../constants";

const styles=StyleSheet.create({
    container:{marginTop:SIZES.medium,width:"94%",margin:"3%"},
    gallery:{
        fontFamily: "bold",
        fontSize: SIZES.large,
        color:"white",
        backgroundColor:COLORS.primary,
        margin:15
    }
})

export default styles;