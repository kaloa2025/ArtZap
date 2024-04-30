import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../constants";

const styles=StyleSheet.create({
    container:{
        marginTop: SIZES.xSmall,
        marginHorizontal: 10
    },
    header:{
        flexDirection: "row",
        justifyContent:"space-between",
    },
    headerTitle:{
        fontFamily: "bold",
        fontSize: SIZES.xLarge -2,
        color:COLORS.primary
    }
})
export default styles