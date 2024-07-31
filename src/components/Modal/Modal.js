import React from 'react';
import classes from './Modal.module.css';
import Aux from '../hoc/Auxiliary/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'
import secure from '../../../public/icons/secure.png'
import { Col } from 'react-bootstrap';
import Image from 'next/image'


class Modal extends React.Component {


    shouldComponentUpdate(nextProps, nextState) {
       return nextProps.show !== this.props.show  || nextProps.children !== this.props.children;
    }

    componentDidUpdate() {
        console.log('[Modal] willUpdate');
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show}  clicked={this.props.modalClosed} />
                {/* <div className={classes.ModalHeader}>{this.props.header}</div> */}
                <div className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}

                    {/* <Col md={{span: 10, offset: 1}} style={{marginTop: '1em', display: 'flex', justifyContent: 'center'}}>

                    <Image
                        src={secure}
                        alt="secure"
                        height={60}
                        priority
                        />

                    </Col> */}


                </div>

            </Aux>
        );
    }
};

export default Modal