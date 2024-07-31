import classes from './Preloader.module.css';
import React from 'react';
// import ReactLoading from 'react-loading';
import Lottie from 'lottie-react';
import * as location from '../1055-world-locations.json';
import * as failure from '../1122-failure.json';
import Aux from '../hoc/Auxiliary/Auxiliary';



class Preloader extends React.Component {

    constructor(props){
        super(props)
        this.state={
          switchDefault: false
        }
    }

    switchDefaultFunc = () => {
        this.setState({switchDefault: true})
    }

    render(){
    setTimeout(() => {
        this.switchDefaultFunc()
    },10000)

    // {
    //   loop: true,
    //   autoplay: true,
    //   animationData: location,
    //   rendererSettings: {
    //     preserveAspectRatio: 'xMidYMid slice'
    //   }

        let defaultOptions = {
            loop: true,
            animationData: location,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }

          };

          if(this.state.switchDefault) {
             defaultOptions = {
                loop: false,
                animationData: failure,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
                }
              };
          }



        return(
          <Aux>
             <div className={defaultOptions.loop === false ? classes.Pre + ' ' + classes.pad : classes.Pre} >
                {/* <ReactLoading text="connecting" type="bubbles" color="red" height={'20%'} width={'20%'} /> */}

               <div className={classes.inner}>

               <Lottie animationData={defaultOptions.animationData}
                  loop={defaultOptions.loop}
                  rendererSettings={{...defaultOptions.rendererSettings}}
                  className={classes.d}
                  />


                {/* isStopped={this.state.isStopped} */}
                  {/* isPaused={this.state.isPaused} */}
                  <div>
                  <p className={classes.p}>{defaultOptions.loop === false ? 'Error Connecting to Wallet' : ''}</p>
                  </div>

               </div>
            </div>


          </Aux>

        );
    }

}

export default Preloader;