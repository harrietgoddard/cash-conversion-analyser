import { connect } from "react-redux";
import MainForm from './MainForm';
import { submitData, reset } from '../../data/action';

const mapDispatchToProps = dispatch => {

    return {
        handleSubmit: data => { 
            dispatch(submitData(data));
        },
        handleClick: () => dispatch(reset())
    };
    
};

export default connect(null, mapDispatchToProps)(MainForm);