import React from 'react';
import { Container, Row, Col , FormGroup, Form } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/Ui/CommonSection';
import '../style/checkout.css';
import { useSelector } from 'react-redux';

const Checkout = () => {

  const totalQty = useSelector(state=> state.cart.totalQuantity);
  const totalAmounty = useSelector(state=> state.cart.totalAmount);


  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout"/>
      <section>
      <Container>
        <Row>
          <Col lg="8">
            <h6 className="fs-4 fe-bold mb-4">Billing Information</h6>
            <Form className="billing_form">
              <FormGroup className="form_group">
                <input type="text" placeholder='Enter your Name'/>
              </FormGroup>
              <FormGroup className="form_group">
                <input type="email" placeholder='Enter your email'/>
              </FormGroup>
              <FormGroup className="form_group">
                <input type="number" placeholder='Phone number'/>
              </FormGroup>
              <FormGroup className="form_group">
                <input type="text" placeholder='Street address'/>
              </FormGroup>
              <FormGroup className="form_group">
                <input type="text" placeholder='city'/>
              </FormGroup>
              <FormGroup className="form_group">
                <input type="text" placeholder='Postal code'/>
              </FormGroup>
              <FormGroup className="form_group">
                <input type="text" placeholder='Country'/>
              </FormGroup>
            </Form>
          </Col>
          <Col lg="4">
            <div className="checkout_cart mt-4">
              <h6>Total Qty : <span>{totalQty} items</span></h6>
              <h6>Subtotal Qty : <span>${totalAmounty}</span></h6>
              <h6><span>Shipping :<br />free Shipping</span> <span>0</span></h6>
              <h4>Total Cast : <span>${totalAmounty}</span></h4>
              <button className="buy_btn auth_btn w-100">Place an order</button>
            </div>
          </Col>
        </Row>
      </Container>
      </section>
    </Helmet>
  )
};

export default Checkout;