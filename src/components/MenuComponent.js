import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";


class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // dishes: DISHES,
        };
    }
    // renderDish(dish) {
    //     if (dish != null) {
    //         return (
    //             <Card>
    //                 <CardImg width="100%" src={dish.image} alt={dish.name} />
    //                 <CardBody>
    //                     <CardTitle>{dish.name}</CardTitle>
    //                     <CardText>{dish.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         );
    //     }
    //     else {
    //         return (
    //             <div></div>
    //         );
    //     }
    // }

    render() {

        const Menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1" >
                    <Card key={dish.id} onClick={() => this.props.onclick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay body className='ml-5'>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row" >
                    {Menu} {}
                </div>
            </div>
        );
    }
}


export default Menu;