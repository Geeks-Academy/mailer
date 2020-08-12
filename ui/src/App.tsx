import React, { useState, useEffect } from 'react'
import GitHubLogin from 'react-github-login'
import GitHubApi from './api/github'
import SheetsApi from './api/sheets'
import MjmlApi from './api/mjml'
import './alltypes.d'

const App = () => {
  const [state, setstate] = useState({
    login: "",
    name: "",
  })
  const onSuccessGithub = (response: any) => {
    console.log(response.code)
    GitHubApi.exchangeCode(response.code).then((data) =>
      setstate({
        login: data.login,
        name: data.name,
      }))
  }

  useEffect(() => {
    SheetsApi.getAllAddresses().then((data) => {
      console.log('getAllAddresses', data)
    } )

    MjmlApi.getAllTemplates().then((data) => {
      console.log('getAllTemplates', data)
    } )
  }, [])
  return (
    <div className="App">
      <div className="container">
        <h4>Logowanie GH</h4>
        <div className="row justify-content-center">
          <GitHubLogin
            clientId="b219ca1f7082f8f04d40"
            onSuccess={onSuccessGithub}
            buttonText="LOGIN WITH GITHUB"
            className="git-login"
            valid={true}
            redirectUri="http://localhost:3000/"
          />
        </div>
        {state.login !== '' ? (
          <React.Fragment>
            <h4>Zalogowany. Dane użytkownika:</h4>
            <h5>Login:{state.login}</h5>
            <h5>Imie i nazwisko:{state.name} </h5>
          </React.Fragment>
        ) : (null)}
      </div>
    </div>
  );
}
export default App