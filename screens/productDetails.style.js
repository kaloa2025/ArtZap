import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../constants";

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    upperRow:{
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",
        position:"absolute",
        top: SIZES.xxLarge,
        width: SIZES.width -44,
        zIndex: 999
    },
    image:{
        aspectRatio: 1,
        resizeMode:"cover",
    },
    details:{
        marginTop:-SIZES.large,
        backgroundColor: COLORS.lightWhite,
        width:SIZES.width,
        height:"100%",
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium,
    },
    titleRow:{
        marginHorizontal: 20,
        paddingBottom: SIZES.large,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems :"center",
        width: SIZES.width -44,
        top:10,
    },

    ratingRow:{
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignltems :"center",
        width: SIZES.width -15,
        top: -20
    },
    rating: {
        top: SIZES.large,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems :'center',
        marginHorizontal: SIZES.large
    },
    ratingText :{
        color: COLORS.gray,
        fontFamily:"medium"
    },
    descriptionWrapper:{
        marginTop: SIZES.large-20,
        marginHorizontal:SIZES.large,
    },
    description:{
        fontFamily:"medium",
        fontSize: SIZES.large-2,
    },
    dText :{
        fontFamily:"regular",
        fontSize: SIZES.small,
        textAlign:"justify",
        marginBottom: SIZES.small,
        color:COLORS.gray
    },

    title:{
        fontFamily:"bold",
        fontSize:SIZES.large
    },
    price:{
        paddingHorizontal: 10,
        fontFamily:"semibold",
        fontSize: SIZES.medium,
        color:COLORS.primary
    },
    pricewrapper:{
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.large
    },
    location : {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:COLORS.white,
        padding: 10,
        paddingHorizontal:18
    },
    cartRow: {
        paddingBottom:SIZES.small,
        flexDirection :"row",
        justifyContent:"space-between",
        alignItems:"center",
        width: SIZES.width,
    },
    cartBtn: {
        width: SIZES.width*0.3,
        backgroundColor: COLORS.primary,
        padding: 8,
        borderRadius: SIZES.large,
        marginLeft: 12
    },
    addCart:{
        width:30,
        height: 30,
        borderRadius: 50,
        margin: SIZES.small,
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent:"center"
    },
    cartTitle:{
        marginLeft:10,
        fontFamily:"semibold",
        fontSize: SIZES.medium,
        color: COLORS.lightWhite
    },
})

export default styles;