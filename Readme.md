1) npx create-expo-app BestBuy
2) add dependencies
3) creates files

# API : Application Programming ( Interface : contact of service b/w applications )
" components communicating with each other with req(uests),res(ponses) "
[ client : request sender, server : response sender ]
[ Private APIs : organizations within, Public APIs : available for service ]
- SOAP API : simple object access protocol ; XML for message exchange
- RPC APIs : Remote Procedure Call ; client completes a function on server and server sends o/p back to client
- Websocket APIs : modern web API development ; JSON objects to pass data
- REST APIs : Representational State Transfer
x--- Components of API ---x
API client -> API Request
1. Endpoint : reuest directed to Endpoint, dedicated URL providing acess to resources
2. Method : HTTP methods : GET,POST,PUT,DELETE
3. Parameters : more context or filter results
4. Request Headers : additional info about req/res : provides metadata(authentication)
5. Request Body : actual data 
x--- Examples of API ---x

# React Hooks
->useState(),useEffect(),useContext(),useReducer()
:useState -> holds data,
const[field,changefiled]=useState('initial Value');
int,String,array
->useEffect() -> shows data acc to condition
->useLayout() -> before effect, set roles with alignments

# ReactNative
-> Button,Switch,ScrollView,View
View-Bridge-Android
import{Platform} form 'react-native' : allows platform 
StyleSheet-StyleProp
Features-> Camera,location npm install react-native-webview

# Expo
npx create-expo-app
npm run platform
expo go
app Dir - file system routing
navigation stak / <link>
expo-camera,map
continuous native generation
npx expo export -p web
cross platform devekopment

-> change ip in 
ProductCardView
bookFetch
useFetch
Search