import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../constants";

const styles=StyleSheet.create({
    bgimage:{
        flex: 1,
        justifyContent: 'center',
    },
    container:{
        flex:1,
        alignSelf:"center",
        width:"94%",
        marginTop:"5%",
        height:120
    },
    welcomeTxt:(color,top)=>({
        fontFamily: "bold",
        fontSize: SIZES.xxLarge -9,
        marginTop: top,
        color: color,
        marginHorizontal:10,
    }),
    searchContainer:{
        marginTop:"2%",
        flexDirection: "row" ,
        justifyContent:"center",
        alignContent :"center",
        backgroundColor: COLORS.white,
        marginVerticat: SIZES.medium,
        height:50,
    },
    searchIcon:{
        marginHorizontal:18,
        color:COLORS.primary,
        margin:15
    },
    searchWrapper:{
        flex:1,
        marginRight:SIZES.xSmall,
    },
    searchInput:{
        color:COLORS.white,
        fontFamily:"regular",
        fontSize:SIZES.xSmall,
        width:"100%",
        height:"100%",
        paddingHorizontal:SIZES.xSmall
    },
    searchBtn:{
        width:50,
        height:"100%",
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:COLORS.primary
    }
})
export default styles