import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FactList } from "./fact/FactList";
import { FactCreate } from "./fact/FactCreate";
import { FactEdit } from "./fact/FactEdit";
import { FactShow } from "./fact/FactShow";
import { JokeList } from "./joke/JokeList";
import { JokeCreate } from "./joke/JokeCreate";
import { JokeEdit } from "./joke/JokeEdit";
import { JokeShow } from "./joke/JokeShow";
import { FortuneMessageList } from "./fortuneMessage/FortuneMessageList";
import { FortuneMessageCreate } from "./fortuneMessage/FortuneMessageCreate";
import { FortuneMessageEdit } from "./fortuneMessage/FortuneMessageEdit";
import { FortuneMessageShow } from "./fortuneMessage/FortuneMessageShow";
import { SettingsList } from "./settings/SettingsList";
import { SettingsCreate } from "./settings/SettingsCreate";
import { SettingsEdit } from "./settings/SettingsEdit";
import { SettingsShow } from "./settings/SettingsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AIInteractionService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Fact"
          list={FactList}
          edit={FactEdit}
          create={FactCreate}
          show={FactShow}
        />
        <Resource
          name="Joke"
          list={JokeList}
          edit={JokeEdit}
          create={JokeCreate}
          show={JokeShow}
        />
        <Resource
          name="FortuneMessage"
          list={FortuneMessageList}
          edit={FortuneMessageEdit}
          create={FortuneMessageCreate}
          show={FortuneMessageShow}
        />
        <Resource
          name="Settings"
          list={SettingsList}
          edit={SettingsEdit}
          create={SettingsCreate}
          show={SettingsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
