import { BrowserRouter, Switch } from "react-router-dom"
import "./styles/global.scss"

// Components
import Login from "./components/Auth/Login/Login"
// Importing Redux tools....
import { createStore, applyMiddleware, combineReducers, compose } from "redux"
// import storage from "redux-persist/lib/storage"
// import { persistReducer, persistStore } from "redux-persist"
// import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"
import ReduxThunk from "redux-thunk"
import auth from "./store/reducers/Auth/auth"
import pageList from "./views/pages/Pages"
import PrivateRoute from "./views/pages/PrivateRoute/PrivateRoute"
import { AppProvider } from "./store/Context"
import RedirectRoute from "./views/pages/RedirectRoute/RedirectRoute"
import { propertyListReducer, propertyDetailsReducer } from "./store/reducers/Property/PropertyReducers"
import ScrollToTop from "./Utilities/ScrollToTop"
// const persistenceConfigs = {
//   key: "persist-key",
//   storage,
// }

const rootReducer = combineReducers( {
  auth: auth,
  propertyList: propertyListReducer,
  propertyDetails: propertyDetailsReducer
} )
// const persistedReducer = persistReducer( persistenceConfigs, rootReducer )
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancer( applyMiddleware( ReduxThunk ) )
)
// const persistedStore = persistStore( store )

function App() {
  return (
    <>
      <Provider store={ store }>
        <AppProvider >
          {/* <PersistGate persistor={ persistedStore }> */ }
          <BrowserRouter>
            <Switch>
              <RedirectRoute path="/" exact component={ Login } />
              <ScrollToTop>
                { pageList.map( ( { name, path, component } ) => (
                  <PrivateRoute path={ path } key={ name } exact component={ component } />
                ) ) }
              </ScrollToTop>
            </Switch>
          </BrowserRouter>
          {/* </PersistGate> */ }
        </AppProvider>
      </Provider>
    </>
  )
}

export default App
