// Tạo react component
import React, {Component} from "react";
import {Card,CardImg, CardImgOverlay,CardText, CardBody, CardTitle} from "reactstrap";
class Menu extends Component{
    // định nghĩa constructor nhận tham số gọi là props.
    constructor(props){
        //cung cấp cho props super class ( bắt buộc bất cứ khi nào xác định 1 class component.)
        super(props);
        // tác dụng lưu trữ các propety liên quan đến component này và có thể sử dụng.
                this.state = {
            selectedDish:null
        };
    }
    onDishSelect(dish){
        this.setState({selectedDish:dish})
    }
    renderDish(dish){
        if(dish != null){
            return(
                <Card>
                      <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                        </CardBody>
                </Card>
            )
        }
        else{
            return (
            <div></div>
            )
        }
    }
    //chuyển chế độ xem tương ứng cho thành phần này
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.onDishSelect(dish)}>
                      <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
             
                  {menu}
             
            </div>
            <div className="row">
                {this.renderDish(this.state.selectedDish)}
            </div>
          </div>
        );
    }
}
// Xuất component đó từ file này 
export default Menu;