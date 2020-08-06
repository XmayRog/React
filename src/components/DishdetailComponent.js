import React , { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap"


class DishDetail extends Component {

    renderComments(comments) {
        

        if (comments == null) {
            return (
                <div></div>
            )
        }
        const cmnts = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                    }).format(new Date(Date.parse(comment.date)))}
                    </p>
                </li>
            )
        })
        return (
            <div className="col-12 col-md-5 m-1">
                <h4> <em><b>Comments</b></em> </h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>
            </div>
        )

    }

    renderDish(dish) {
        if (dish != null) {
            return (

                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    render() {
        const dish = this.props.selectedDish
        if (dish == null) {
            return (
                <div></div>
            )
        }

        const commentItem = this.renderComments(dish.comments)
        return (
            <div className='container' >
                <div className='row' >
                    <div className='col-md-5 col-sm-12 m-1' >
                        {this.renderDish(dish)}
                    </div>
                    {commentItem}
                </div>
            </div>
        )

    }

}


export default DishDetail;