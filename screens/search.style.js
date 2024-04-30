import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../constants";

const styles=StyleSheet.create({
    bgimage:{
        flex: 1,
        justifyContent: 'center',
    },
    container:{
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
        textAlign:'center'
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
        color:COLORS.primary,
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
    },
    appBarWrapper:{
        marginHorizontal:22,
        marginTop:SIZES.small
    },
    appBar:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    location:{
        fontFamily:'semibold',
        fontSize: SIZES.medium,
        color:COLORS.gray
    },
    cartCount: {
        position:"absolute",
        bottom: 16,
        width: 16,
        height: 16,
        borderRadius: 8,
        alignltems: "center",
        backgroundColor:"green",
        justifyContent:"center",
        zlndex:999
    },
    cartNumber:{
        fontFamily:"regular",
        fontWeight:"600",
        fontSize: 10,
        color: COLORS.lightWhite,
    },
    resultContainer:{
        marginTop:SIZES.xSmall,
        width:"94%",
        padding:15,
        margin:"3%",
        alignItems:"center",
        height:"100%",
        zIndex:-1,
    },
    lcontainer: {
        width: "100%",
        height: 250,
        margin: 2,
        marginBottom:"10%",
        backgroundColor: COLORS.white
    },
    limageContainer: {
        flex: 1,
        width: 170,
        marginLeft: SIZES.small/2,
        marginTop: SIZES.small/3,
        borderRadius: SIZES.small,
        overflow: "hidden",
    },
    limage :{
        aspectRatio: 1,
        resizeMode: 'cover'
    },
    ldetails: {
        padding: SIZES.small
    },
    ltitte: {
        fontFamily: "bold",
        fontSize: SIZES.large,
        marginBottom: 2
    },
    lsupplier: {
        fontFamily: "regular",
        fontSize: SIZES.small,
        color: COLORS.gray
    },
    lprice: {
        fontFamily: "bold",
        fontSize: SIZES.medium,
    },
    laddBtn:{
        position:'absolute',
        bottom:SIZES.xSmall,
        right:SIZES.xSmall
    }
})
export default styles