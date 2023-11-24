import {Route, Switch} from 'react-router-dom'

import {Component} from 'react'

import LoginForm from './components/LoginForm'
import Home from './components/Home'

import CreateContext from './Context/CreateContext'

import './App.css'

class App extends Component {
  state = {
    submit: true,
  }

  toggleSubmit = () => {
    this.setState(prevState => ({submit: !prevState.submit}))
  }

  render() {
    const {submit} = this.state
    return (
      <CreateContext.Provider
        value={{
          submit,
          toggleSubmit: this.toggleSubmit,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
        </Switch>
      </CreateContext.Provider>
    )
  }
}

export default App

/*
// These are the lists used in the application. You can move them to any component needed.
const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

*/
