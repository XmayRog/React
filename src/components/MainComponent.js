import React, { Component } from 'react';

import Menu from './MenuComponent';
import DishDetail from "./DishdetailComponent.js";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent"
import { DISHES } from '../shared/dishes';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };

    this.onDishSelect = this.onDishSelect.bind(this);
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }


  render() {
    return (
      <div>
        <Header />
        <Menu dishes={this.state.dishes}
          onclick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Footer />
      </div>
    );
  }
}

export default Main;
