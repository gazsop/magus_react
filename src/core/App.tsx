import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { CLIENT, SERVER } from "../assets/config";
import {
  USER,
  PLACEHOLDER,
  LIST_OF_POST_REQ_TYPES,
  UI_THEME,
  STATES,
} from "../assets/constants";
import {
  TRequest,
} from "../types/common";
import RouterProvider from "./NetworkRouter";
// import ErrorBoundary from "./ErrorHandler";
// import { testAdventure } from "../data/_testadventure";
import { IUserData, TUpdateUser } from "../types/user";
import { User } from "./User";
import ErrorBoundary from "./ErrorHandler";
import { Id } from "../utils/getId";
import { IAppContext, IAppData, TUpdateAppData } from "../types/app";


const initialAppData: IAppData = {
  page: "",
  loading: 0,
  debugWindow: false,
  interfaceTheme: UI_THEME.DARK,
  appStatus: process.env.NODE_ENV === "development" ? true : false,
  error: null,
  view: "desktop"
};

function AppProvider(props: {
  children: React.ReactNode;
}): React.ReactElement {
  const { serverPostRequest, serverPostError } = RouterProvider();
  const [app, setApp] = useState<IAppData>(initialAppData);
  const [userState, setUserState] = useState<User>(new User());

  const setAppData = (newValue: TUpdateAppData) => {
    setApp((prev) => ({ ...prev, ...newValue }));
  };

  useEffect(() => {
		console.log("app useeffect windowWidth");
		function handleResize() {
			if(window.innerWidth < 1000 && app.view !== "mobile") setAppData({view: "mobile"})
      else if(window.innerWidth >= 1000 && app.view !== "desktop") setAppData({view: "desktop"})
    console.log("app useeffect windowWidth", app.view, window.innerWidth);
    }
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

  /****************
   * APP - DATA
   * **************/

  console.log("app", app);

  const getAppData = { ...app };

  const getAppStatus = getAppData.appStatus;

  const getUser = ()=>userState;

  const setUser = (newValue: TUpdateUser) => setUserState(prev=>new User({...prev, ...newValue}));
  /****************
   * APP - ROUTING
   ****************/

  const requestError: TRequest = (inputData) =>
    serverPostError(inputData, setLoading("start")).then(()=>setLoading("end"));

  /****************
   * APP - UI
   ****************/

  const getLoading = Boolean(getAppData.loading);

  const setLoading = (val: "start" | "end") => {
    if (val === "start")
      setAppData({
        loading: getAppData.loading + 1,
      });
    else
      setAppData({
        loading: getAppData.loading - 1,
      });
  };

  const toggleInterfaceTheme = () =>
    getAppData.interfaceTheme === UI_THEME.DARK
      ? setAppData({
          interfaceTheme: UI_THEME.LIGHT,
        })
      : setAppData({
          interfaceTheme: UI_THEME.DARK,
        });

  const getInterfaceTheme = getAppData.interfaceTheme;

  const getDebugWindow = getAppData.debugWindow;

  return (
    <ErrorBoundary errorHandler={requestError}>
      <AppContext.Provider
        value={{
          getUser,
          setUser,
          setLoading,
          toggleInterfaceTheme,
          getInterfaceTheme,
          getAppData,
          getLoading,
          getAppStatus,
        }}
        {...(props as React.PropsWithChildren<{}>)}
      />
    </ErrorBoundary>
  );
}

const AppContext = createContext<IAppContext>({} as IAppContext);

export const useApp = () => useContext(AppContext);

export default AppProvider;
