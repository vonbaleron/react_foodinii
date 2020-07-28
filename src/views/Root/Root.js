import React from 'react';
import Header from '../../components/Nav/Header';
import "./index.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BreakfastsView from '../BreakfastsView/BreakfastsView';
import DinnersView from '../DinnersView/DinnersView';
import LunchesView from '../Lunches/LunchesView';
import {BreakfastsListComponent, DinnersListComponent, LunchesListComponent} from '../../components/ListComponent/ListComponent';
import Modal from '../../components/Modal/Modal';

class Root extends React.Component {
  
  state = {
    isModalOpen: false,
  }

  openModal = () => {
    this.setState({
      isModalOpen: true,
    })
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    })
  }

  render() {
    const {isModalOpen} = this.state;

    return (
      <BrowserRouter>
        <>
          <Header/>
          <Switch>
            <Route exact path="/" component={BreakfastsView}>
              <BreakfastsListComponent/>
            </Route>
            <Route path="/dinners" component={DinnersView}>
              <DinnersListComponent />
            </Route>
            <Route path="/lunches" component={LunchesView}>
              <LunchesListComponent />
            </Route>
          </Switch>
          { isModalOpen && <Modal closeModalFn={this.closeModal}/>}
        </>
      </BrowserRouter>
    );
  }
};

export default Root;
